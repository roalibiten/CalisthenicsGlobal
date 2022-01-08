import React, { Component } from 'react'
import { Text, StyleSheet, View,SafeAreaView, Dimensions} from 'react-native'

export default class MainScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}> Exercises </Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        width:screenWidth,
        height:screenHeight,
        paddingHorizontal:screenWidth*0.07,
        paddingVertical:screenHeight*0.02
    },
    card:{
        width:screenWidth*0.4,
        height:screenHeight*0.4,
        backgroundColor:"black",
        borderRadius:screenWidth*0.05
    },
    cardTitle:{
        fontFamily:"Landasans-Medium",
        color:"white",
        fontSize:screenWidth*0.08,
        position:"absolute",
        right:screenWidth*0.05,
        bottom:screenHeight*0.02,
    }
})
