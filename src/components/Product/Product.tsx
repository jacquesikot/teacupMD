import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import { theme } from '..';
import { CartIcon } from '../../svg/homeIcons';
import { Trash } from '../../svg/searchIcons';
import styles, { MARGIN_RIGHT } from './styles';

interface Props {
  width?: number;
  height?: number;
  bgColor: 'light' | 'white';
  label: string;
  image: string;
  price: string;
  cart?: any;
  details: any;
  sale: string;
  saved?: any;
  marginRight?: number;
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
  saved,
  marginRight,
}: Props) => {
  const widthValue = width ? width : 145;
  const heightValue = height ? height : 185;
  const salePrice = Number(sale);
  const marginRightValue = marginRight ? marginRight : MARGIN_RIGHT;

  return (
    <View
      style={[
        styles.container,
        {
          width: widthValue,
          height: heightValue,
          backgroundColor: theme.colors[bgColor],
          marginRight: marginRightValue,
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={details}>
        <Image
          {...{ uri: image }}
          tint="light"
          transitionDuration={300}
          style={{ width: 100, height: 65 }}
        />
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
              {salePrice > 0 ? (
                <Text style={styles.discountText}>
                  {(
                    ((Number(price) - Number(sale)) / Number(price)) *
                    100
                  ).toFixed(0) + '% Off'}
                </Text>
              ) : (
                'Available'
              )}
            </Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>ZK {sale ? sale : price}</Text>
            <View style={{ flex: 1 }} />
          </View>
        </View>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={cart ? cart : saved}>
          <View style={styles.cart}>{saved ? <Trash /> : <CartIcon />}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
