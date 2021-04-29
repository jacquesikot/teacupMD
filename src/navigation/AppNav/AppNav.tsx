import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import * as Haptics from 'expo-haptics';

import styles from './styles';
import { theme } from '../../components';
import { AppNavParamList } from '../../types/navigationTypes';
import { home, search, consult, profile } from '../../screens';
import HomeNav from '../HomeNav/HomeNav';
import {
  HomeIcon,
  SearchIcon,
  ConsultIcon,
  ProfileIcon,
} from '../../svg/homeNavIcons';
import { StackScreenProps } from '@react-navigation/stack';

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
        component={HomeNav}
        options={{
          tabBarIcon: ({ color }) => {
            return <HomeIcon color={color} />;
          },
        }}
        listeners={() => ({
          tabPress: (e) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
      />
      <AppStack.Screen
        name="Search"
        component={search}
        options={{
          tabBarIcon: ({ color }) => {
            return <SearchIcon color={color} />;
          },
        }}
        listeners={() => ({
          tabPress: (e) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
      />
      <AppStack.Screen
        name="Consult"
        component={consult}
        options={{
          tabBarIcon: ({ color }) => {
            return <ConsultIcon color={color} />;
          },
        }}
        listeners={() => ({
          tabPress: (e) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
      />
      <AppStack.Screen
        name="Profile"
        component={profile}
        options={{
          tabBarIcon: ({ color }) => {
            return <ProfileIcon color={color} />;
          },
        }}
        listeners={() => ({
          tabPress: (e) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
      />
    </AppStack.Navigator>
  );
};

export default AppNav;
