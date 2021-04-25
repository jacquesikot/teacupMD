import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeNavParamList } from '../../types/navigationTypes';
import { home, notifications, pharmacy } from '../../screens';

const HomeStack = createStackNavigator<HomeNavParamList>();

const HomeNav = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={home} />
      <HomeStack.Screen name="Notifications" component={notifications} />
      <HomeStack.Screen name="Pharmacy" component={pharmacy} />
    </HomeStack.Navigator>
  );
};

export default HomeNav;
