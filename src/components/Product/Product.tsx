import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { theme } from '..';
import { CartIcon } from '../../svg/homeIcons';
import styles from './styles';

interface Props {
  width?: number;
  height?: number;
  bgColor: 'light' | 'white';
  label: string;
  image: number;
  price: string;
  cart: any;
  details: any;
  sale: string;
}

const Product = ({
  width,
  height,
  bgColor,
  label,
  image,
  price,
  cart,
  details,
  sale,
}: Props) => {
  const widthValue = width ? width : 145;
  const heightValue = height ? height : 185;
  const salePrice = Number(sale);
  return (
    <View
      style={[
        styles.container,
        {
          width: widthValue,
          height: heightValue,
          backgroundColor: theme.colors[bgColor],
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={details}>
        <Image source={image} style={{ width: 100, height: 65 }} />
      </TouchableOpacity>
      <Text style={styles.label} numberOfLines={2}>
        {label}
      </Text>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View>
          <View
            style={[
              styles.sale,
              {
                backgroundColor:
                  salePrice > 0 ? theme.colors.red : theme.colors.green,
              },
            ]}
          >
            <Text style={styles.saleText}>
              {salePrice > 0 ? 'Sale' : 'Available'}
            </Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>ZK {price}</Text>
            <View style={{ flex: 1 }} />
          </View>
        </View>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={cart}>
          <View style={styles.cart}>
            <CartIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
