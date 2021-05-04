import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';

import { SearchIcon, Trash } from '../../svg/searchIcons';
import searchApi from '../../firebase/userSearch';
import { useAppContext } from '../../context/context';
import styles, { PRODUCT_HEIGHT, PRODUCT_WIDTH } from './styles';
import productsApi from '../../firebase/products';
import Product from '../../components/Product/Product';
import { StackScreenProps } from '@react-navigation/stack';
import { SearchNavParamList } from '../../types/navigationTypes';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';
import { theme } from '../../components';

const Search = ({
  navigation,
}: StackScreenProps<SearchNavParamList, 'Search'>) => {
  const [recentSearch, setRecentSearch] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { user, manageCart } = useAppContext();

  const addToCart = (product: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    manageCart('ADD_TO_CART', product, 1);
    Toast.show({
      text1: 'Cart',
      text2: 'Product added to cart',
      position: 'top',
      visibilityTime: 3000,
      autoHide: true,
      type: 'success',
    });
  };

  const loadData = async () => {
    const result = await searchApi.getRecentSearch(user.id ? user.id : '');
    const products = await productsApi.getProducts();
    setProducts(products);
    setRecentSearch(result);
  };

  const handleSearch = async (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    try {
      setLoading(true);
      const arr: any = [];
      products.map((p) => {
        if (p.title.toLowerCase().includes(e.nativeEvent.text.toString()))
          arr.push(p);
      });

      setSearchResult(arr);
      await searchApi.addRecentSearch({
        user_id: user.id,
        search_text: e.nativeEvent.text.toString(),
        created_at: new Date().toISOString(),
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: 'error',
        visibilityTime: 7000,
        autoHide: true,
        text1: 'Search Error',
        text2: 'Error executing search',
      });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} opacity={0.8} />
      <SafeAreaView style={styles.container}>
        <View style={styles.textInput}>
          <SearchIcon />
          <TextInput
            placeholder="Enter keywords to search"
            style={styles.placeholder}
            keyboardType="default"
            returnKeyType="search"
            autoCompleteType="off"
            autoCapitalize="none"
            onSubmitEditing={handleSearch}
          />
        </View>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.historyContainer}>
            <Text style={styles.historyText}>History</Text>
            <TouchableOpacity style={styles.trashButton}>
              <Trash />
              <Text style={styles.trashText}>Clear History</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchHistory}>
            {searchResult.length > 0 ? (
              <View
                style={{
                  width: theme.constants.screenWidth,
                  height: '100%',
                }}
              >
                <FlatList
                  data={searchResult}
                  numColumns={2}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <Product
                      bgColor="light"
                      label={item.title}
                      image={item.images[0]}
                      price={item.price}
                      cart={() => addToCart(item)}
                      details={() =>
                        navigation.navigate('ProductDetail', { product: item })
                      }
                      width={PRODUCT_WIDTH}
                      height={PRODUCT_HEIGHT}
                      sale={item.sale_price}
                    />
                  )}
                />
              </View>
            ) : (
              recentSearch.map((s) => (
                <TouchableOpacity activeOpacity={0.7} onPress={() => true}>
                  <View key={s.id.toString()} style={styles.historyItem}>
                    <Text style={styles.historyItemText}>{s.search_text}</Text>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Search;
