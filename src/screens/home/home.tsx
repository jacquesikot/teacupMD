import React, { useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/routers';
import * as Haptics from 'expo-haptics';
import Toast from 'react-native-toast-message';

import styles from './styles';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';
import { theme } from '../../components';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Product from '../../components/Product/Product';
import { HomeNavParamList } from '../../types/navigationTypes';
import useHome from './useHome';
import { useAppContext } from '../../context/context';

const Home = ({ navigation }: StackScreenProps<HomeNavParamList, 'Home'>) => {
  const { products, departments, loading, error } = useHome();

  const { manageCart } = useAppContext();

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

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} opacity={1} />
      <HomeHeader
        notification={() => navigation.navigate('Notifications')}
        cartOnPress={() => navigation.navigate('Cart')}
      />
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <HomeBanner />
        <View style={styles.departmentContainer}>
          <Text style={styles.department}>Departments</Text>
          <TouchableOpacity
            style={styles.moreContainer}
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'Consult',
                })
              )
            }
          >
            <Text style={styles.more}>More</Text>
            <Icon name="chevron-right" color={theme.colors.darkGrey} />
          </TouchableOpacity>
        </View>
        <View style={styles.departmentSlider}>
          <FlatList
            data={departments}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => alert('Departments coming soon')}
              >
                <CategoryItem
                  bgColor="light"
                  label={item.name}
                  image={item.img_url}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.departmentContainer}>
          <Text style={styles.department}>Pharmacy</Text>
          <TouchableOpacity
            style={styles.moreContainer}
            onPress={() => navigation.navigate('Pharmacy')}
          >
            <Text style={styles.more}>More</Text>
            <Icon name="chevron-right" color={theme.colors.darkGrey} />
          </TouchableOpacity>
        </View>
        <View style={styles.productSlider}>
          <FlatList
            data={products}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Product
                bgColor="light"
                label={item.title}
                image={item.images[0]}
                price={item.price}
                sale={item.sale_price}
                cart={() => addToCart(item)}
                details={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
              />
            )}
          />
        </View>
        <View style={styles.departmentContainer}>
          <Text style={styles.department}>Recenty Viewed</Text>
        </View>
        <View style={[styles.productSlider, { marginBottom: 30 }]}>
          <FlatList
            data={products}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Product
                bgColor="light"
                label={item.title}
                image={item.images[0]}
                price={item.price}
                sale={item.sale_price}
                cart={() => addToCart(item)}
                details={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
