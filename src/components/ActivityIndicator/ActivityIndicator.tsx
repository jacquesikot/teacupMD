import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

interface Props {
  visible: boolean;
}

const ActivityIndicator = ({ visible }: Props) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
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
