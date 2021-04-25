import React from 'react';
import { View, Text, Image } from 'react-native';
import { theme } from '..';

import styles from './styles';

interface Props {
  color: string;
  upperText: string;
  lowerText: string;
  image: number;
}

const ConsultTab = ({ color, upperText, lowerText, image }: Props) => {
  const colorValue =
    color === 'blue' ? theme.colors.lightBlue : theme.colors.lightGreen;

  return (
    <View style={[styles.container, { backgroundColor: colorValue }]}>
      <Text style={styles.upperText}>{upperText}</Text>
      <Text style={styles.lowerText}>{lowerText}</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default ConsultTab;
