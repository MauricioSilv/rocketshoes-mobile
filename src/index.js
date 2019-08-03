import React from 'react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';

import store from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="#141414" />
        <Routes />
      </Provider>
    </>
  );
};

export default App;
