import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';

import { RootNav } from './src/navigation';
import firebaseInit from './src/firebase';
import { Provider } from './src/context/context';

const customFonts = {
  'SofiaPro-Black': require('./assets/fonts/SofiaProBlack.otf'),
  'SofiaPro-BlackItalic': require('./assets/fonts/SofiaProBlackItalic.otf'),
  'SofiaPro-Bold': require('./assets/fonts/SofiaProBold.otf'),
  'SofiaPro-BoldItalic': require('./assets/fonts/SofiaProBoldItalic.otf'),
  'SofiaPro-Italic': require('./assets/fonts/SofiaProRegularItalic.otf'),
  'SofiaPro-Light': require('./assets/fonts/SofiaProLight.otf'),
  'SofiaPro-LightItalic': require('./assets/fonts/SofiaProLightItalic.otf'),
  'SofiaPro-Medium': require('./assets/fonts/SofiaProMedium.otf'),
  'SofiaPro-MediumItalic': require('./assets/fonts/SofiaProMediumItalic.otf'),
  'SofiaPro-Regular': require('./assets/fonts/SofiaProRegular.otf'),
  'SofiaPro-Thin': require('./assets/fonts/SofiaProUltraLight.otf'),
  'SofiaPro-ThinItalic': require('./assets/fonts/SofiaProUltraLightItalic.otf'),
};

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);

  firebaseInit();

  const _loadFontASync = async () => {
    try {
      await Font.loadAsync(customFonts);
      setIsReady(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _loadFontASync();
  });

  return !isReady ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <Provider>
        <RootNav />
        <StatusBar style="auto" backgroundColor="#fffff" />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
    </NavigationContainer>
  );
}
