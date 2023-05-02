import React from 'react'
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { FriendsScreen } from '../screens/app/friends.screen'


const FriendsStack = createNativeStackNavigator()

export const FriendsNavigator = () => {
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen
        name="Friends"
        component={FriendsScreen}
      />
    </FriendsStack.Navigator>
  )
}