import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { userProfileScreen } from '../screens/userProfile.screen';

const UserStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="User"
        component={userProfileScreen}
      />
    </UserStack.Navigator>
  );
};