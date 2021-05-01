import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import StackHeader from '../../components/StackHeader/StackHeader';
import { CommonActions } from '@react-navigation/routers';

import { ProfileNavParamList } from '../../types/navigationTypes';
import styles, { PRODUCT_WIDTH, PRODUCT_HEIGHT, MARGIN_RIGHT } from './styles';
import productData from '../home/productData';
import Product from '../../components/Product/Product';

const Saved = ({
  navigation,
}: StackScreenProps<ProfileNavParamList, 'Saved'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <StackHeader
        label="Saved Products"
        back={() => navigation.goBack()}
        color="white"
      />
      <View style={styles.productGrid}>
        <FlatList
          data={productData}
          numColumns={2}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Product
              bgColor="light"
              label={item.title}
              image={item.images[0]}
              price={item.price}
              cart={() => alert('removed from favorites')}
              details={() =>
                navigation.navigate('ProductDetail', { product: item })
              }
              width={PRODUCT_WIDTH}
              height={PRODUCT_HEIGHT}
              sale={item.sale_price}
              saved
              marginRight={MARGIN_RIGHT}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Saved;
