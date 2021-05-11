import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import AppLoading from 'expo-app-loading';

import { RootNavParamList } from '../../types/navigationTypes';
import { onboarding } from '../../screens';
import AppNav from '../AppNav/AppNav';
import storage from '../../utils/storage';

const RootStack = createStackNavigator<RootNavParamList>();

const RootNav = () => {
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  const setOnboarding = async () => {
    setIsReady(false);
    const onboarding = await storage.checkData('onboarding');
    if (onboarding) {
      setShowOnboarding(false);
      setIsReady(true);
    } else {
      await storage.storeData('onboarding', 'true');
      setShowOnboarding(true);
      setIsReady(true);
    }
  };

  useEffect(() => {
    setOnboarding();
  }, []);

  if (!isReady) return <AppLoading />;

  return (
    <RootStack.Navigator headerMode="none">
      {showOnboarding && (
        <RootStack.Screen name="Onboarding" component={onboarding} />
      )}
      <RootStack.Screen name="AppNav" component={AppNav} />
    </RootStack.Navigator>
  );
};

export default RootNav;
