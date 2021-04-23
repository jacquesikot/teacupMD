import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import { theme } from '../../components';

interface Props {
  width?: number;
  height?: number;
  label: string;
  onPress: () => void;
  type: 'primary' | 'secondary' | 'accent';
}

const Button = ({ width, height, label, onPress, type }: Props) => {
  const backgroundColorValue =
    type === 'primary'
      ? theme.colors.primary
      : type === 'secondary'
      ? theme.colors.secondary
      : theme.colors.white;

  const color =
    type === 'primary'
      ? theme.colors.white
      : type === 'secondary'
      ? theme.colors.white
      : theme.colors.dark;
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
    </TouchableOpacity>
  );
};

export default Button;
