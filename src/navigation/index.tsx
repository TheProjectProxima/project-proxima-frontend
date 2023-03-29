import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './AppNavigator';
import { AccountNavigator } from './AccountNavigator';


export const Navigation = () => {

  return (
    <NavigationContainer>
     <AppNavigator /> 
    </NavigationContainer>
  );
}