import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeNavParamList } from '../../types/navigationTypes';
import {
  home,
  notifications,
  pharmacy,
  cart,
  productDetail,
  orderStatus,
  editAddress,
  manageAddress,
} from '../../screens';

const HomeStack = createStackNavigator<HomeNavParamList>();

const HomeNav = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={home} />
      <HomeStack.Screen name="Notifications" component={notifications} />
      <HomeStack.Screen name="Pharmacy" component={pharmacy} />
      <HomeStack.Screen name="EditAddress" component={editAddress} />
      <HomeStack.Screen name="ManageAddress" component={manageAddress} />
      <HomeStack.Screen name="Cart" component={cart} />
      <HomeStack.Screen name="ProductDetail" component={productDetail} />
      <HomeStack.Screen name="OrderStatus" component={orderStatus} />
    </HomeStack.Navigator>
  );
};

export default HomeNav;
