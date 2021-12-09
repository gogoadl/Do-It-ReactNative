// 최소한으로 구현한 리덕스용 App.tsx 코드 (초기 버전)
import React from 'react'
import {createStore} from 'redux'
import {Provider as ReduxProvider} from 'react-redux'
import type {Action} from 'redux'

// prettier-ignore
export type User = {
  name: string, email: string, password: string
}
export type AppState = {
  loggedIn: boolean
  loggedUser: User
}
const initialState: AppState = {
  loggedIn: false,
  loggedUser: {name: '', email: '', password: ''}
}

const rootReducer = (state: AppState = initialState, action: Action) => state
const store = createStore(rootReducer)

export default function App() {
  return <ReduxProvider store={store}></ReduxProvider>
}
// src/store 사용 버전
/*
import React from 'react'
import {Provider as ReduxProvider} from 'react-redux'
import {makeStore} from './src/store'

const store = makeStore()

export default function App() {
  return <ReduxProvider store={store}></ReduxProvider>
}
*/
// ch07_4 App.tsx와 결합 버전(최종 버전)
/*
import 'react-native-gesture-handler'
import React, {useState, useCallback} from 'react'
import {enableScreens} from 'react-native-screens'
import {SafeAreaProvider} from 'react-native-safe-area-context'
// prettier-ignore
import {NavigationContainer, DefaultTheme, DarkTheme}
from '@react-navigation/native'
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'
import {Provider as ReduxProvider} from 'react-redux'
import {ToggleThemeProvider} from './src/contexts'
import MainNavigator from './src/screens/MainNavigator'
import {makeStore} from './src/store'

enableScreens()

const store = makeStore()

export default function App() {
  const scheme = useColorScheme() // 'dark' 혹은 'light'
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme
  )
  // prettier-ignore
  const toggleTheme = useCallback(
  () => setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme)),
  [])
  return (
    <AppearanceProvider>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaProvider>
          <ReduxProvider store={store}>
            <NavigationContainer theme={theme}>
              <MainNavigator />
            </NavigationContainer>
          </ReduxProvider>
        </SafeAreaProvider>
      </ToggleThemeProvider>
    </AppearanceProvider>
  )
}
*/
