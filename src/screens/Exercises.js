import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'

import BackButton from '../components/BackButton';

export default class Exercises extends Component {
    render() {
        return (
            <SafeAreaView>
                
                <BackButton goBack={()=>{this.props.navigation.goBack()}}/>

                <TouchableOpacity onPress={()=>{
                    this.props.navigation.goBack()
                }}> 
                    <Text>Exercises</Text>
                 </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})
