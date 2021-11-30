import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {makeStore} from './src/store';

const store = makeStore();

export default function App() {
  return <ReduxProvider store={store}></ReduxProvider>;
}
