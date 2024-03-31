import React from "react";
import { StyleSheet, View,Text,Image } from "react-native";
import { black, buttonRent, mainColor,white } from "../assets/color";
import ButtonRenCar from "../components/ButtonRenCar";
import ItemDetail from "../components/ItemDetail";

export default function DetailScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.rightContainer}>
                <View style={styles.topRightContainer}>
                    <Text style={styles.topTitle}>Bugatti Chiron</Text>
                    <ItemDetail></ItemDetail>
                    <ItemDetail></ItemDetail>
                    <ItemDetail></ItemDetail>

                </View>
                <View style={styles.bottomRightContainer}>
                    <ItemDetail></ItemDetail>
                    <Text style={styles.bottomTitle}>V8 6.2L</Text>
                </View>

            </View>

            <View style={styles.leftContainer}></View>

            <View style={styles.buttonContainer}>
                <ButtonRenCar></ButtonRenCar>
            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/carTop.png')} style={styles.imageCarTop}></Image>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    rightContainer:{
        flex:2,
    },
    topRightContainer:{
        height:'60%',
        backgroundColor:'grey',
        justifyContent:'space-around'
    },
    topTitle:{
        color:white,
        fontWeight:'bold',
        fontSize:40,
        margin:20
    },
    bottomRightContainer:{
        height:'40%',
        backgroundColor:black,
    },
    bottomTitle:{
        color:white,
        fontWeight:'bold',
        fontSize:22,
         marginLeft:20,
         marginTop:60
    },
    leftContainer:{
        flex:1,
        backgroundColor:'red',
        height:'100%'
    },
    imageContainer:{
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginLeft:50,
        justifyContent:'center'
    },
    imageCarTop:{
        width:450,
        height:450,
        resizeMode:'center'

    },
    buttonContainer:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        marginHorizontal:20,
        marginBottom:50

    },
})