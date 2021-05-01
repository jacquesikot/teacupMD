import { Product } from './product';
import deliveryAddress, { DeliveryAddress } from './deliveryAddress';

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

type ProfileNavParamList = {
  Profile: undefined;
  Saved: undefined;
  Addresses: undefined;
  CustomerService: undefined;
  Notifications: undefined;
  EditAddress: { address: DeliveryAddress };
  ProductDetail: { product: Product };
};

export {
  AuthParamList,
  AppNavParamList,
  HomeNavParamList,
  RootNavParamList,
  ProfileNavParamList,
};
