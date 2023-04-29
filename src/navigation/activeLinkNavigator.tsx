import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UploadedByScreen } from '../screens/app/link/uploadedBy.screen';
import { PicturesOfScreen } from '../screens/app/link/picturesOf.screen';


const ActiveLinkTab = createBottomTabNavigator();


export const ActiveLinkNavigator = () => (
          <ActiveLinkTab.Navigator
          >
            <ActiveLinkTab.Screen name="Pictures Of" component={PicturesOfScreen} />
            <ActiveLinkTab.Screen name="Uploaded By" component={UploadedByScreen} />
          </ActiveLinkTab.Navigator>
);