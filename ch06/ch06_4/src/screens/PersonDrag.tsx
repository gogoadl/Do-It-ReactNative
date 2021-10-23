import React, {useCallback, useState, useRef, useEffect, useMemo} from 'react';
import type {FC} from 'react';
import {View, Text, Image, Alert, Animated, Easing} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {useToggle} from '../hooks';
import {Avatar} from '../components';
import {styles} from './Person.style';
import DragAvatar from './DragAvatar';

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};
// prettier-ignore
const PersonDrag: FC<PersonProps> = ({person, deletePressed}) => {
  const colors = useMemo(() => [
    Colors.pink500,
    Colors.yellow500,
    Colors.lime500,
    Colors.lightBlue500
  ], [])

  const circles = useMemo(() => 
  colors.map((color,index) => {
    return (
      <DragAvatar key={index} size={70} backgroundColor={color} />
    )
  }), [])
  return (
    <View style={{flex: 1, height: 600}}>
      {circles}
    </View>
  )
}
export default PersonDrag;
