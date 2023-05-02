import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeNavigator } from './homeNavigator';
import { UserProfileNavigator } from './userProfileNavigator';
import { LinksNavigator } from './linksNavigator';
import { FriendsNavigator } from './friendsNavigator';
import { RouteProp } from '@react-navigation/native';


const TAB_ICON = {
  home: 'home',
  userProfile: 'person-outline',
  links: 'link-outline',
  friends: 'people-outline',
};

type TabParamList = {
  home: undefined;
  links: undefined;
  friends: undefined;
  userProfile: undefined;
};

type TabRouteProps = RouteProp<TabParamList, keyof TabParamList>;

const Tab = createBottomTabNavigator();

// const createScreenOptions = ({ navigation, route } : {navigation : any, route : TabRouteProps }) => {
//   const iconName = TAB_ICON[route.name];

//   return {
//     tabBarIcon: ({ size, color } : {size: number, color : string}) => (
//       <Ionicons name={iconName} size={size} color={color} />
//     ),
//   };
// };

/*
Think about adding a search screen later to the navigaotrs for friends and links
*/

export const AppNavigator = () => (
          <Tab.Navigator
            // screenOptions={createScreenOptions}
          >
            <Tab.Screen name="Home Tab" component={HomeNavigator} />
            <Tab.Screen name="Links Tab" component={LinksNavigator} />
            <Tab.Screen name="Friends Tab" component={FriendsNavigator} />
            <Tab.Screen name="User Tab" component={UserProfileNavigator} />
          </Tab.Navigator>

);