import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileNavParamList } from '../../types/navigationTypes';
import {
  profile,
  notifications,
  saved,
  manageAddress,
  editAddress,
  customerService,
  productDetail,
  login,
  register,
  forgotPassword,
} from '../../screens';

const ProfileStack = createStackNavigator<ProfileNavParamList>();

const ProfileNav = () => {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Profile" component={profile} />
      <ProfileStack.Screen name="Notifications" component={notifications} />
      <ProfileStack.Screen name="Saved" component={saved} />
      <ProfileStack.Screen name="Login" component={login} />
      <ProfileStack.Screen name="Register" component={register} />
      <ProfileStack.Screen name="ForgotPassword" component={forgotPassword} />
      <ProfileStack.Screen name="EditAddress" component={editAddress} />
      <ProfileStack.Screen name="ManageAddress" component={manageAddress} />
      <ProfileStack.Screen name="CustomerService" component={customerService} />
      <ProfileStack.Screen name="ProductDetail" component={productDetail} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNav;
