import React from 'react';
import './config/ReactotronConfig';
import FlashMessage from 'react-native-flash-message';
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
        <FlashMessage position="top" />
      </Provider>
    </>
  );
};

export default App;
