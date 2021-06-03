import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';
import { useQuery } from 'react-query';

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
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Search = ({
  navigation,
}: StackScreenProps<SearchNavParamList, 'Search'>) => {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(true);
  const [showProduct, setShowProduct] = useState<boolean>(false);
  const [noResult, setNoResult] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  const { user, manageCart } = useAppContext();

  const { data: products } = useQuery('products', productsApi.getProducts);
  const { data: recentSearch, refetch: refetchRecentSearch } = useQuery(
    'recentSearch',
    async () => await searchApi.getRecentSearch(user.id ? user.id : ''),
    {
      enabled: !!user.id,
    }
  );

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

  const saveRecentSearch = async (e: string) => {
    if (e === '') {
      return;
    } else if (e.length < 2) {
      return;
    } else {
      const check = await searchApi.checkSearch(user.id ? user.id : '', e);
      if (check) {
        return;
      } else {
        await searchApi.addRecentSearch({
          user_id: user.id ? user.id : '',
          search_text: e,
          created_at: new Date().toISOString(),
        });
        refetchRecentSearch();
      }
    }
  };

  const handleSearch = async (e: any) => {
    try {
      setLoading(true);
      const arr: any = [];
      products.map((p: any) => {
        if (
          p.title
            .toLowerCase()
            .includes(e.nativeEvent.text.toString().toLowerCase().trim())
        )
          arr.push(p);
      });
      saveRecentSearch(e.nativeEvent.text.toString().toLowerCase().trim());
      if (arr.length < 1) {
        setNoResult(true);
        setShowProduct(false);
      }
      setSearchResult(arr);
      setShowProduct(true);
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

  const keyboardWillShow = () => {
    setShowHistory(false);
    setNoResult(false);
    setShowProduct(false);
  };
  const keyboardWillHide = () => {};

  const clearHistory = async () => {
    try {
      await searchApi.clearUserSearch(user.id ? user.id : '');
      refetchRecentSearch();
      Toast.show({
        type: 'success',
        visibilityTime: 2000,
        autoHide: true,
        text1: 'Recent Search',
        text2: 'Search history cleared',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        visibilityTime: 2000,
        autoHide: true,
        text1: 'Recent Search',
        text2: 'Search history could not be cleared',
      });
    }
  };

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', keyboardWillHide);

    return () => {
      Keyboard.removeListener('keyboardWillShow', keyboardWillShow);
      Keyboard.removeListener('keyboardWillHide', keyboardWillHide);
    };
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} opacity={1} />
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        >
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
              // onFocus={() => setFocus(true)}
            />
            {/* {focus && (
            <TouchableOpacity onPress={() => setFocus(false)}>
              <Text>cancel</Text>
            </TouchableOpacity>
          )} */}
          </View>
          <>
            <View style={styles.historyContainer}>
              <Text style={styles.historyText}>History</Text>
              <TouchableOpacity
                onPress={() => clearHistory()}
                style={styles.trashButton}
              >
                <Trash />
                <View style={{ width: 5 }} />
                <Text style={styles.trashText}>Clear History</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.searchHistory}>
              {recentSearch &&
                !showProduct &&
                recentSearch.map((s: any, index: number) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.7}
                    onPress={() =>
                      handleSearch({
                        nativeEvent: {
                          text: s.search_text.toString().toLowerCase().trim(),
                        },
                      })
                    }
                  >
                    <View key={s.id.toString()} style={styles.historyItem}>
                      <Text style={styles.historyItemText}>
                        {s.search_text}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </>

          {showProduct && (
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
                    qty={item.qty}
                    main_content={item.main_content}
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
          )}
          {noResult && searchResult.length < 1 && (
            <View style={styles.noResultContainer}>
              <Text style={styles.noResultText}>
                Oppss... No product found matching your search
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Search;
