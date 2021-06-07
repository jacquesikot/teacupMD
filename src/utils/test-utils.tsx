import React from 'react';
import { render } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavigationContainer from 'react-native-navigation-container';
import { Provider as RProvider } from 'react-redux';

import { Provider } from '../context/context';
import { store } from '../redux/store';
import { fonts, assets } from '../utils';

const AllTheProviders = ({ children }: any) => {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer fonts={fonts} assets={assets} stickyNav={false}>
      <QueryClientProvider client={queryClient}>
        <RProvider store={store}>
          <Provider>{children}</Provider>
        </RProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
