import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MainScreen from "../screens/MainScreen.js"
import Exercises from "../screens/Exercises.js"
import Profile from "../screens/Profile.js"
import Workouts from "../screens/Workouts.js"
import CaloriCalculator from "../screens/CaloriCalculator"
import Parks from "../screens/Parks"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class Route extends Component {
    
  render() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home"  component={MainScreen} />
                <Stack.Screen name="Exercises"  component={Exercises} />
                <Stack.Screen name="Profile"  component={Profile} />
                <Stack.Screen name="Workouts"  component={Workouts} />
                <Stack.Screen name="CaloriCalculator"  component={CaloriCalculator} />
                <Stack.Screen name="Parks"  component={Parks} />
            </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})
