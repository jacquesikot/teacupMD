import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

interface Props {
  visible: boolean;
  opacity?: number;
}

const ActivityIndicator = ({ visible, opacity }: Props) => {
  if (!visible) return null;

  return (
    <View style={[styles.container, { opacity: opacity ? opacity : 0.8 }]}>
      <LottieView
        autoPlay
        loop
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('../../../assets/loading_dots.json')}
      />
    </View>
  );
};

export default ActivityIndicator;
