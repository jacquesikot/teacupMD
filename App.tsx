import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from 'react-query';

import { RootNav } from './src/navigation';
import firebaseInit from './src/firebase';
import { Provider } from './src/context/context';
import { Provider as RProvider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer, fonts, assets } from './src/utils';
import { theme } from './src/components';

export default function App() {
  const queryClient = new QueryClient();
  firebaseInit();

  return (
    <NavigationContainer fonts={fonts} assets={assets}>
      <QueryClientProvider client={queryClient}>
        <RProvider store={store}>
          <Provider>
            <RootNav />
            <StatusBar backgroundColor={theme.colors.white} />
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </Provider>
        </RProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
