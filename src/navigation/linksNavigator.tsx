import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { linksScreen } from '../screens/links.screen';
import {activeLinkScreen} from '../screens/activeLink.screen'

const LinksStack = createNativeStackNavigator();

export const linksNavigator = () => {
  return (
    <LinksStack.Navigator>
      <LinksStack.Screen
        name="Restaurants"
        component={linksScreen}
      />
        <LinksStack.Screen
        name="Active Link"
        component={activeLinkScreen}
      />
    </LinksStack.Navigator>
  );
};