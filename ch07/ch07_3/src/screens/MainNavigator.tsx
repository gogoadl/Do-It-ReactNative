import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './Login';
import SignUp from './SignUp';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{tabBarLabel: 'Home'}}
      />
    </Tab.Navigator>
  );
}
