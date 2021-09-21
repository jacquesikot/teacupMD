import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { Image } from 'react-native-expo-image-cache';

import { theme } from '..';

import styles, { WIDTH, HEIGHT } from './styles';

interface Props {
  width?: number;
  height?: number;
  bgColor: 'light' | 'white';
  label: string;
  image?: string;
  icon?: boolean;
  active?: boolean;
  imgWidth?: number;
  imgHeight?: number;
  svg?: ReactNode;
}

const CategoryItem = ({
  width,
  height,
  bgColor,
  label,
  image,
  icon,
  active,
  imgWidth,
  imgHeight,
  svg,
}: Props) => {
  const widthValue = width ? width : WIDTH;
  const heightValue = height ? height : HEIGHT;
  const labelColor = icon ? theme.colors.dark : theme.colors.darkGrey;
  const borderColor = active ? theme.colors.primary : theme.colors.white;
  const color = active ? theme.colors.lightBlue : theme.colors[bgColor];
  const iconBgColor = active ? theme.colors.primary : theme.colors.white;
  const iconBorderColor = active ? theme.colors.primary : theme.colors.dark;
  const iconColor = active ? theme.colors.white : theme.colors.dark;

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
      {svg ? (
        svg
      ) : (
        <Image
          {...{ uri: image! }}
          tint="light"
          transitionDuration={300}
          style={{
            width: imgWidth ? imgWidth : 55,
            height: imgHeight ? imgHeight : 53,
          }}
        />
      )}
      <View style={{ flex: 1 }} />
      <Text numberOfLines={2} style={[styles.label, { color: labelColor }]}>
        {label}
      </Text>
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
