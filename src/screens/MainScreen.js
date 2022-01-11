import React, { Component } from 'react'
import { Text, StyleSheet, View,SafeAreaView, Dimensions,ImageBackground, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default class MainScreen extends Component {
    
    render() {

        return (
            <SafeAreaView>
                <View style={styles.container}>

                    <View style={styles.row1}>
                    <View style={styles.column1}>
                    
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('Exercises')
                    }} style={styles.button}>
                    <ImageBackground source={require('../../assets/images/image1.jpeg')} style={styles.backgroundImage} resizeMode="cover" >
                        <LinearGradient colors={['white','black', 'black']}   style={styles.card1}>
                        </LinearGradient>
                        <Text style={styles.cardTitle}> Exercises </Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('Calculators')
                    }}  style={styles.button}>
                    <ImageBackground source={require('../../assets/images/image5.jpeg')} style={styles.backgroundImage}>
                        <LinearGradient colors={['white','black', 'black']}  style={styles.card2}>
                        </LinearGradient>
                        <Text style={styles.cardTitle}> Calculators </Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                    <TouchableOpacity  onPress={()=>{
                        this.props.navigation.navigate('Profile')
                    }} style={styles.button}>
                    <ImageBackground source={require('../../assets/images/img1.jpg')} style={styles.backgroundImage}>
                        <LinearGradient colors={['white','black', 'black']}  style={styles.card3}>
                        </LinearGradient>
                            <Text style={styles.cardTitle}> Profile </Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{
                        this.props.navigation.navigate('Workouts')
                    }} style={styles.button}>
                    <ImageBackground source={require('../../assets/images/image3.jpeg')} style={styles.backgroundImage}>
                        <LinearGradient colors={['white','black', 'black']}  style={styles.card4}>
                        </LinearGradient>
                            <Text style={styles.cardTitle}> Workouts </Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <View style={styles.row2}>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('Parks')
                    }}  style={styles.button}>
                    <ImageBackground source={require('../../assets/images/image4.jpeg')} style={styles.backgroundImage}>
                        <LinearGradient colors={['white','black', 'black']}  style={styles.card5}>
                        </LinearGradient>
                            <Text style={styles.cardTitle}> Parks </Text>
                    </ImageBackground>
                    </TouchableOpacity>
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
        borderRadius:screenWidth*0.05,
        opacity:0.2,

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
        opacity:0.2,
    },
    card3:{
        width:screenWidth*0.4,
        height:screenHeight*0.3,
        backgroundColor:"black",
        borderRadius:screenWidth*0.05,
        opacity:0.2,
    },
    card4:{
        width:screenWidth*0.4,
        height:screenHeight*0.4,
        backgroundColor:"black",
        borderRadius:screenWidth*0.05,
        opacity:0.2,
    },
    card5:{
        width:screenWidth*0.86,
        height:screenHeight*0.15,
        backgroundColor:"black",
        borderRadius:screenWidth*0.05,
        opacity:0.2,
        
    },
    backgroundImage:{
        borderRadius:screenWidth*0.05,
        overflow: 'hidden',
        marginTop:screenHeight*0.02,
        
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
