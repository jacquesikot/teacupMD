import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthParamList } from '../../types/navigationTypes';
import {
  login,
  register,
  forgotPassword,
  onboarding,
  welcome,
} from '../../screens';

const AuthStack = createStackNavigator<AuthParamList>();

const AuthNav = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="OnBoarding" component={onboarding} />
      <AuthStack.Screen name="Welcome" component={welcome} />
      <AuthStack.Screen name="Login" component={login} />
      <AuthStack.Screen name="Register" component={register} />
      <AuthStack.Screen name="ForgotPassword" component={forgotPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthNav;
