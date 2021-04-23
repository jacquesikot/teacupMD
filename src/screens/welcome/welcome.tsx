import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { theme } from '../../components';
import { StackScreenProps } from '@react-navigation/stack';

import Button from '../../components/Button/Button';
import styles from './styles';
import { AuthParamList } from '../../types/navigationTypes';

const Welcome = ({
  navigation,
}: StackScreenProps<AuthParamList, 'Welcome'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText1}>Welcome to</Text>
          <Text style={styles.welcomeText2}>TeaCup MD</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Button
          label="Continue with Email"
          type="primary"
          width={theme.constants.screenWidth}
          onPress={() => navigation.navigate('Login')}
        />
        <View style={{ height: 20 }} />
        <Button
          label="Create an account"
          type="accent"
          width={theme.constants.screenWidth}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
