import React from 'react';

import 'react-native-gesture-handler';
import {LogBox} from 'react-native';

import AppNavigation from './src/navigations';

if (!__DEV__) {
  console.log = () => null;
}

LogBox.ignoreAllLogs();
const App = () => {
  return <AppNavigation />;
};

export default App;
