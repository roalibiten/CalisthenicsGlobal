import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'

import BackButton from '../../components/BackButton';

export default class CaloriCalculator extends Component {
    render() {
        return (
            <SafeAreaView>

                <BackButton props={this.props}/>

                <TouchableOpacity onPress={()=>{
                    this.props.navigation.goBack()
                }}> 
                    <Text>CaloriCalculator</Text>
                 </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})
