/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

class HelloWorldApp extends Component {

  render() {
  const name = 'Arnold';
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 50 }}>Hello, world!, my name is {name}</Text>

        <Text>What´s your name?</Text>
      </View>
    );
  }
}

export default HelloWorldApp;