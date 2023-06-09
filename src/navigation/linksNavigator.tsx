import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { ActiveLinkScreen } from '../screens/app/link/activeLink.screen';
import { LinksScreen } from '../screens/app/link/links.screen';


const LinksStack = createNativeStackNavigator();

export const LinksNavigator = () => {
  return (
    <LinksStack.Navigator>
            <LinksStack.Screen
        name="Active Link"
        component={ActiveLinkScreen}
      />
      <LinksStack.Screen
        name="Links"
        component={LinksScreen}
      />
    </LinksStack.Navigator>
  );
};