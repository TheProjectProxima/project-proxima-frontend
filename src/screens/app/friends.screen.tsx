import React, { useEffect } from 'react';
import { View, Text,} from 'react-native';
import SearchBar from '../../components/shared/searchBar';
import { User } from '../../lib/types/model';
import UserCard from '../../components/UserCard/UserCard';
import { UserAccount } from '../../types/types';
import { observer } from 'mobx-react';
import { useStore } from '../../store/index.store';



export const FriendsScreen = observer(({ navigation }: {navigation:any}) => {
  const rooteStore = useStore()
  const userStore = rooteStore.userStore
  const user = userStore.user
  const authStore = rooteStore.authStore
  const linkStore = rooteStore.linkStore
  const friendStore = rooteStore.friendStore

  useEffect(() => {
    friendStore.fetchUserFriends()
  })
  
  
  return (
    <View>
        <SearchBar/>
        {
        Array.from(friendStore.friendsMap).map(([friendId, friend]) => (
      <UserCard
        user={friend.friend}
        key={friendId}
      />
    ))}
    </View>
  );
})

