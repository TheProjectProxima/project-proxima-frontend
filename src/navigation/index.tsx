import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './appNavigator';
import { AccountNavigator } from './AccountNavigator';

// Make sure to add SignIn and Signup Navigator later along with firebase. 

export const PicLinkNavigation = () => {

  return (
    <NavigationContainer>
     <AccountNavigator/> 
    </NavigationContainer>
  );
}