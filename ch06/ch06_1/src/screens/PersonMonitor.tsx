import React, {useCallback, useState, useRef, useEffect, useMemo} from 'react';
import type {FC} from 'react';
import {View, Text, Image, Alert, Animated, Easing} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {Avatar} from '../components';
import {styles} from './Person.style';
import {Text as ThemeText, View as ThemeView} from '../theme/paper';

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};
// prettier-ignore
const PersonMonitor: FC<PersonProps> = ({person, deletePressed}) => {
  // const animValue = new Animated.Value(0)
  // 리액트 네이티브 팀은 이 코드보다 useRef 훅을 사용하여 Animated.Value 클래스의 인스턴스를 캐시하는 방법을 권장합니다.
  const animValue = useRef(new Animated.Value(0)).current
  // 리액트 네이티브 애니메이션에서 Animated.VAlue 클래스의 인스턴스는 항상 컴포넌트의 스타일 속성에 적용되어야 합니다.
  const [realAnimVAlue, setRealAnimValue] = useState<number>(0)
  const [animationEnd, setAnimationEnd] = useState<boolean>(false)
  useEffect(() => {
    const id = animValue.addListener((state: {value: number}) => {
      setRealAnimValue(state.value)
    })
    return () => animValue.removeListener(id)
  }, [])
  
  const avatarPressed = useCallback(() => 
    Animated.timing(animValue, {
      useNativeDriver: true, 
      toValue: 1,
      duration: 3000,
      easing: Easing.cubic}).start(() => 
        setAnimationEnd((notUsed) => true)),
  [])

  const rightViewAnimStyle = {opacity: animValue}

  return (
    <ThemeView>
      <ThemeText style={[{fontSize: 20}]}>
        realAnimVAlue: {realAnimVAlue}
      </ThemeText>
      <ThemeText style={[{fontSize: 20}]}>
        animationEnd: {animationEnd ? 'true' : 'false'}
      </ThemeText>
      <View style={[styles.view]}>
        <View style={[styles.leftView]}>
          <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed} />
          <Text style={[styles.text]}>Press Me</Text>
        </View>
        <Animated.View style={[styles.rightView, rightViewAnimStyle]}>
          <Text style={[styles.name]}>{person.name}</Text>
          <Text style={[styles.email]} onPress={avatarPressed}>{person.email}</Text>
          <View style={[styles.dateView]}>
            <Text style={[styles.text]}>
              {moment(person.createdDate).startOf('day').fromNow()}
            </Text>
            <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500} onPress={deletePressed} />
          </View>
          <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>
          <Image style={[styles.image]} source={{uri: person.image}} />
          <View style={[styles.countsView]}>
          <Icon
            name="comment"
            size={24}
            color={Colors.blue500}
          />
          <Icon
            name="twitter-retweet"
            size={24}
            color={Colors.purple500}
          />
          <Icon
            name="heart"
            size={24}
            color={Colors.red500}
          />
          </View>
        </Animated.View>
      </View>
    </ThemeView>
  )
}
export default PersonMonitor;
