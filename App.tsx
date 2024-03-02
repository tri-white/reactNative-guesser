/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { View, Text, Button } from 'react-native';

import Game from './Game';


function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Game />
    </SafeAreaView>
  );
}

export default App;
