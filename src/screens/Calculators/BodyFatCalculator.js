import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'

import BackButton from '../../components/BackButton';

export default class BodyFarCalculator extends Component {
    render() {
        return (
            <SafeAreaView>

                <BackButton goBack={()=>{this.props.navigation.goBack()}}/>

                <TouchableOpacity onPress={()=>{
                    this.props.navigation.goBack()
                }}> 
                    <Text>BodyFarCalculator</Text>
                 </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})
