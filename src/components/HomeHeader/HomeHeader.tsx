import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { CartIcon2, NotificationIcon } from '../../svg/profileIcons';
import { useAppContext } from '../../context/context';
import authApi from '../../firebase/auth';

interface Props {
  notification: any;
  cartOnPress: any;
}

const notif = false;

const HomeHeader = ({ notification, cartOnPress }: Props) => {
  const { user, cart } = useAppContext();
  const name = user.displayName ? user.displayName.split(' ') : '';

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{`Hi, ${name[0]}`}</Text>
        <Text style={styles.welcome}>welcome back!</Text>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={cartOnPress}>
          <CartIcon2 />
          {cart.length > 0 && (
            <View style={styles.alert1}>
              <Text>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={notification}>
          <NotificationIcon />
          {notif && (
            <View style={styles.alert2}>
              <Text>3</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
