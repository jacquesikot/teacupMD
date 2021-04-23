import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { CartIcon2, NotificationIcon } from '../../svg/profileIcons';
import { useAppContext } from '../../context/context';

interface Props {
  notification: any;
  cart: any;
}

const HomeHeader = ({ notification, cart }: Props) => {
  const { user } = useAppContext();
  const name = user.displayName!.split(' ');

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{`Hi, ${name[0]}`}</Text>
        <Text style={styles.welcome}>welcome back!</Text>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={notification}>
          <CartIcon2 />
          <View style={styles.alert1}>
            <Text>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={cart}>
          <NotificationIcon />
          <View style={styles.alert2}>
            <Text>3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
