import React, {useState, useCallback} from 'react';
import 'react-native-gesture-handler';
import MainNavigator from './src/screens/MainNavigator';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
// 모든 리액트 네비게이션 화면 컴포넌트는 항상 다음 NavigationContainer의 자식 컴포넌트로 동작해야 합니다.
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useColorScheme} from 'react-native';
import {ToggleThemeProvider} from './src/contexts';

// 아이폰에서 텍스트 정상적으로 표시하기위함
enableScreens(); // 네이티브 모듈 사용하여 렌더링 속도 향상
export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(
    scheme == 'dark' ? DarkTheme : DefaultTheme,
  );

  const toggleTheme = useCallback(() => {
    setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme));
  }, []);

  return (
    <ToggleThemeProvider toggleTheme={toggleTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ToggleThemeProvider>
  );
}
