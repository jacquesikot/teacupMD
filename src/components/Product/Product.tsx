import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
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
}: Props) => {
  const widthValue = width ? width : 130;
  const heightValue = height ? height : 175;
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
      <TouchableWithoutFeedback onPress={details}>
        <>
          <Image source={image} />
          <Text style={styles.label} numberOfLines={2}>
            {label}
          </Text>
        </>
      </TouchableWithoutFeedback>
      <View style={{ flex: 1 }} />
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>ZK {price}</Text>
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
