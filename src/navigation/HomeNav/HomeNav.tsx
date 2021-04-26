import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeNavParamList } from '../../types/navigationTypes';
import {
  home,
  notifications,
  pharmacy,
  cart,
  productDetail,
} from '../../screens';

const HomeStack = createStackNavigator<HomeNavParamList>();

const HomeNav = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={home} />
      <HomeStack.Screen name="Notifications" component={notifications} />
      <HomeStack.Screen name="Pharmacy" component={pharmacy} />
      <HomeStack.Screen name="Cart" component={cart} />
      <HomeStack.Screen name="ProductDetail" component={productDetail} />
    </HomeStack.Navigator>
  );
};

export default HomeNav;
