import React from 'react';
import { View, Image, Text } from 'react-native';

import styles, {
  SCREEN_WIDTH,
  IMAGE_FORM_FACTOR,
  SCREEN_HORIZONTAL_PADDING,
} from './styles';

const IMAGE_WIDTH = SCREEN_WIDTH - SCREEN_HORIZONTAL_PADDING;

interface Props {
  image: number;
  topText: string;
  bottomText: string;
  width: number;
  height: number;
}

const Onboarding = ({ image, topText, bottomText, width, height }: Props) => {
  const IMG_RATIO = 15;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={{
            width: width / IMG_RATIO,
            height: height / IMG_RATIO,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.topText}>{topText}</Text>
        <Text style={styles.bottomText}>{bottomText}</Text>
      </View>
    </View>
  );
};

export default Onboarding;
