import React from 'react';
import { View } from 'react-native';
import { StyledCard, StyledCompactCard } from '../../styles/common.styles';
import { GroupLink, UserAccount } from '../../types/types';

const UserCard = (user : UserAccount, last_linked: Date) => {
  const {
    user_name, 
    userDefaultProfileImage,
  } = user;

  // Will have to add friend functionality to this. 

  return (
    <StyledCard elevation={2}>
        <View>
            {userDefaultProfileImage.src_link}
        </View>
      <View>
        {user_name}
      </View>
      <View>
        {last_linked.toDateString()}
      </View>
    </StyledCard>
  );
};

export default UserCard