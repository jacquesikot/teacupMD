import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchNavParamList } from '../../types/navigationTypes';
import { search, productDetail } from '../../screens';

const SearchStack = createStackNavigator<SearchNavParamList>();

const SearchNav = () => {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="Search" component={search} />
      <SearchStack.Screen name="ProductDetail" component={productDetail} />
    </SearchStack.Navigator>
  );
};

export default SearchNav;
