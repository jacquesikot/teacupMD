import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Animated,
  Linking,
  RefreshControl,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/routers';
import * as Haptics from 'expo-haptics';
import Toast from 'react-native-toast-message';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles from './styles';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import { theme } from '../../components';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Product from '../../components/Product/Product';
import { HomeNavParamList } from '../../types/navigationTypes';
import useHome from './useHome';
import { useAppContext } from '../../context/context';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import categoryData from './categoryData';
import isAndroid from '../../utils/isAndroid';

const PRODUCT_WIDTH = wp(41);
const PRODUCT_HEIGHT = 230;

const Home = ({ navigation }: StackScreenProps<HomeNavParamList, 'Home'>) => {
  const { products, loading, showModal, setShowModal } = useHome();

  const { manageCart, isProductInCart } = useAppContext();

  const addToCart = (product: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (isProductInCart(product)) {
      Toast.show({
        text1: 'Cart',
        text2: 'Product already in cart',
        position: 'top',
        visibilityTime: 2000,
        autoHide: true,
        type: 'info',
      });
    } else {
      manageCart('ADD_TO_CART', product, 1);
      Toast.show({
        text1: 'Cart',
        text2: 'Product added to cart',
        position: 'top',
        visibilityTime: 2000,
        autoHide: true,
        type: 'success',
      });
    }
  };

  const closeComingSoonModal = () => setShowModal(false);

  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const HEADER_HEIGHT = hp('8%') + theme.constants.screenPadding;

  const WHATSAPP_MESSAGE = encodeURI(
    'Hello Teacup, I would like to send a prescription now'
  );

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const translateY = diffClamp.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          alignItems: 'center',
          zIndex: 1,
          elevation: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          transform: [{ translateY: translateY }],
        }}
      >
        <HomeHeader
          notification={() => navigation.navigate('Notifications')}
          cartOnPress={() => navigation.navigate('Cart')}
          // displayName={name!.length > 0 ? name![0] : undefined}
        />
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          marginTop: HEADER_HEIGHT + hp('2%'),
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: scrollY } },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        <Image
          source={require('../../../assets/images/infoBanner.png')}
          style={styles.image}
        />

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              `https://wa.me/+260763596241?text=${WHATSAPP_MESSAGE}`
            )
          }
          activeOpacity={0.8}
          style={styles.add}
        >
          <Icon name="plus-circle" size={24} color={theme.colors.primary} />
          <Text style={styles.addText}>Upload prescription</Text>
        </TouchableOpacity>

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
            <Icon name="chevron-right" color={theme.colors.grey} />
          </TouchableOpacity>
        </View>

        <View style={styles.departmentSlider}>
          {loading ? (
            <SkeletonPlaceholder backgroundColor={theme.colors.white}>
              <View
                style={{
                  flexDirection: 'row',
                  width: theme.constants.screenWidth,
                }}
              >
                {skeletonArray.map((index) => (
                  <View
                    key={index}
                    style={{
                      width: wp(26),
                      height: hp(16),
                      borderRadius: wp(4),
                      marginRight: wp(4),
                    }}
                  />
                ))}
              </View>
            </SkeletonPlaceholder>
          ) : (
            <FlatList
              data={categoryData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item: any) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setShowModal(true)}
                >
                  <CategoryItem
                    bgColor="white"
                    label={item.name}
                    svg={item.svg}
                  />
                </TouchableOpacity>
              )}
            />
          )}
        </View>

        {loading && <View style={{ height: hp(3) }} />}
        <View style={styles.departmentContainer}>
          <Text style={styles.department}>Pharmacy</Text>
          <TouchableOpacity
            style={styles.moreContainer}
            onPress={() => navigation.navigate('Pharmacy')}
          >
            <Text style={styles.more}>More</Text>
            <Icon name="chevron-right" color={theme.colors.grey} />
          </TouchableOpacity>
        </View>
        <View style={styles.productSlider}>
          {loading ? (
            <SkeletonPlaceholder backgroundColor={theme.colors.white}>
              <View
                style={{
                  flexDirection: 'row',
                  width: theme.constants.screenWidth,
                }}
              >
                {skeletonArray.map((index) => (
                  <View
                    key={index}
                    style={{
                      width: wp(35),
                      height: wp(45),
                      borderRadius: wp(4),
                      marginRight: wp('5%'),
                    }}
                  />
                ))}
              </View>
            </SkeletonPlaceholder>
          ) : (
            <FlatList
              data={products}
              horizontal
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
                  width={PRODUCT_WIDTH}
                  height={PRODUCT_HEIGHT}
                  main_content={item.main_content ? item.main_content : ''}
                  details={() =>
                    navigation.navigate('ProductDetail', { product: item })
                  }
                />
              )}
            />
          )}
        </View>
        {/* <View style={styles.departmentContainer}>
          <Text style={styles.department}>Recenty Viewed</Text>
        </View>
        <View style={[styles.productSlider, { marginBottom: 30 }]}>
          {loading ? (
            <SkeletonPlaceholder backgroundColor={theme.colors.light}>
              <View
                style={{
                  flexDirection: 'row',
                  width: theme.constants.screenWidth,
                }}
              >
                {skeletonArray.map((index) => (
                  <View
                    key={index}
                    style={{
                      width: wp(35),
                      height: wp(45),
                      borderRadius: wp(4),
                      marginRight: wp('5%'),
                    }}
                  />
                ))}
              </View>
            </SkeletonPlaceholder>
          ) : (
            <FlatList
              data={products}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Product
                  bgColor="light"
                  label={item.title}
                  image={
                    item.images
                      ? item.images[0]
                      : 'https://via.placeholder.com/100x65.png/f4f5f7?text=No+Image'
                  }
                  price={item.price}
                  sale={item.sale_price ? item.sale_price : ''}
                  cart={() => addToCart(item)}
                  qty={item.quantity}
                  main_content={item.main_content ? item.main_content : ''}
                  details={() =>
                    navigation.navigate('ProductDetail', { product: item })
                  }
                />
              )}
            />
          )}
        </View> */}
        <View style={styles.tipContainer}>
          <Text style={styles.tipHeading}>TODAY'S HEALTH TIP</Text>
          <Text style={styles.tipText}>
            Feeling stressed? Read. Getting lost in a book can lower levels of
            cortisol, and hormones, by 68%.
          </Text>
          <Text style={styles.tipTiny}>-American Medical Journal</Text>
          <Text style={styles.tipLogo}>TeaCup MD</Text>
        </View>
      </Animated.ScrollView>
      <ComingSoon show={showModal} onRequestClose={closeComingSoonModal} />
    </View>
  );
};

export default Home;
