import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';
import { useQuery } from 'react-query';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { SearchIcon, Trash } from '../../svg/searchIcons';
import { useAppContext } from '../../context/context';
import styles, { PRODUCT_HEIGHT, PRODUCT_WIDTH } from './styles';
import productsApi from '../../firebase/products';
import { StackScreenProps } from '@react-navigation/stack';
import { SearchNavParamList } from '../../types/navigationTypes';
import { theme } from '../../components';
import queryKeys from '../../constants/queryKeys';
import { Product as ProductType } from '../../types/product';
import Product from '../../components/Product/Product';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';
import Button from '../../components/Button/Button';

const Search = ({
  navigation,
}: StackScreenProps<SearchNavParamList, 'Search'>) => {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(true);
  const [showProduct, setShowProduct] = useState<boolean>(false);
  const [noResult, setNoResult] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  // const [products, setproducts] = useState<any[]>([]);

  const { user, manageCart } = useAppContext();

  // const loadProducts = async () => {
  //   const result = await productsApi.getProducts();
  //   setproducts(result);
  // };

  const {
    data: products,
    refetch: refetchProducts,
    isLoading,
    isError,
  } = useQuery(queryKeys.AllProducts, () => productsApi.getProducts());

  // const { data: recentSearch, refetch: refetchRecentSearch } = useQuery(
  //   'recentSearch',
  //   async () => await searchApi.getRecentSearch(user.id ? user.id : ''),
  //   {
  //     enabled: !!user.id,
  //   }
  // );

  useEffect(() => {
    setSearchResult(products);
  }, []);

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

  if (isError) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'SofiaPro-Bold',
            fontSize: wp('4%'),
            color: theme.colors.dark,
            marginBottom: 15,
          }}
        >
          Error Loading data
        </Text>
        <Button
          type="primary"
          onPress={() => refetchProducts()}
          label="Try Again"
        />
      </View>
    );
  }

  // const saveRecentSearch = async (e: string) => {
  //   if (e === '') {
  //     return;
  //   } else if (e.length < 2) {
  //     return;
  //   } else {
  //     const check = await searchApi.checkSearch(user.id ? user.id : '', e);
  //     if (check) {
  //       return;
  //     } else {
  //       await searchApi.addRecentSearch({
  //         user_id: user.id ? user.id : '',
  //         search_text: e,
  //         created_at: new Date().toISOString(),
  //       });
  //       // refetchRecentSearch();
  //     }
  //   }
  // };

  const handleSearch = async (e: any) => {
    setShowHistory(false);
    if (e.length < 1) setShowHistory(true);
    const arr: any[] = [];
    const productToSearch = products || [];
    productToSearch.map((p: ProductType) => {
      if (p.title.toLowerCase().includes(e.toLowerCase().trim())) arr.push(p);
    });

    setSearchResult(arr);
    if (searchResult.length < 1) setNoResult(true);
  };

  // const clearHistory = async () => {
  //   try {
  //     await searchApi.clearUserSearch(user.id ? user.id : '');
  //     // refetchRecentSearch();
  //     Toast.show({
  //       type: 'success',
  //       visibilityTime: 2000,
  //       autoHide: true,
  //       text1: 'Recent Search',
  //       text2: 'Search history cleared',
  //     });
  //   } catch (error) {
  //     Toast.show({
  //       type: 'error',
  //       visibilityTime: 2000,
  //       autoHide: true,
  //       text1: 'Recent Search',
  //       text2: 'Search history could not be cleared',
  //     });
  //   }
  // };

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator color={theme.colors.primary} />
  //     </View>
  //   );
  // }

  return (
    <>
      <ActivityIndicator visible={isLoading} opacity={1} />
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
            onChangeText={handleSearch}
            // onFocus={() => setFocus(true)}
          />
          {/* {focus && (
            <TouchableOpacity onPress={() => setFocus(false)}>
              <Text>cancel</Text>
            </TouchableOpacity>
          )} */}
        </View>
        {/* <>
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
          </> */}

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
                bgColor="white"
                label={item.title}
                image={
                  item.image
                    ? item.image
                    : 'https://via.placeholder.com/100x65.png/fff?text=No+Image'
                }
                price={item.price}
                sale={item.sale_price ? item.sale_price : ''}
                cart={() => addToCart(item)}
                qty={item.quantity}
                main_content={item.main_content ? item.main_content : ''}
                details={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
                width={PRODUCT_WIDTH}
                height={PRODUCT_HEIGHT}
              />
            )}
          />
        </View>

        {noResult && searchResult.length < 1 && (
          <View style={styles.noResultContainer}>
            <Text style={styles.noResultText}>
              Oppss... No product found matching your search
            </Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default Search;
