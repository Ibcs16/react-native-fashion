import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { AppRoutes } from 'src/components/Navigation';

import {
  OnBoarding,
  Welcome,
  assets as authenticationAssets,
} from './src/pages/Authentication';
import LoadAssets from './src/components/LoadAssets';
import theme from './src/components/Theme';

const AuthenticationStack = createStackNavigator<AppRoutes>();

const assets = [...authenticationAssets];
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

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
        <StatusBar barStyle="light-content" />
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;
