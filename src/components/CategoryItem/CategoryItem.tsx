import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface Props {}

const CategoryItem = () => {
  return (
    <View style={styles.container}>
      <Text>cat item</Text>
    </View>
  );
};

export default CategoryItem;
