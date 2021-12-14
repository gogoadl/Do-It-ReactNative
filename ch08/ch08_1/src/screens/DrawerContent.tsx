import React, {useCallback, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {
  SafeAreaView,
  View,
  Text,
  TopBar,
  NavigationHeader,
  UnderlineText,
  MaterialCommunityIcon as Icon,
  Switch,
} from '../theme';
import type {FC} from 'react';
import type {DrawerContentComponentProps} from '@react-navigation/drawer';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import {Avatar} from '../components';
import * as D from '../data';
import {AppState, User} from '../store';
import {useSelector} from 'react-redux';

const DrawerContent: FC<DrawerContentComponentProps> = props => {
  const {navigation} = props; // useNavigation 훅으로 Drawer Navigation에서는 얻을 수 없다.
  const loggedIn = useSelector<AppState, boolean>(state => state.loggedIn);
  const loggedUser = useSelector<AppState, User>(state => state.loggedUser);
  const email = 'test';
  const name = 'test';
  console.log(loggedIn, loggedUser);
  const close = useCallback(
    () => navigation.dispatch(DrawerActions.closeDrawer()),
    [],
  );

  if (!loggedIn) {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
        <NavigationHeader
          Right={() => <Icon name="close" size={24} onPress={close} />}
        />
        <View style={[styles.content]}>
          <Text style={[styles.text]}>Please login or signup.</Text>
          <View style={[styles.row, {marginTop: 20}]}>
            <Switch />
          </View>
        </View>
      </DrawerContentScrollView>
    );
  }
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
      <NavigationHeader
        Right={() => <Icon name="close" size={24} onPress={close} />}
      />
      <View style={[styles.content]}>
        <View style={[styles.row]}>
          <Avatar uri={D.avatarUriByName(name)} size={40} />
          <Text style={[styles.text, styles.m]}>{name}</Text>
        </View>
        <View style={[styles.row]}>
          <UnderlineText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.text, styles.m]}>
            {email}
          </UnderlineText>
        </View>
        <View style={[styles.row, {marginTop: 20}]}>
          <Switch />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  m: {marginLeft: 5},
  row: {flexDirection: 'row', padding: 5, alignItems: 'center'},
  content: {flex: 1, padding: 5},
});
