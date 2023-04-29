import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// import { homeNavigator } from './homeNavigator';
// import { userProfileNavigator } from './userProfileNavigator';
// import { linksNavigator } from './linksNavigator';
// import { friendsNavigator } from './friendsNavigator';

// Context provider for later to add data useContext React native Hook

// import { FavouritesContextProvider } from '../../services/favourites/FavouritesContext';
// import { LocationContextProvider } from '../../services/location/LocationContext';
// import { RestaurantsContextProvider } from '../../services/restaurants/RestaurantsContext';
// import { CartContextProvider } from '../../services/cart/CartContext';

const TAB_ICON = {
  home: 'home',
  userProfile: 'userProfile',
  links: 'links',
  friends: 'friends',
};

const Tab = createBottomTabNavigator();

// const createScreenOptions = ({ route }) => {
//   const iconName = TAB_ICON[route.name];

//   return {
//     tabBarIcon: ({ size, color }) => (
//       <Ionicons name={iconName} size={size} color={color} />
//     ),
//   };
// };

/*
Think about adding a search screen later to the navigaotrs for friends and links
*/

export const AppNavigator = () => (
//   <FavouritesContextProvider>
//     <LocationContextProvider>
//       <RestaurantsContextProvider>
//         <CartContextProvider>
          <Tab.Navigator
            // screenOptions={createScreenOptions}
          >
            {/* <Tab.Screen name="Home" component={homeNavigator} />
            <Tab.Screen name="Links" component={linksNavigator} />
            <Tab.Screen name="Friends" component={friendsNavigator} />
            <Tab.Screen name="User" component={userProfileNavigator} /> */}
          </Tab.Navigator>
//         </CartContextProvider>
//       </RestaurantsContextProvider>
//     </LocationContextProvider>
//   </FavouritesContextProvider>
);