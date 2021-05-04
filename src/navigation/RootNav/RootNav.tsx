import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import firebase from 'firebase';

import { RootNavParamList } from '../../types/navigationTypes';
import AuthNav from '../AuthNav/AuthNav';
import AppNav from '../AppNav/AppNav';
import { useAppContext } from '../../context/context';
import authFunc from '../../firebase/auth';

const RootStack = createStackNavigator<RootNavParamList>();

const RootNav = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const { addUserDetails } = useAppContext();

  const onAuthStateChanged = async (user: any) => {
    if (user !== null) {
      addUserDetails({
        id: user.uid,
        displayName: user.displayName ? user.displayName : '',
        email: user.email,
      });
      setIsLoggedIn(true);
      setIsReady(true);
    } else {
      setIsReady(true);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    const subscribe = firebase
      .auth()
      .onAuthStateChanged((user) => onAuthStateChanged(user));
    return subscribe;
  }, []);

  // const restoreUser = async () => {
  //   firebase.auth().onAuthStateChanged(async function (user) {
  //     if (user) {
  //       setIsLoggedIn(true);
  //       const userDets = await authFunc.getUserDetails();
  //       if (userDets) {
  //         const data = {
  //           id: userDets.uid,
  //           displayName: userDets.displayName,
  //           email: userDets.email,
  //         };
  //         addUserDetails(data);
  //       }
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   });
  //   return;
  // };

  if (!isReady) return <AppLoading />;

  return (
    <RootStack.Navigator headerMode="none">
      {!isLoggedIn ? (
        <RootStack.Screen name="AuthNav" component={AuthNav} />
      ) : (
        <RootStack.Screen name="AppNav" component={AppNav} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNav;
