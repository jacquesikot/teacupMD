import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileNavParamList } from '../../types/navigationTypes';
import {
  profile,
  notifications,
  saved,
  editAddress,
  addresses,
  customerService,
  productDetail,
} from '../../screens';

const ProfileStack = createStackNavigator<ProfileNavParamList>();

const ProfileNav = () => {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Profile" component={profile} />
      <ProfileStack.Screen name="Notifications" component={notifications} />
      <ProfileStack.Screen name="Saved" component={saved} />
      <ProfileStack.Screen name="Addresses" component={addresses} />
      <ProfileStack.Screen name="EditAddress" component={editAddress} />
      <ProfileStack.Screen name="CustomerService" component={customerService} />
      <ProfileStack.Screen name="ProductDetail" component={productDetail} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNav;
