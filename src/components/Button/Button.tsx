import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import { theme } from '../../components';

interface Props {
  width?: number;
  height?: number;
  label: string;
  onPress: () => void;
  type: 'primary' | 'secondary' | 'light';
  loading?: boolean;
}

const Button = ({ width, height, label, onPress, type, loading }: Props) => {
  const backgroundColorValue =
    type === 'primary'
      ? theme.colors.primary
      : type === 'secondary'
      ? theme.colors.secondary
      : theme.colors.light;

  const color =
    type === 'primary'
      ? theme.colors.white
      : type === 'secondary'
      ? theme.colors.white
      : theme.colors.darkGrey;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.container,
        {
          width: width ? width : 125,
          height: height ? height : 56,
          backgroundColor: backgroundColorValue,
        },
      ]}
    >
      {!loading ? (
        <Text
          style={[
            styles.buttonText,
            {
              color: color,
            },
          ]}
        >
          {label}
        </Text>
      ) : (
        <ActivityIndicator color={theme.colors.white} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
