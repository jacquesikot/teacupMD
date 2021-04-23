/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';

import styles from './styles';

interface Props {
  data: any;
  scrollX: any;
}

const Paginator = ({ data, scrollX }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_: any, index: any) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [4, 16, 4],
          extrapolate: 'clamp',
        });

        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot, { width: dotWidth, opacity: dotOpacity }]}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
