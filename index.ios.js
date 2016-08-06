/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk';

console.log(thunkMiddleware);

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunkMiddleware)
);

const GymTracker = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('GymTracker', () => GymTracker);
