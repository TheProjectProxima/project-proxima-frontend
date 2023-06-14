import React from 'react';
import { View, Text,} from 'react-native';
import { useStore } from '../../store/index.store';



export const SettingsScreen = ({ navigation }: {navigation:any}) => {

  const rooteStore = useStore()
  const userStore = rooteStore.userStore
  const user = userStore.user
  const authStore = rooteStore.authStore
  const linkStore = rooteStore.linkStore
  const friendStore = rooteStore.friendStore

  const handleSignOut = () => {
    authStore.logout()
  };

  const handleDeleteAccount = () => {
    userStore.deleteUser(user.userId)
  }

  return (
    <View>
        <Text>Settings Screen</Text>

    </View>
  );
};

