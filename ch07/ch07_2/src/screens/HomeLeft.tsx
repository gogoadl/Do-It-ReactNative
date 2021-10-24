import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import {SafeAreaView, View, UnderlineText, TopBar} from '../theme/navigation';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import * as D from '../data';
import Person from './Person';
import {useNavigation} from '@react-navigation/native';

const title = 'HomeLeft';
export default function HomeLeft() {
  const navigation = useNavigation();
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    [],
  );
  const goRight = useCallback(
    () => navigation.navigate('HomeRight', {id: D.randomId()}),
    [],
  );
  const [scrollEnabled] = useScrollEnabled();
  const [people, setPeople] = useState<D.IPerson[]>([]);

  const addPerson = useCallback(() => {
    setPeople(people => [D.createRandomPerson(), ...people]);
  }, []);
  const removeAllPerson = useCallback(() => {
    setPeople(notUsed => []);
  }, []);

  const deletePerson = useCallback(
    (id: string) => () =>
      setPeople(people => people.filter(person => person.id != id)),
    [],
  );
  useEffect(() => D.makeArray(5).forEach(addPerson), []);
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <TopBar>
          <UnderlineText onPress={goBack} style={styles.text}>
            go back
          </UnderlineText>
          <UnderlineText
            onPress={goRight}
            style={[styles.text, {marginRight: 10}]}>
            go Right
          </UnderlineText>
        </TopBar>
        <View style={[styles.content]}>
          <Text style={[styles.text]}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
