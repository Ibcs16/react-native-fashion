import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';

import OnBoarding from './src/pages/Authentication/OnBoarding';
import LoadAssets from './src/components/LoadAssets';
import Welcome from './src/pages/Authentication/Welcome';
import theme from './src/components/Theme';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts }}>
        <StatusBar barStyle="light-content" />
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;
