import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Calculator from './components/Calculator';
import { StyleSheet, Text, View } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import calculatorReducer from './reducer/calculatorReducer';

export default function App() {

  const store = createStore(calculatorReducer);

  return (
      <Provider store={store}>
        <Calculator></Calculator>
        <StatusBar/>
      </Provider>
  );
}
