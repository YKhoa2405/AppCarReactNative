import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { white, black, mainColor, buttonRent } from "../assets/color";

export default function ItemDetail(){
    return(
        <View style={styles.container}>
            <Text style={{color:white, fontWeight:'bold', fontSize:20}}>H-P</Text>
            <Text style={{color:buttonRent}}>56454 kw</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:20,
        backgroundColor:black,
        width:110,
        height:90,
        borderRadius:10,
        borderColor:white,
        borderWidth:2,
        justifyContent:'center',
        paddingLeft:10
    },
})