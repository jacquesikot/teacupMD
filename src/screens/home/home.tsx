import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import { theme } from '../../components';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader
        notification={() => alert('notification')}
        cart={() => alert('cart')}
      />
      <HomeBanner />
      <View style={styles.departmentContainer}>
        <Text style={styles.department}>Departments</Text>
        <TouchableOpacity style={styles.moreContainer}>
          <Text style={styles.more}>More</Text>
          <Icon name="chevron-right" color={theme.colors.darkGrey} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
