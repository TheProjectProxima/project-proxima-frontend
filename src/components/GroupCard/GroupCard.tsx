import React from 'react';
import { View } from 'react-native';
import { StyledCard, StyledCompactCard } from '../../styles/common.styles';
import { GroupLink } from '../../types/types';

const GroupCard = (group : GroupLink) => {
  const {
    name,
    saved, 
    participants_num,
    active, 
    group_user_ids,
    lastLinked,
    users,
    groupProfileId,
    group_image_ids,
  } = group;


  return (
    <StyledCard elevation={2}>
        <View>
            {groupProfileId}
        </View>
      <View>
        {name}
      </View>
      <View>
        {active ? "active" : lastLinked.toString()}
        {group_image_ids.length}
      </View>
    </StyledCard>
  );
};

export default GroupCard