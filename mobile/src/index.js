import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
};

export default App;
