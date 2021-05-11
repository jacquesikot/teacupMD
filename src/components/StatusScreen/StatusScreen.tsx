import React from 'react';
import { View, Text, Image } from 'react-native';
import { theme } from '..';
import Button from '../Button/Button';

import styles, { IMG_SIZE } from './styles';

interface Props {
  image: number;
  heading: string;
  subtext: string;
  buttonLabel: string;
  onPress: () => void;
}

const StatusScreen = ({
  image,
  heading,
  subtext,
  buttonLabel,
  onPress,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleBg}>
        <Image source={image} style={{ width: IMG_SIZE, height: IMG_SIZE }} />
      </View>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.subtext}>{subtext}</Text>

      <Button
        type="primary"
        label={buttonLabel}
        onPress={onPress}
        width={theme.constants.screenWidth}
      />
    </View>
  );
};

export default StatusScreen;
