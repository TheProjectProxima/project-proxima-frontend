import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { UserProfileScreen } from '../screens/app/userProfile.screen';

const UserStack = createNativeStackNavigator();

export const UserProfileNavigator = () => {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="User"
        component={UserProfileScreen}
      />
    </UserStack.Navigator>
  );
};