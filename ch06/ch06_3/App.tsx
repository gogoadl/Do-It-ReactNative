// 05-2 절 모습
import React, {useState, useCallback} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
// import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {useColorScheme} from 'react-native';
import {Appearance} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme, DarkTheme} from 'react-native-paper';
import MainNavigator from './src/screens/MainNavigator';
import {ToggleThemeProvider} from './src/contexts';

export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(
    scheme == 'dark' ? DarkTheme : DefaultTheme,
  );
  const toggleTheme = useCallback(
    () => setTheme(theme => (theme.dark ? DefaultTheme : DarkTheme)),
    [],
  );
  return (
    <PaperProvider theme={theme}>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaView style={styles.safeAreaView}>
          <MainNavigator />
        </SafeAreaView>
      </ToggleThemeProvider>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});
