import React, {useCallback, useState, useRef, useEffect, useMemo} from 'react';
import type {FC} from 'react';
import {GestureResponderEvent, PanResponderGestureState} from 'react-native';
import * as D from '../data';
import {View, Text} from '../theme/paper';
import {useScrollEnabled} from '../contexts';
import {Platform, PanResponder} from 'react-native';

const ios = Platform.OS == 'ios';

type Event = GestureResponderEvent;
type State = PanResponderGestureState;

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};
// prettier-ignore
const PersonPanRes: FC<PersonProps> = ({person, deletePressed}) => {
  const [gestureState, setGestureState] = useState<State | null>(null)
  const [scrollEnabled, setScrollEnabled] = useScrollEnabled()
  
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder() { return true },
    onPanResponderGrant(e:Event, s:State) {
      ios && setScrollEnabled(false)
      setGestureState(s)
    },
    onPanResponderRelease(e:Event, s:State) {
      setGestureState(s)
      ios && setScrollEnabled(true)
    },
    onMoveShouldSetPanResponder() {return true},
    onPanResponderMove(e:Event, s:State) {
      setGestureState(s)
    }
  })
  // const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), [])


  return (
    <View background style={[{width: '100%'}]}>
      <Text>
        scrollEnabled: {scrollEnabled ? "true" : "false"}
      </Text>
      <View accent {...panResponder.panHandlers} style={{height: 300, flex: 1}}>
        {gestureState && <Text>{JSON.stringify(gestureState, null, 2)}</Text>}
      </View>
    </View>
  )
}
export default PersonPanRes;
