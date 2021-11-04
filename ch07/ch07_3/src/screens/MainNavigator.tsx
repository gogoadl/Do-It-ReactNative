import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native-paper';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './Login';
import SignUp from './SignUp';
import HomeNavigator from './HomeNavigator';

import type {RouteProp, ParamListBase} from '@react-navigation/native';
type TabBarIconProps = {focused: boolean; color: string; size: number};

const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const {name} = route;
      switch (name) {
        case 'Login':
          return <AntIcon name="login" size={size} color={color} />;
        case 'SignUp':
          return <FontawesomeIcon name="sign-in" size={size} color={color} />;
      }
      return <Icon name="home" size={size} color={color} />;
    },
  };
};

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
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
