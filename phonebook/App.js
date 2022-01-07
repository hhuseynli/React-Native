import React from 'react';
import store, { persistor } from './redux/store';
import { fetchUsers } from './api';
import { Provider } from 'react-redux';
import MainNavigator from './MainNavigator';
import { PersistGate } from 'redux-persist/integration/react'

export default class App extends React.Component {

  render() {
    return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator/>
      </PersistGate>
    </Provider>)
  }
}

