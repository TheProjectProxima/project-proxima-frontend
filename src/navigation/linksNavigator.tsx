import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { LinksScreen } from '../screens/app/links.screen';
import {ActiveLinkScreen} from '../screens/app/activeLink.screen'

const LinksStack = createNativeStackNavigator();

export const LinksNavigator = () => {
  return (
    <LinksStack.Navigator>
      <LinksStack.Screen
        name="Links"
        component={LinksScreen}
      />
        <LinksStack.Screen
        name="Active Link"
        component={ActiveLinkScreen}
      />
    </LinksStack.Navigator>
  );
};