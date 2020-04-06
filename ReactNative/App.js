import React from 'react';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import {
  StatusBar,
} from 'react-native';

import Routes from './src/routes/Routes';

import { Provider } from 'react-redux';
import store from './src/services/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle='light-content' />
      <Routes />
    </Provider>
  );
};