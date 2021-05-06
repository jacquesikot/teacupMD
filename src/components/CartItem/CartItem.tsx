import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import Toast from 'react-native-toast-message';

import { Trash } from '../../svg/searchIcons';
import styles from './styles';
import { theme } from '..';
import { useAppContext } from '../../context/context';
import { ProductOrder } from '../../types/contexttypes';

interface Props {
  image: string;
  title: string;
  price: string;
  product: ProductOrder;
}

const CartItem = ({ image, title, price, product }: Props) => {
  const { manageCart } = useAppContext();

  const removeFromCart = () => {
    manageCart('REMOVE_FROM_CART', product);
    Toast.show({
      text1: 'Cart',
      text2: 'Product removed from cart',
      position: 'top',
      visibilityTime: 3000,
      autoHide: true,
      type: 'success',
    });
  };

  return (
    <View style={styles.container}>
      <Image
        {...{ uri: image }}
        tint="light"
        transitionDuration={300}
        style={{ width: 90, height: 80 }}
      />
      <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={styles.titleText}>
          {title + ` (X${product.quantity})`}
        </Text>
        <Text style={styles.priceText}>{'ZK ' + price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => removeFromCart()}
        activeOpacity={0.7}
        style={styles.trashContainer}
      >
        <Trash width={20} height={22} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
