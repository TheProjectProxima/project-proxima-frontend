import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AccountNavigator } from './accountNavigator';

import { AppNavigator } from './appNavigator';

// Make sure to add SignIn and Signup Navigator later along with firebase. 

export const PicLinkNavigation = () => {

  return (
    <NavigationContainer>
     <AppNavigator/> 
    </NavigationContainer>
  );
}