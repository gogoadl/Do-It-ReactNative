import React, {useState, useCallback} from 'react';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme, DarkTheme} from 'react-native-paper';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainNavator from './src/screens/MainNavigator';
import {ToggleThemeProvider} from './src/contexts';

export default function App() {
  const scheme = useColorScheme(); // 현재 모바일 기기의 운영체제가 다크모드인지, 라이트모드인지 얻어낸다
  const [theme, setTheme] = useState(
    scheme == 'dark' ? DarkTheme : DefaultTheme,
  );
  const toggleTheme = useCallback(
    () => setTheme(theme => (theme.dark ? DefaultTheme : DarkTheme)),
    [],
  );
  return (
    <AppearanceProvider>
      <PaperProvider theme={DarkTheme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <SafeAreaView style={[styles.safeAreaView]}>
            <MainNavator />
          </SafeAreaView>
        </ToggleThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});
