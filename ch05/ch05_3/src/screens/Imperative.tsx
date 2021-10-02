import React, {useState, useRef, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Switch, useTheme} from 'react-native-paper';
import {useToggleTheme, AutoFocusProvider, useAutoFocus} from '../contexts';
import {Text, View} from '../theme/paper';
import * as D from '../data';
import ImperativeTextInput from './ImperativeTextInput';
import type {TextInputMethods} from './ImperativeTextInput';

export default function Imperative() {
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson());
  const {dark} = useTheme();
  const toggleTheme = useToggleTheme();
  const autoFocus = useAutoFocus();

  const methodsRef = useRef<TextInputMethods | null>(null);

  const setFocus = useCallback(() => {
    methodsRef.current?.focus();
  }, []);
  const dissmissKeyboard = useCallback(() => {
    methodsRef.current?.dismiss();
  }, []);

  return (
    <View style={[styles.view]}>
      <View accent style={[styles.topBar]}>
        <Text onPress={setFocus} style={[styles.textButton]}>
          focus
        </Text>
        <Text onPress={dissmissKeyboard} style={[styles.textButton]}>
          dismiss keyboard
        </Text>
        <View style={{flex: 1}} />
        <Switch value={dark} onValueChange={toggleTheme} />
      </View>
      <AutoFocusProvider contentContainerStyle={[styles.text]}>
        <View style={{flex: 1}} />
        <View style={[styles.textView]}>
          <Text style={[styles.text]}>email</Text>
          <ImperativeTextInput
            style={[styles.textInput]}
            onFocus={autoFocus}
            value={person.email}
            placeholder="enter your email"
            onChangeText={email => setPerson(person => ({...person, email}))}
          />
        </View>
        <View style={[styles.textView]}>
          <Text style={[styles.text]}>email</Text>
          <ImperativeTextInput
            style={[styles.textInput]}
            onFocus={autoFocus}
            value={person.name}
            placeholder="enter your name"
            onChangeText={name => setPerson(person => ({...person, name}))}
          />
        </View>
      </AutoFocusProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  textButton: {marginLeft: 10, fontSize: 20},
  keyboardAvoidingView: {flex: 1, padding: 10},
  textView: {padding: 5},
  text: {fontSize: 24},
  textInput: {fontSize: 24, borderWidth: 1, borderRadius: 5},
  flex: {flex: 1},
});
