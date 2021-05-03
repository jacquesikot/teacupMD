import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Feather as Icon } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';

import StackHeader from '../../components/StackHeader/StackHeader';
import { HomeNavParamList } from '../../types/navigationTypes';
import ProductImgSlider from '../../components/ProductImgSlider/ProductImgSlider';
import styles from './styles';
import { theme } from '../../components';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';
import { useAppContext } from '../../context/context';
import productsApi from '../../firebase/products';
import favoritesApi from '../../firebase/userFavorite';

const ProductDetail = ({
  navigation,
  route,
}: StackScreenProps<HomeNavParamList, 'ProductDetail'>) => {
  const [count, setCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const { manageCart, user } = useAppContext();

  const reduce = () => {
    if (count === 1) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCount(count - 1);
  };

  const add = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCount(count + 1);
  };

  const { product } = route.params;

  const handlecart = () => {
    manageCart('ADD_TO_CART', product, count);
    Toast.show({
      text1: 'Cart',
      text2: 'Product added to cart',
      position: 'top',
      visibilityTime: 3000,
      autoHide: true,
      type: 'success',
    });
  };

  const isFav = async () => {
    const favorites = await favoritesApi.getUserFavorites(user.id);
    const isFav = favorites.some((f: any) => f.product_id === product.id);
    isFav && setIsFavorite(true);
    return;
  };

  const handleFavorites = async () => {
    if (isFavorite)
      return Toast.show({
        text1: 'Favorites',
        text2: 'Product already in favorites',
        position: 'top',
        visibilityTime: 3000,
        autoHide: true,
        type: 'info',
      });

    const data = {
      category: product.category,
      details: product.details,
      nutrition_details: product.nutrition_details,
      images: product.images,
      price: product.price,
      sale_price: product.sale_price ? product.sale_price : '',
      title: product.title,
      product_id: product.id,
      user_id: user.id,
    };
    try {
      await favoritesApi.addToFavorites(data);
      setIsFavorite(true);
      return Toast.show({
        text1: 'Favorites',
        text2: 'Product added to favorites',
        position: 'top',
        visibilityTime: 3000,
        autoHide: true,
        type: 'success',
      });
    } catch (error) {
      Toast.show({
        text1: 'Favorites',
        text2: 'Error adding product to favorites',
        position: 'top',
        visibilityTime: 3000,
        autoHide: true,
        type: 'error',
      });
    }
  };

  const loadProducts = async () => {
    setLoading(true);
    const products = await productsApi.getProducts();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
    isFav();
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
        bounces={false}
      >
        <View style={styles.topContainer}>
          <StackHeader
            label="Drug Details"
            back={() => navigation.goBack()}
            color="light"
            favorite={() => handleFavorites()}
            isFavorite={isFavorite}
          />
          <ProductImgSlider images={product.images} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.dash} />
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <View style={styles.priceItems}>
              <Text style={styles.priceText}>{'ZK ' + product.price}</Text>
              {product.sale_price !== '' && (
                <>
                  <Text style={styles.salePrice}>
                    {'ZK ' + product.sale_price}
                  </Text>
                  <Text style={styles.discount}>
                    {(
                      ((Number(product.price) - Number(product.sale_price)) /
                        Number(product.price)) *
                      100
                    ).toFixed(0) + '% Off'}
                  </Text>
                </>
              )}
            </View>
            <View style={{ flex: 1 }} />
            <View style={styles.counterContainer}>
              <TouchableOpacity activeOpacity={0.6} onPress={() => reduce()}>
                <View style={styles.counterBox}>
                  <Icon name="minus" size={20} color={theme.colors.primary} />
                </View>
              </TouchableOpacity>
              <Text style={styles.count}> {count} </Text>
              <TouchableOpacity activeOpacity={0.6} onPress={() => add()}>
                <View style={styles.counterBox}>
                  <Icon name="plus" size={20} color={theme.colors.primary} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.extraContainer}>
            <Icon name="clock" size={15} color={theme.colors.primary} />
            <Text style={styles.deliveryTime}>25-30 min</Text>
            <View style={styles.deliveryBanner}>
              <Icon name="home" size={15} color={theme.colors.primary} />
              <Text style={styles.deliveryText}>Home Delivery</Text>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsHeader}>Details</Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Text style={styles.more}>More</Text>
              <Icon
                name="chevron-right"
                color={theme.colors.darkGrey}
                size={18}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.detailsText} numberOfLines={3}>
            {product.details}
          </Text>
          <View style={styles.line} />
          <Text style={styles.nutritionText}>How to use</Text>
          <Text numberOfLines={4} style={styles.nutritionContent}>
            {product.nutrition_details}
          </Text>
          <View style={styles.line} />
          <Text style={styles.relatedProduct}>Related Products</Text>
          <View style={{ marginBottom: 30 }}>
            <FlatList
              data={products}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Product
                  bgColor="white"
                  label={item.title}
                  image={item.images[0]}
                  price={item.price}
                  sale={item.sale_price}
                  cart={() => alert('added to cart')}
                  details={() =>
                    navigation.push('ProductDetail', { product: item })
                  }
                />
              )}
            />
          </View>
          <Button
            type="primary"
            label="Add to Cart"
            onPress={() => handlecart()}
            width={theme.constants.screenWidth}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
