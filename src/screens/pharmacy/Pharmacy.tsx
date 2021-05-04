import React, { useState, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import StackHeader from '../../components/StackHeader/StackHeader';
import { HomeNavParamList } from '../../types/navigationTypes';
import * as Haptics from 'expo-haptics';
import Toast from 'react-native-toast-message';

import styles, { WIDTH, HEIGHT, PRODUCT_WIDTH, PRODUCT_HEIGHT } from './styles';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Product from '../../components/Product/Product';
import { useAppContext } from '../../context/context';
import productsApi from '../../firebase/products';
import categoriesApi from '../../firebase/categories';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';

const Pharmacy = ({
  navigation,
}: StackScreenProps<HomeNavParamList, 'Pharmacy'>) => {
  const { manageCart } = useAppContext();

  const [products, setProducts] = useState<any[]>([]);
  const [searchProducts, setSearchProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [type, setType] = useState<string>('');

  const loadData = async () => {
    setLoading(true);
    const products = await productsApi.getProducts();
    const categories = await categoriesApi.getCategories();
    setProducts(products);
    setSearchProducts(products);
    setCategories(categories);
    setType(categories[0].name);
    setLoading(false);
  };

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

  const handleCategoryChange = (item: any) => {
    setType(item.name);
    const productsArr: any = [];
    products.map((p) => {
      p.category.map((c: any) => {
        if (c === item.name) productsArr.push(p);
      });
    });
    return setSearchProducts(productsArr);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} opacity={1} />
      <SafeAreaView style={styles.container}>
        <StackHeader
          color="light"
          label="Pharmacy"
          back={() => navigation.goBack()}
          cartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Image
            source={require('../../../assets/images/pharmaBanner.png')}
            style={styles.image}
          />
          <View style={styles.sliderContainer}>
            <FlatList
              data={categories}
              horizontal
              showsVerticalScrollIndicator={false}
              keyExtractor={(item: any) => item.id.toString()}
              renderItem={({ item }: any) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => handleCategoryChange(item)}
                >
                  <CategoryItem
                    bgColor="white"
                    label={item.name}
                    image={item.imgUrl}
                    width={WIDTH}
                    height={HEIGHT}
                    icon
                    active={type === item.name ? true : false}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <Text style={styles.heading}>{type}</Text>
          <View style={styles.productGrid}>
            <FlatList
              data={searchProducts}
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Product
                  bgColor="white"
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Pharmacy;
