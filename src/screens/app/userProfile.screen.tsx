import { observer } from 'mobx-react';
import React from 'react';
import { View, Text} from 'react-native';
import { Image } from 'expo-image';
import { useStore } from '../../store/index.store';
import { Button, IconButton } from 'react-native-paper';
import { User } from 'react-native-feather';
import { theme } from '../../theme/index'





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
        {user.profileImage ? 
        <Image
          source={user.profileImage}
        /> :
        <User
        width={100}
        height={100}
        fill={theme.colors.common.black}
        stroke={theme.colors.common.black}
        />
        }

        {/* <Image>{userStore.user.profileImage}</Image> */}
        <Text>{user.userName}</Text>
        <IconButton
  icon="pencil"
  size={30}
  onPress={() => navigation.navigate('Settings')}
/>
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

