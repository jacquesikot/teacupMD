import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Trash } from '../../svg/searchIcons';
import styles from './styles';
import { theme } from '..';

interface Props {
  image: number;
  title: string;
  price: string;
}

const CartItem = ({ image, title, price }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={{ width: 90, height: 80 }} />
      <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={styles.titleText}>
          {title}
        </Text>
        <Text style={styles.priceText}>{'ZK ' + price}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.trashContainer}>
        <Trash width={20} height={22} />
      </TouchableOpacity>
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
  );
};

export default CartItem;
