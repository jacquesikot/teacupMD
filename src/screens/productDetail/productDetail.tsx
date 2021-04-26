import React from 'react';
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

import StackHeader from '../../components/StackHeader/StackHeader';
import { HomeNavParamList } from '../../types/navigationTypes';
import ProductImgSlider from '../../components/ProductImgSlider/ProductImgSlider';
import styles from './styles';
import { theme } from '../../components';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';
import productData from '../../screens/home/productData';

const ProductDetail = ({
  navigation,
  route,
}: StackScreenProps<HomeNavParamList, 'ProductDetail'>) => {
  const { product } = route.params;

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
          />
          <ProductImgSlider images={product.images} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.dash} />
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <View style={styles.priceItems}>
              <Text style={styles.priceText}>{'ZK ' + product.price}</Text>
              <Text style={styles.salePrice}>{'ZK ' + product.sale_price}</Text>
            </View>
            <View style={{ flex: 1 }} />
            <View style={styles.counterContainer}>
              <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.counterBox}>
                  <Icon name="minus" size={20} color={theme.colors.primary} />
                </View>
              </TouchableOpacity>
              <Text style={styles.count}> 1 </Text>
              <TouchableOpacity activeOpacity={0.6}>
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
          <Text style={styles.nutritionText}>Nutritional Information</Text>
          <Text style={styles.nutritionContent}>None</Text>
          <View style={styles.line} />
          <Text style={styles.relatedProduct}>Related Products</Text>
          <View style={{ marginBottom: 30 }}>
            <FlatList
              data={productData}
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
                    navigation.navigate('ProductDetail', { product: item })
                  }
                />
              )}
            />
          </View>
          <Button
            type="primary"
            label="Add to Cart"
            onPress={() => alert('added to cart')}
            width={theme.constants.screenWidth}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
