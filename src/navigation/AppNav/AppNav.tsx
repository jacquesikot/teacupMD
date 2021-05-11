import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';
import firebase from 'firebase';

import styles from './styles';
import { theme } from '../../components';
import { AppNavParamList } from '../../types/navigationTypes';
import { consult } from '../../screens';
import HomeNav from '../HomeNav/HomeNav';
import ProfileNav from '../ProfileNav/ProfileNav';
import SearchNav from '../SearchNav/SearchNav';
import {
  HomeIcon,
  SearchIcon,
  ConsultIcon,
  ProfileIcon,
} from '../../svg/homeNavIcons';
import { useAppContext } from '../../context/context';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppStack = createBottomTabNavigator<AppNavParamList>();

const AppNav = () => {
  const { addUserDetails } = useAppContext();

  const onAuthStateChanged = async (user: any) => {
    if (user !== null) {
      addUserDetails({
        id: user.uid,
        displayName: user.displayName ? user.displayName : '',
        email: user.email,
      });
    } else {
      addUserDetails({
        id: null,
        displayName: null,
        email: null,
      });
    }
  };

  useEffect(() => {
    const subscribe = firebase
      .auth()
      .onAuthStateChanged((user) => onAuthStateChanged(user));
    return subscribe;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          component={SearchNav}
          options={{
            tabBarIcon: ({ color }) => {
              return <SearchIcon color={color} />;
            },
            unmountOnBlur: true,
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
          component={ProfileNav}
          options={{
            tabBarIcon: ({ color }) => {
              return <ProfileIcon color={color} />;
            },
            unmountOnBlur: true,
          }}
          listeners={() => ({
            tabPress: (e) => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            },
          })}
        />
      </AppStack.Navigator>
    </SafeAreaView>
  );
};

export default AppNav;
