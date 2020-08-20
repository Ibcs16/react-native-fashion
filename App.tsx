import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { AppRoutes } from 'src/components/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  OnBoarding,
  Welcome,
  assets as authenticationAssets,
} from './src/pages/Authentication';
import LoadAssets from './src/components/LoadAssets';
import theme from './src/components/Theme';
import AuthenticationNavigator from './src/components/AuthenticationNvaigator';

const assets = [...authenticationAssets];

const fonts = {
  'SFProDisplay-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
  'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
  'SFProDisplay-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;
