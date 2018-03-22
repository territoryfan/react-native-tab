/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
const data = {
  "tab1": {
    "item1": ["item1-1"],
    "item2": [
      "item2-1",
      "item2-2",
      "item2-3"
    ],
    "item3": [
      "item3-1",
      "item3-2",
      "item3-3",
      "item3-4"
    ]
  },
  "tab2":{
    "list1": ["list1-1"],
    "list2": ["list2-1"],
    "list3": ["list3-1", "list3-2",]
  }
};
import Mtab from "./tab.js";
export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{marginTop:25}}>
        <Mtab data={data} tabSelected={0} nSelected={1} click={this.onPress}/>
      </View>
    );
  }
  
  onPress(val) {
    alert(val);
  }
}

