import React from 'react';
import { UploadedByScreen } from '../screens/app/link/uploadedBy.screen';
import { PicturesOfScreen } from '../screens/app/link/picturesOf.screen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const ActiveLinkTab = createMaterialTopTabNavigator();


export const ActiveLinkNavigator = () => (
          <ActiveLinkTab.Navigator >
            <ActiveLinkTab.Screen name="Pictures Of" component={PicturesOfScreen} />
            <ActiveLinkTab.Screen name="Uploaded By" component={UploadedByScreen} />
          </ActiveLinkTab.Navigator>
);