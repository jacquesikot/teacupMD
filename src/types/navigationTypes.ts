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
  OrderStatus: { status: string };
  EditAddress: { address: DeliveryAddress } | undefined;
  ManageAddress: undefined;
};

type RootNavParamList = {
  Onboarding: undefined;
  AppNav: undefined;
};

type ProfileNavParamList = {
  Profile: undefined;
  Saved: undefined;
  EditAddress: { address: DeliveryAddress } | undefined;
  CustomerService: undefined;
  Notifications: undefined;
  ManageAddress: undefined;
  ProductDetail: { product: Product };
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

type SearchNavParamList = {
  Search: undefined;
  ProductDetail: { product: Product };
};

export {
  AuthParamList,
  AppNavParamList,
  HomeNavParamList,
  RootNavParamList,
  ProfileNavParamList,
  SearchNavParamList,
};
