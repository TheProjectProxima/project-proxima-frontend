import React, { useState } from 'react';
import { View, Text,} from 'react-native';
import { ActiveLinkNavigator } from '../../../navigation/activeLinkNavigator';



export const ActiveLinkScreen = ({ navigation}: {navigation:any}) => {
    const [isActive, setIsActive] = useState(false)


    if (isActive) {
        // need to add image display 
        return(
            <View>
                <Text>{"Test Link"}</Text>
                <Text>{`173 Pics`}</Text>
                <Text>{'24 hours left'}</Text>
            </View>
        )
    }
    else {
        return(
            <View style={{flex: 1}}>
                <Text>{"Test "}</Text>
                <ActiveLinkNavigator/>
            </View>

        )
    }
   
};

