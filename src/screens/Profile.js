import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'

import BackButton from '../components/BackButton';

export default class Profile extends Component {
    render() {
        return (
            <SafeAreaView>

                <BackButton props={this.props}/>

                <TouchableOpacity onPress={()=>{
                    this.props.navigation.goBack()
                }}> 
                    <Text>Profile</Text>
                 </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})
