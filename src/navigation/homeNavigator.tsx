import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { homeScreen } from '../screens/home.screen';

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={homeScreen}
      />
    </HomeStack.Navigator>
  );
};