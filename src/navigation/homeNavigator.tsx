import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/app/home.screen';


const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};