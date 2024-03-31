import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { buttonRent, mainColor } from "../assets/color";

export default function(){
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{color:'yellow', fontWeight:'bold'}}>Alamo</Text>
            </View>
            <View style={styles.containerCircle}>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
                <View style={styles.circleNone}></View>
            </View>
            <View>
                <Text style={{fontWeight:'bold', fontSize:17}}>Alamo</Text>
            </View>
            <View>
                <Text style={{color:buttonRent}}>120 offers</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:110,
        height:130,
        marginRight:10,
        borderRadius:10,
        padding:10,
        justifyContent:'space-between',
        backgroundColor: 'white', // Màu nền của component
        shadowColor: '#000000',      // Màu của bóng đổ
        shadowOpacity: 0.2,       // Độ trong suốt của bóng đổ
        shadowRadius: 30,          // Bán kính của bóng đổ
        elevation: 5,             // Độ cao tạo bóng đổ (chỉ áp dụng cho Android)
    },

    titleContainer:{
        backgroundColor:mainColor,
        width:'60%',
        height:'20%',
        alignItems:'center',
        borderRadius:3
    },
    containerCircle:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    circle:{
        width:10,
        height:10,
        borderRadius:50,
        backgroundColor:mainColor,
        marginRight:2,
    },
    circleNone:{
        width:10,
        height:10,
        borderRadius:50,
        backgroundColor:'grey',
        marginRight:2,
    }
})