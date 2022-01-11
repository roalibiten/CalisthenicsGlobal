import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import BackButton from '../components/BackButton';

export default class Calculators extends Component {
    render() {
        return (
            <SafeAreaView>
                
                <BackButton props={this.props}/>

                 <ScrollView style={styles.itemList}>
                     <View style={{alignItems:"center"}}>

                     <TouchableOpacity onPress={()=>{
                        this.props.navigation.goBack()
                        }}> 
                        <ImageBackground source={require('../../assets/images/image2.jpeg')} style={styles.backgroundImage} resizeMode="cover" >
                            <LinearGradient colors={['white','black', 'black']}  style={styles.item}/>
                            <Text style={styles.cardTitle}>Calori Calculator</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.goBack()
                        }}> 
                        <ImageBackground source={require('../../assets/images/bodyFat.png')} style={styles.backgroundImage} resizeMode="cover" >
                            <LinearGradient colors={['white','black', 'black']}  style={styles.item}/>
                            <Text style={styles.cardTitle}>Body Fat Calculator</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    </View>

                 </ScrollView>
                 
            </SafeAreaView>
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
    item:{
        width:screenWidth*0.9,
        height:screenHeight*0.4,
        backgroundColor:"black",
        borderRadius:screenWidth*0.05,
        opacity:0.2,
        
    },
    backgroundImage:{
        borderRadius:screenWidth*0.05,
        overflow: 'hidden',
        marginTop:screenHeight*0.02,
        width:screenWidth*0.9,
        height:screenHeight*0.4,
        
    },
    itemList:{
        height:screenHeight*0.9,
    },
    cardTitle:{
        fontFamily:"Landasans-Medium",
        color:"white",
        fontSize:screenWidth*0.09,
        position:"absolute",
        bottom:screenHeight*0.02,
        alignSelf:"center"
    },
    button:{
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
    }
})
