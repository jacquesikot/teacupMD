import React from 'react';
import { View, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { Image } from 'react-native-expo-image-cache';

import { theme } from '..';

import styles from './styles';

interface Props {
  width?: number;
  height?: number;
  bgColor: 'light' | 'white';
  label: string;
  image: string;
  icon?: boolean;
  active?: boolean;
}

const CategoryItem = ({
  width,
  height,
  bgColor,
  label,
  image,
  icon,
  active,
}: Props) => {
  const widthValue = width ? width : 105;
  const heightValue = height ? height : 116;
  const labelColor = icon ? theme.colors.dark : theme.colors.darkGrey;
  const borderColor = active ? theme.colors.primary : theme.colors.white;
  const color = active ? theme.colors.lightBlue : theme.colors[bgColor];
  const iconBgColor = active ? theme.colors.primary : theme.colors.white;
  const iconBorderColor = active ? theme.colors.primary : theme.colors.dark;
  const iconColor = active ? theme.colors.white : theme.colors.dark;

  const preview = {
    uri: `https://via.placeholder.com/${widthValue}/ebf0ff`,
  };
  return (
    <View
      style={[
        styles.container,
        {
          width: widthValue,
          height: heightValue,
          backgroundColor: color,
          borderColor: borderColor,
        },
      ]}
    >
      <Image
        {...{ uri: image }}
        tint="light"
        transitionDuration={300}
        style={{ width: 55, height: 53 }}
      />
      <View style={{ flex: 1 }} />
      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      {icon && (
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: iconBgColor, borderColor: iconBorderColor },
          ]}
        >
          <Icon name="chevron-right" color={iconColor} size={15} />
        </View>
      )}
    </View>
  );
};

export default CategoryItem;
