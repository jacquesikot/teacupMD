import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';
import { theme } from '..';
import { CartIcon2 } from '../../svg/profileIcons';
import { SaveIcon } from '../../svg/homeIcons';
import { useAppContext } from '../../context/context';

interface Props {
  label?: string;
  cartOnPress?: any;
  favorite?: any;
  isFavorite?: boolean;
  back: any;
  color: 'light' | 'white';
}

const StackHeader = ({
  label,
  cartOnPress,
  back,
  favorite,
  color,
  isFavorite,
}: Props) => {
  const { cart } = useAppContext();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors[color] }]}>
      <TouchableOpacity onPress={back}>
        <Icon
          name="chevron-left"
          color={theme.colors.darkGrey}
          size={30}
          style={{ marginLeft: -7 }}
        />
      </TouchableOpacity>
      {label && <Text style={styles.label}>{label}</Text>}

      <View>
        {cartOnPress ? (
          <TouchableOpacity onPress={cartOnPress}>
            <CartIcon2 />
            {cart.length > 0 && (
              <View style={styles.alert}>
                <Text style={styles.cartText}>{cart.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        ) : favorite ? (
          isFavorite ? (
            <TouchableOpacity style={{ padding: 5 }} onPress={favorite}>
              <SaveIcon saved />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={{ padding: 5 }} onPress={favorite}>
              <SaveIcon />
            </TouchableOpacity>
          )
        ) : (
          <View style={{ padding: 5 }} />
        )}
      </View>
    </View>
  );
};

export default StackHeader;
