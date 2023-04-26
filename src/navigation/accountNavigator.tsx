import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// import { AccountScreen } from '../../features/account/screens/AccountScreen';
import { LoginScreen } from '../screens/loginScreen';
// import { RegisterScreen } from '../../features/account/screens/RegisterScreen';


export const AccountNavigator = () => (
  <Stack.Navigator >
    {/* <Stack.Screen name="Main" component={AccountScreen} /> */}
    <Stack.Screen name="Login" component={LoginScreen} />
    {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
  </Stack.Navigator>
);