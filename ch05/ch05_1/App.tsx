import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainNavator from './src/screens/MainNavigator';

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <MainNavator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});
