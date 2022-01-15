import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, TouchableWithoutFeedback, TextInput, Modal } from 'react-native'

import BackButton from '../../components/BackButton';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CaloriModal from './CaloriModal'

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
            activityLevelArray:["Sedentary: little or no exercises","Light: exercise 1-3 tm/wk","Moderate: exercise 3-5 tm/wk","Active: daily exercise or intense 4-5 tm/wk","Very Active: intense exercise 6-7 tm/wk","Extra Active: very intense exercise daily or physical job"],
            activityLevel:1.2,

            goal:"protect",
            
            bmr:0,
            calori:0,

            modalIsVisible:false

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
            bmr,
            calori:bmr*this.state.activityLevel,
            modalIsVisible:true
        })
        console.log("age"+this.state.age)
        console.log("gender"+this.state.gender)
        console.log("actvty"+this.state.activityLevel)
        console.log("weight"+this.state.weight)
        console.log("height"+this.state.height)

    }

    render() {
        return (
            <SafeAreaView>

                <BackButton goBack={()=>{this.props.navigation.goBack()}}/>

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
                        <Text style={styles.inputTitle}>Goal</Text>

                        <View style={styles.optionsView}>
                        <TouchableWithoutFeedback
                        onPress={()=>{this.setState({goal:"loseFat"})}}
                        >
                            <View  style={this.state.goal=="loseFat"?[styles.measurementButton, {backgroundColor:"#E0E0E0"} ]: styles.measurementButton}>
                            <Text style={styles.measurementText}>Lose Fat</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                        onPress={()=>{this.setState({goal:"protect"})}}
                        >
                            <View style={this.state.goal=="protect"?[styles.measurementButton, {backgroundColor:"#E0E0E0"} ]: styles.measurementButton}>
                                <Text style={styles.measurementText}>Protect</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                        onPress={()=>{this.setState({goal:"gainMuscle"})}}
                        >
                            <View style={this.state.goal=="gainMuscle"?[styles.measurementButton, {backgroundColor:"#E0E0E0"} ]: styles.measurementButton}>
                                <Text style={styles.measurementText}>Gain Muscle</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        </View>
                        
                    </View>
                    <View style={[styles.row,{marginTop:screenHeight*0.07}]}>
                        <Text style={[styles.inputTitle,{marginRight:0}]}>Activity</Text>


                        <View style={{width:screenWidth*0.7,height:screenHeight*0.1}}>
                        <ScrollPicker
                            dataSource={this.state.activityLevelArray}
                            selectedIndex={0}
                            onValueChange={(data, selectedIndex) => {
                                var activityLevel=1.2
                                if(selectedIndex==1){
                                    activityLevel=1.375
                                }else if(selectedIndex==2){
                                    activityLevel=1.475
                                }else if(selectedIndex==3){
                                    activityLevel=1.55
                                }else if(selectedIndex==4){
                                    activityLevel=1.725
                                }else if(selectedIndex==5){
                                    activityLevel=1.9
                                }
                                this.setState({activityLevel})

                            }}
                            wrapperHeight={screenHeight*0.1}
                            wrapperWidth={screenWidth*0.05}
                            wrapperBackground='black'
                            itemHeight={screenHeight*0.05}
                            highlightColor='#d8d8d8'
                            highlightBorderWidth={2}
                            wrapperColor='transparent'
                          
                        />
                        </View>
                       
                    </View>
                    
                    
                    <View style={styles.pickerTitleRow}>
                        <Text style={[styles.inputTitle,{marginRight:0}]}>Age</Text>

                        <Text style={[styles.inputTitle,{marginRight:0}]}>Weight ({this.state.metricSystem? "kg" : "lb"})</Text>

                        
                        <Text style={[styles.inputTitle,{marginRight:0}]}>Height ({this.state.metricSystem? "cm" : "feet"})</Text>

                       
                    </View>
                    <View style={styles.pickerRow}>
                    <View style={[styles.pickerView]}>
                        
    
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
                    <View style={[styles.pickerView,{marginRight:screenWidth*0.09}]}>
                        
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
                        <View style={[styles.pickerView,{marginRight:screenWidth*0.09}]}>

                        <ScrollPicker
                            dataSource={this.state.metricSystem? this.state.cmArray: this.state.inchArray}
                            selectedIndex={80}
                            onValueChange={(data, selectedIndex) => {
                                this.setState({height:data})
                            }}
                            wrapperHeight={screenHeight*0.1}
                            wrapperWidth={screenWidth*0.05}
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
                <Text>protect: {this.state.calori}</Text>

            

                <Modal visible={this.state.modalIsVisible}>
                    <CaloriModal closeModal={()=>{this.setState({modalIsVisible:false})}} bmr={this.state.bmr} calori={this.state.calori} goal={this.state.goal}/>
                </Modal>
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
    pickerTitleRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:screenWidth*0.015,
        marginTop:screenHeight*0.08
        
    },
    pickerRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:screenHeight*0.01
        
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
    pickerView:{
        flexDirection:"row",
        width:screenWidth*0.1,
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
        marginTop:screenHeight*0.07
    },
})
