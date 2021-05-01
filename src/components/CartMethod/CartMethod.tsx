import React from 'react';
import { View, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';
import { theme } from '..';

interface Props {
  selected: boolean;
  title: string;
  subtext: string;
  type: string;
}

const CartMethod = ({ selected, title, subtext, type }: Props) => {
  const bgColor = selected ? theme.colors.lightBlue : theme.colors.white;
  const borderColor = selected ? theme.colors.primary : theme.colors.light;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: bgColor, borderColor: borderColor },
      ]}
    >
      <View style={styles.icon}>
        {type === 'credit-card' ? (
          <Icon name="credit-card" size={22} color={theme.colors.primary} />
        ) : (
          <Icon name="dollar-sign" size={22} color={theme.colors.primary} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtext}>{subtext}</Text>
      </View>
      <View style={{ flex: 1 }} />
      {selected && (
        <View style={styles.check}>
          <Icon name="check" size={14} color={theme.colors.light} />
        </View>
      )}
    </View>
  );
};

export default CartMethod;
