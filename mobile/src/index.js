import React from 'react';
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import Routes from './routes';

export function App () {
  return (
    <Routes />
  );
};

export default App;
