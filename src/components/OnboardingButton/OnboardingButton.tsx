import React, { useRef, useEffect } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { Feather as Icon } from '@expo/vector-icons';

import { theme } from '..';
import styles from './styles';

interface Props {
  percentage: any;
  onPress: any;
}

const OnboardingButton = ({ percentage, onPress }: Props) => {
  const size = 80;
  const strokeWidth = 4;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumfrence = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumfrence - (circumfrence * value.value) / 100;
      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [percentage]);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke={theme.colors.light}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke={theme.colors.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumfrence}
          />
        </G>
      </Svg>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={onPress}
      >
        <Icon name="arrow-right" size={24} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingButton;
