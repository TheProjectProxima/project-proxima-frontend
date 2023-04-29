import React, { useState } from 'react';
import { View, Text,} from 'react-native';
import { ActiveLinkNavigator } from '../../../navigation/activeLinkNavigator';



export const ActiveLinkScreen = ({ navigation, linkName, noPics, timeLeft}: {navigation:any, linkName : string, noPics : number, timeLeft:string}) => {
    const [isActive, setIsActive] = useState(true)


    if (isActive) {
        // need to add image dsiplay 
        return(
            <View>
                <Text>{linkName}</Text>
                {}
                <Text>{`${noPics} Pics`}</Text>
                <Text>{timeLeft}</Text>
            </View>
        )
    }
    else {
        return(
            <View>
                <Text>{linkName}</Text>
                <ActiveLinkNavigator/>
            </View>

        )
    }
   
};

