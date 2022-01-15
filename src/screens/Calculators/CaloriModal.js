import React, { Component } from 'react'
import { Text, StyleSheet, View , SafeAreaView, Dimensions} from 'react-native'
import BackButton from '../../components/BackButton';

export default class CaloriModal extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            minCalori:this.props.calori,
            maxCalori:this.props.calori,

            protectCalori:this.props.calori
        }
    }
    componentDidMount(){
        this.calculateCalori()
    }

    calculateCalori(){
        var minCalori=0;
        var maxCalori=0;
        if(this.props.goal=="gainMucle"){
            minCalori=this.props.calori+250
            maxCalori=this.props.calori+500
        }else if(this.props.goal=="loseFat"){

            minCalori=this.props.calori-500
            maxCalori=this.props.calori-250
        }else{
            //protect

            minCalori=this.props.calori-250
            maxCalori=this.props.calori+250
        }
        this.setState({
            minCalori,
            maxCalori
        })
    }

    render() {
        return (
            <SafeAreaView>

                <BackButton goBack={()=>{this.props.closeModal()}}/>

                <View style={styles.container}>
                    <Text> calori modal </Text>
                    <Text>BMR: {this.props.bmr} </Text>
                    <Text>Protect: {this.props.calori} </Text>
                    <Text>Goal: {this.props.goal} </Text>
                    <Text>GoalCalori: {this.state.minCalori}+" - "+{this.state.maxCalori} </Text>


                </View>
            </SafeAreaView>
        )
    }
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        height:screenHeight*0.9,
        width:screenWidth
    }
})
