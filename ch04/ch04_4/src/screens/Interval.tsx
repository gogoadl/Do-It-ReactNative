import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Colors} from 'react-native-paper';
import {Avatar} from '../components';
import * as D from '../data';

type IdAndAvatar = Pick<D.IPerson, 'id' | 'avatar'>;

export default function App() {
  const [avatars, setAvatars] = useState<IdAndAvatar[]>([]);
  const [start, setStart] = useState(true);
  const toggleStart = useCallback(() => setStart((start) => !start), []);
  const clearAvatars = useCallback(() => setAvatars((notUsed) => []), []);
  useEffect(() => {
    const id = setInterval(() => {
      if (start) {
        setAvatars((avatars) => [
          ...avatars,
          {id: D.randomId(), avatar: D.randomAvatarUrl()},
        ]);
      }
    }, 1000);
    return () => clearInterval(id); // 컴포넌트가 제거될 때 interval을 제거
  }, [start]);

  const children = avatars.map(({id, avatar}) => (
    <Avatar
      key={id}
      uri={avatar}
      size={70}
      viewStyle={styles.avatarViewSTyle}
    />
  ));
  return (
    <View style={styles.view}>
      <View style={styles.topBar}>
        <Text onPress={toggleStart} style={styles.topBarText}>
          {start ? 'stop' : 'start'}
        </Text>
        <Text onPress={clearAvatars} style={styles.topBarText}>
          clear Avatars
        </Text>
      </View>
      <Text style={styles.title}>Interval</Text>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.lime300},
  title: {fontSize: 30, fontWeight: '600'},
  topBar: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: Colors.blue900,
  },
  topBarText: {fontSize: 20, color: 'white'},
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  avatarViewSTyle: {padding: 5},
});
