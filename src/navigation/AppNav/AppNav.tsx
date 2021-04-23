import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles';
import { theme } from '../../components';
import { AppNavParamList } from '../../types/navigationTypes';
import { home, search, consult, profile } from '../../screens';
import {
  HomeIcon,
  SearchIcon,
  ConsultIcon,
  ProfileIcon,
} from '../../svg/homeNavIcons';

const AppStack = createBottomTabNavigator<AppNavParamList>();

const AppNav = () => {
  return (
    <AppStack.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.grey,
        tabStyle: styles.tabBarItem,
        style: styles.tabBar,
      }}
    >
      <AppStack.Screen
        name="Home"
        component={home}
        options={{
          tabBarIcon: ({ color }) => {
            return <HomeIcon color={color} />;
          },
        }}
      />
      <AppStack.Screen
        name="Search"
        component={search}
        options={{
          tabBarIcon: ({ color }) => {
            return <SearchIcon color={color} />;
          },
        }}
      />
      <AppStack.Screen
        name="Consult"
        component={consult}
        options={{
          tabBarIcon: ({ color }) => {
            return <ConsultIcon color={color} />;
          },
        }}
      />
      <AppStack.Screen
        name="Profile"
        component={profile}
        options={{
          tabBarIcon: ({ color }) => {
            return <ProfileIcon color={color} />;
          },
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNav;
