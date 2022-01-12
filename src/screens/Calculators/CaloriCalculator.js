import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, TouchableWithoutFeedback, TextInput } from 'react-native'

import BackButton from '../../components/BackButton';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CaloriCalculator extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            metricSystem:true,
            gender:"male",
            height:170,
            weight:80,
            age:22,

            ageArray:[],
            kgArray:[],
            lbArray:[],
            cmArray:[],
            inchArray:[],

            bmr:0,

        };
    }

    componentDidMount(){
        this.createArraySets()
    }

    createArraySets(){
        var ageArray=[]
        var kgArray=[]
        var cmArray=[]
        var inchArray=[]
        var lbArray=[]

        for(var x=10 ; x<100; x++){
            ageArray.push(x);
        }
        for(var x=20 ; x<300; x++){
            kgArray.push(x);
        }
        for(var x=90 ; x<300; x++){
            cmArray.push(x);
        }
        for(var x=50 ; x<600; x++){
            lbArray.push(x);
        }
        for(var x=3 ; x<10; x++){
            for(var y=0 ; y<13; y++){
                inchArray.push(x+"'"+y);
            }
        }
        this.setState({ageArray})
        this.setState({kgArray})
        this.setState({lbArray})
        this.setState({cmArray})
        this.setState({inchArray})

    }

    calculateBMR(){
        var bmr;
        var weight=this.state.weight
        var height=this.state.height
        if(!this.state.metricSystem){
            weight=weight*0.453
            height=this.state.height.split("'")[0]*30.48+this.state.height.split("'")[1]*2.54
            console.log(height)
        }
        if(this.state.gender=="male"){
            bmr=(10*this.state.weight)+(6.25*this.state.height)-(5*this.state.age)+5
        }else if(this.state.gender=="female"){
            bmr=(10*this.state.weight)+(6.25*this.state.height)-(5*this.state.age)-161
        }
        this.setState({
            bmr
        })
    }

    render() {
        console.log(this.state.age)
        return (
            <SafeAreaView>

                <BackButton props={this.props}/>

                <View style={styles.container}>

                    <View style={styles.row}>
                        <Text style={styles.inputTitle}>Measurement System</Text>

                        <View style={styles.optionsView}>
                        <TouchableWithoutFeedback
                        onPress={()=>{this.setState({metricSystem:true})}}
                        >
                            <View  style={this.state.metricSystem?[styles.measurementButton, {backgroundColor:"#E0E0E0"} ]: styles.measurementButton}>
                            <Text style={styles.measurementText}>Metric</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                        onPress={()=>{this.setState({metricSystem:false})}}
                        >
                            <View style={!this.state.metricSystem?[styles.measurementButton, {backgroundColor:"#E0E0E0"} ]: styles.measurementButton}>
                                <Text style={styles.measurementText}>Imperial</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inputTitle}>Gender</Text>

                        <View style={styles.optionsView}>
                        <TouchableWithoutFeedback
                        onPress={()=>{this.setState({gender:"male"})}}
                        >
                            <View  style={this.state.gender=="male"?[styles.measurementButton, {backgroundColor:"#E0E0E0"} ]: styles.measurementButton}>
                            <Text style={styles.measurementText}>Male</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                        onPress={()=>{this.setState({gender:"female"})}}
                        >
                            <View style={this.state.gender=="female"?[styles.measurementButton, {backgroundColor:"#E0E0E0"} ]: styles.measurementButton}>
                                <Text style={styles.measurementText}>Female</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inputTitle}>Age</Text>

                        <View style={[styles.optionsView]}>
                        
    
                        <ScrollPicker
                            dataSource={this.state.ageArray}
                            selectedIndex={12}
                            onValueChange={(data, selectedIndex) => {
                                this.setState({age:data})
                            }}
                            wrapperHeight={screenHeight*0.1}
                            wrapperWidth={screenWidth*0.1}
                            wrapperBackground='black'
                            itemHeight={screenHeight*0.05}
                            highlightColor='#d8d8d8'
                            highlightBorderWidth={2}
                            wrapperColor='transparent'
                        />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inputTitle}>Weight ({this.state.metricSystem? "kg" : "lb"})</Text>

                        <View style={styles.optionsView}>
                        
                        <ScrollPicker
                            dataSource={this.state.metricSystem? this.state.kgArray : this.state.lbArray}
                            selectedIndex={60}
                            onValueChange={(data, selectedIndex) => {
                                this.setState({weight:data})
                            }}
                            wrapperHeight={screenHeight*0.1}
                            wrapperWidth={screenWidth*0.1}
                            wrapperBackground='black'
                            itemHeight={screenHeight*0.05}
                            highlightColor='#d8d8d8'
                            highlightBorderWidth={2}
                            wrapperColor='transparent'
                          
                        />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inputTitle}>Height ({this.state.metricSystem? "cm" : "feet"})</Text>

                        <View style={styles.optionsView}>
                        
                        <ScrollPicker
                            dataSource={this.state.metricSystem? this.state.cmArray: this.state.inchArray}
                            selectedIndex={80}
                            onValueChange={(data, selectedIndex) => {
                                this.setState({height:data})
                            }}
                            wrapperHeight={screenHeight*0.1}
                            wrapperWidth={screenWidth*0.1}
                            wrapperBackground='black'
                            itemHeight={screenHeight*0.05}
                            highlightColor='#d8d8d8'
                            highlightBorderWidth={2}
                            wrapperColor='transparent'
                          
                        />
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                       

                            <TouchableOpacity 
                            onPress={()=>{this.calculateBMR()}}
                            style={styles.calculateButton}>
                                <Text style={styles.calculateText}>Calculate</Text>
                            </TouchableOpacity>

                    </View>
                    
                    
                    
                </View>
                <Text>BMR: {this.state.bmr}</Text>
            </SafeAreaView>
        )
    }
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        height:screenHeight*0.8,
        width:screenWidth*0.9,
        alignSelf:"center",
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:screenHeight*0.05
    },
    inputTitle:{
        fontFamily:"Landasans-Medium",
        fontSize:screenWidth*0.07,
        marginRight:screenWidth*0.1

    },
    measurementButton:{
        marginRight:screenWidth*0.05,
    },
    measurementText:{
        fontFamily:"Landasans",
        fontSize:screenWidth*0.07,
        padding:screenWidth*0.01
    },
    optionsView:{
        flexDirection:"row",
        width:screenWidth*0.4,
        justifyContent:"flex-end"
    },
    calculateButton:{
        width:screenWidth*0.4,
        backgroundColor:"gray",
        height:screenHeight*0.06,
        borderRadius:screenWidth*0.05,
        alignItems:"center",
        justifyContent:"center",
    },
    calculateText:{
        color:"white",
        fontFamily:"Landasans-Medium",
        fontSize:screenWidth*0.08,
    },
    buttonRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:screenHeight*0.1
    },
})
