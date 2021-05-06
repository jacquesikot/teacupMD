import React, { useRef } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import { theme } from '..';

import styles from './styles';

interface Props {
  images: any;
}

const { width, height } = Dimensions.get('window');

const ProductImgSlider = ({ images }: Props) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={theme.constants.screenWidth}
        decelerationRate="fast"
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {images.map((i: any, index: number) => (
          <Image
            key={index}
            {...{ uri: i }}
            tint="light"
            transitionDuration={300}
            style={styles.image}
          />
        ))}
      </Animated.ScrollView>
      <View style={styles.pagination}>
        {images.map((_: any, index: any) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.2, 1, 0.2],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View key={index} style={{ ...styles.dot, opacity }} />
          );
        })}
      </View>
    </View>
  );
};

export default ProductImgSlider;
