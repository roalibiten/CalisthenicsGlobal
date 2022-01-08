import React, { Component } from 'react'
import { Text, StyleSheet, View,SafeAreaView, Dimensions,ImageBackground} from 'react-native'

export default class MainScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>

                    <View style={styles.row1}>
                    <View style={styles.column1}>
                        <View style={styles.card1}>
                            <Text style={styles.cardTitle}> Exercises </Text>
                        </View>
                        <View style={styles.card2}>
                            <Text style={styles.cardTitle}> Calori Calc. </Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.card3}>
                            <Text style={styles.cardTitle}> Profile </Text>
                        </View>
                        <View style={styles.card4}>
                            <Text style={styles.cardTitle}> Workouts </Text>
                        </View>
                    </View>
                    </View>
                    <View style={styles.row2}>
                        <View style={styles.card5}>
                            <Text style={styles.cardTitle}> Parks </Text>
                        </View>
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
        paddingVertical:screenHeight*0.02,
    },
    row1:{
        flexDirection:"row",
        width:screenWidth,
        justifyContent:"space-between",
        paddingHorizontal:screenWidth*0.07,

    },
    row2:{
        width:screenWidth,
        justifyContent:"space-between",
        paddingHorizontal:screenWidth*0.07,

    },
    column1:{
        width:screenWidth*0.4,
    },
    card1:{
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
        right:screenWidth*0.02,
        bottom:screenHeight*0.02,
    },
    card2:{
        width:screenWidth*0.4,
        height:screenHeight*0.3,
        backgroundColor:"black",
        borderRadius:screenWidth*0.05,
        marginTop:screenHeight*0.02
    },
    card3:{
        width:screenWidth*0.4,
        height:screenHeight*0.3,
        backgroundColor:"black",
        borderRadius:screenWidth*0.05,
    },
    card4:{
        width:screenWidth*0.4,
        height:screenHeight*0.4,
        backgroundColor:"black",
        borderRadius:screenWidth*0.05,
        marginTop:screenHeight*0.02
    },
    card5:{
        width:screenWidth*0.86,
        height:screenHeight*0.15,
        backgroundColor:"black",
        borderRadius:screenWidth*0.05,
        marginTop:screenHeight*0.02
    },
})
