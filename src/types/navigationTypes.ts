import { Product } from './product';

type AuthParamList = {
  OnBoarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Welcome: undefined;
};

type AppNavParamList = {
  Home: undefined;
  Search: undefined;
  Consult: undefined;
  Profile: undefined;
};

type HomeNavParamList = {
  Home: undefined;
  Notifications: undefined;
  Pharmacy: undefined;
  Cart: undefined;
  ProductDetail: { product: Product };
};

type RootNavParamList = {
  AuthNav: undefined;
  AppNav: undefined;
};

export { AuthParamList, AppNavParamList, HomeNavParamList, RootNavParamList };
