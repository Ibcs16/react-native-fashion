import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AppRoutes } from '../Navigation';
import { OnBoarding, Welcome } from '../../pages/Authentication';
import Login from '../../pages/Authentication/Login';

const AuthenticationStack = createStackNavigator<AppRoutes>();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
