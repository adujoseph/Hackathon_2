import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import Routes from './src/Routes/Routes';
import {Provider} from 'react-redux';
import {configureStore} from './src/Store/Store';

const store = configureStore();
const App = () => {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
