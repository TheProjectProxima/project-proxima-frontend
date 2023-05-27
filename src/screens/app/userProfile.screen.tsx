import { observer } from 'mobx-react';
import React from 'react';
import { View, Text,Image} from 'react-native';
import { useStore } from '../../store/index.store';
import { Button } from 'react-native-paper';



export const UserProfileScreen = observer(({ navigation }: {navigation:any}) => {
  const rooteStore = useStore()
  const userStore = rooteStore.userStore
  const user = userStore.user
  const authStore = rooteStore.authStore
  const linkStore = rooteStore.linkStore
  const friendStore = rooteStore.friendStore

  const handleSignOut = () => {
    authStore.logout()
  };


  return (
    <View>
      <View>
      <Text>User Profile</Text>
      </View>
      <View>
        {/* <Image>{userStore.user.profileImage}</Image> */}
        <Text>{userStore.user.userName}</Text>
        <Button mode='contained' onPress={() => navigation.navigate('Settings')}>
          Settings
        </Button>
      </View>
      <View>
        <Text>User Groups: {linkStore.linkCount()}</Text>
        <Text>User Friends: {friendStore.friendCount()}</Text>
      </View>

        <Button mode="contained" onPress={handleSignOut}>
        Sign Out
      </Button>
    </View>
  );
});

