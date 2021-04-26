import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';

import { RootNav } from './src/navigation';
import firebaseInit from './src/firebase';
import { Provider } from './src/context/context';
import { LoadAssets, fonts, assets } from './src/utils';

export default function App() {
  firebaseInit();

  return (
    <LoadAssets fonts={fonts} assets={assets}>
      <Provider>
        <RootNav />
        <StatusBar style="auto" backgroundColor="#fffff" />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
    </LoadAssets>
  );
}
