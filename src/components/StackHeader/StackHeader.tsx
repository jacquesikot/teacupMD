import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';
import { theme } from '..';
import { CartIcon2 } from '../../svg/profileIcons';

interface Props {
  label: string;
  cart?: any;
  favorite?: any;
  back: any;
  color: 'light' | 'white';
}

const StackHeader = ({ label, cart, back, favorite, color }: Props) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.colors[color] }]}>
      <TouchableOpacity onPress={back}>
        <Icon name="chevron-left" color={theme.colors.darkGrey} size={24} />
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={cart ? cart : favorite}>
        <CartIcon2 />
        <View style={styles.alert}>
          <Text style={styles.cartText}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default StackHeader;
