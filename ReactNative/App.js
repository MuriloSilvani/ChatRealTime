import React from 'react';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import {
  StatusBar,
} from 'react-native';

import Routes from './src/routes/Routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Routes />
    </>
  );
};