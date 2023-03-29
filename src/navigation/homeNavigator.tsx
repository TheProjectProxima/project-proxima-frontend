import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { homeScreen } from '../screens/home.screen';

const HomeStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Restaurants"
        component={homeScreen}
      />
    </HomeStack.Navigator>
  );
};