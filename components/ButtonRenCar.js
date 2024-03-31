import React from "react";
import { Button, TouchableHighlight, Text, View, StyleSheet } from "react-native";
import { mainColor, white } from "../assets/color";

export default function ButtonRenCar(){
    return(
        <View style={styles.container}>
            <TouchableHighlight style={styles.btnRent}>
                <Text style={{color:mainColor, fontSize:18, fontWeight:'600'}}>Rent Now</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        marginTop:50,
    },
    btnRent:{
        width:'100%',
        height:'150%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        backgroundColor:white,

    }

})
