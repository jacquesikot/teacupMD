import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { AlarmIcon } from '../../svg/homeIcons';
import { AppointmentIcon, CartIcon, ConsultIcon } from '../../svg/profileIcons';
import { theme } from '..';

interface Props {
  iconType: string;
  title: string;
  body: string;
  time: string;
}

const returnIcon = (type: string) => {
  if (type === 'product') {
    return <CartIcon />;
  } else if (type === 'system') {
    return <AlarmIcon />;
  } else if (type === 'support') {
    return <AppointmentIcon />;
  } else if (type === 'chat') {
    return <ConsultIcon />;
  } else return;
};

const returnBgColor = (type: string) => {
  if (type === 'product') {
    return theme.colors.lightOrange;
  } else if (type === 'system') {
    return theme.colors.lightOrange;
  } else if (type === 'support') {
    return theme.colors.lightBlue;
  } else if (type === 'chat') {
    return theme.colors.lightBlue;
  } else return;
};

const NotificationItem = ({ iconType, title, body, time }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, { backgroundColor: returnBgColor(iconType) }]}>
        {returnIcon(iconType)}
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.body}>
          {body}
        </Text>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default NotificationItem;
