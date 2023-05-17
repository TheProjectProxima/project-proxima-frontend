import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { UserProfileScreen } from '../screens/app/userProfile.screen';
import { SettingsScreen } from '../screens/app/settings.screen';

const UserStack = createNativeStackNavigator();

export const UserProfileNavigator = () => {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="User"
        component={UserProfileScreen}
      />
      <UserStack.Screen 
        name="Settings"
        component={SettingsScreen}
      />
    </UserStack.Navigator>
  );
};