import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MainScreen from "./src/screens/MainScreen"
export default class App extends Component {
  render() {
    return (
      <View>
        <MainScreen/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
