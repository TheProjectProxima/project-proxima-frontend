import { observer } from 'mobx-react';
import React from 'react';
import { View, Text,} from 'react-native';
import { useStore } from '../../store/index.store';
import { Button } from 'react-native-paper';



export const UserProfileScreen = observer(({ navigation }: {navigation:any}) => {
  const rooteStore = useStore()
  const userStore = rooteStore.userStore
  const user = userStore.user
  const authStore = rooteStore.authStore

  const handleSignOut = () => {
    authStore.logout()
  };


  return (
    <View>
        <Text>User Profile</Text>
        {/* <Text>{user.userName}</Text> */}

        <Button mode="contained" onPress={handleSignOut}>
        Sign Out
      </Button>
    </View>
  );
});

