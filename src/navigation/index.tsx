import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AccountNavigator } from './accountNavigator';
import { AppNavigator } from './appNavigator';
import { useStore } from '../store/index.store';
import { observer } from 'mobx-react';

// Make sure to add SignIn and Signup Navigator later along with firebase. 

export const PicLinkNavigation = observer(() => {
  const store = useStore();

  return (
    <NavigationContainer>
      {store.authStore.isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
})