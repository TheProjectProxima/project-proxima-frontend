import React from 'react';
import { View, Text } from 'react-native';
import { StyledCard, StyledCompactCard } from '../../styles/common.styles';
import { GroupLink, UserAccount } from '../../types/types';
import { Card } from 'react-native-paper';

type UserCardProps = {
  user: UserAccount
  last_linked?: Date
}


const UserCard = ({user, last_linked}: UserCardProps) => {
  const {
    user_name, 
  } = user;

  // Will have to add friend functionality to this. 

  return (
    <StyledCard elevation={2}>
      <View>
      <Text>
      {"Image here"}
      </Text>
            <Text>
            {user_name}

            </Text>
      </View>
      {/* <View>
        {last_linked.toDateString()}
      </View> */}
    </StyledCard>
  );
};

export default UserCard