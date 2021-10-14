import React, {useCallback, useState, useRef, useEffect, useMemo} from 'react';
import type {FC} from 'react';
import {View, Text, Image, Alert, Animated, Easing} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {useAnimatedValue, useStyle, useToggle} from '../hooks';
import {Avatar} from '../components';
import {styles} from './Person.style';

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};
// prettier-ignore
const PersonArithmetic: FC<PersonProps> = ({person, deletePressed}) => {
  const animValue = useAnimatedValue(10)
  const [fontSize, setFontSize] = useState<number>(0)
  const _fontSize = new Animated.Value(fontSize)

  const nameAnimStyle = useStyle({
    fontSize: Animated.add(_fontSize, animValue) 
  }, [fontSize])

  const increaseFontSize = useCallback(
    (fontSize: number) => () => {
      setFontSize((notUsed) => fontSize)
    }, []
  )

  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), [])
    
  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50}
          onPress={avatarPressed}/>
          <Text style={[styles.text]}>Press Me</Text>
      </View>
      <View style={[styles.rightView]}>
        <Animated.Text style={[styles.name, nameAnimStyle]}>{person.name}</Animated.Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon name="trash-can-outline" size={26} color={Colors.lightBlue500}
            onPress={deletePressed}/>
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
         <Text onPress={increaseFontSize(20)} style={[styles.text, styles.iconText]}>
           set fontSize + 20
         </Text>
         <Text onPress={increaseFontSize(30)} style={[styles.text, styles.iconText]}>
           set fontSize + 30
         </Text>
         <Text onPress={increaseFontSize(40)} style={[styles.text, styles.iconText]}>
           set fontSize + 40
         </Text>
        </View>
      </View>
    </View>
  )
}
export default PersonArithmetic;
