import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native'

export default class BackButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=>{
                this.props.props.navigation.goBack()
            }}> 
                <Image source={require('../../assets/images/backButton.png')} style={styles.backButton} resizeMode="center" />

             </TouchableOpacity>
        )
    }
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    backButton:{
        width:screenWidth*0.08,
        height:screenWidth*0.08,
        marginLeft:screenWidth*0.04
    },
})
