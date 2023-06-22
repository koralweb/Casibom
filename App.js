import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import BookingScreen from './src/screens/BookingScreen';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons/faShoppingBag';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {library} from '@fortawesome/fontawesome-svg-core';
import BroadcastsScreen from './src/screens/BroadcastsScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import CartScreen from './src/screens/CartScreen';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';
import ShopScreen from './src/screens/ShopScreen';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';

library.add(
  faArrowLeft,
  faShoppingBag,
  faTimesCircle,
  faBars,
  faHome,
  faHeart,
  faComment,
);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Broadcasts"
          component={BroadcastsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
