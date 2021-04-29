import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import StackHeader from '../../components/StackHeader/StackHeader';
import { HomeNavParamList } from '../../types/navigationTypes';

import styles, { WIDTH, HEIGHT, PRODUCT_WIDTH, PRODUCT_HEIGHT } from './styles';
import typeData from './typeData';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Product from '../../components/Product/Product';
import { ScrollView } from 'react-native-gesture-handler';
import productData from '../home/productData';

const Pharmacy = ({
  navigation,
}: StackScreenProps<HomeNavParamList, 'Pharmacy'>) => {
  const [type, setType] = useState<string>(typeData[0].name);

  return (
    <SafeAreaView style={styles.container}>
      <StackHeader
        color="light"
        label="Pharmacy"
        back={() => navigation.goBack()}
        cart={() => alert('cart')}
      />
      <ScrollView
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
            data={typeData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }: any) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setType(item.name)}
              >
                <CategoryItem
                  bgColor="white"
                  label={item.name}
                  image={item.img}
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
            data={productData}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Product
                bgColor="white"
                label={item.title}
                image={item.images[0]}
                price={item.price}
                cart={() => alert('added to cart')}
                details={() => alert('product pressed')}
                width={PRODUCT_WIDTH}
                height={PRODUCT_HEIGHT}
                sale={item.sale_price}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pharmacy;
