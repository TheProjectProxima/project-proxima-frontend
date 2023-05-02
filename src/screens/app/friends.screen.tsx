import React from 'react';
import { View, Text,} from 'react-native';
import SearchBar from '../../components/shared/searchBar';
import { User } from '../../lib/types/model';
import UserCard from '../../components/UserCard/UserCard';
import { UserAccount } from '../../types/types';



export const FriendsScreen = ({ navigation }: {navigation:any}) => {

  const users : UserAccount[] = [
       {
        user_id: "1234",
        user_name: "User1",
        first_name: "Joe",
        last_name: "Doe",
        email: "joe@test.com",
        phone_number: "8573997708",
        password: "12324",
        is_active: false, 
        groups: [],
       },
       {
        user_id: "1111",
        user_name: "User2",
        first_name: "Joe",
        last_name: "Doe",
        email: "joe@test.com",
        phone_number: "8573997708",
        password: "12324",
        is_active: false, 
        groups: [],
       },
       {
        user_id: "1234",
        user_name: "User3",
        first_name: "Joe",
        last_name: "Doe",
        email: "joe@test.com",
        phone_number: "8573997708",
        password: "12324",
        is_active: false, 
        groups: [],
       },

  ]

  return (
    <View>
        <Text>Friends</Text>
        <SearchBar/>
        {
          users.map((user: UserAccount) => (
            <UserCard user={user}  key={user.user_id}/>
          ))
        }

    </View>
  );
};

