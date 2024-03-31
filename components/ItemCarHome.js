import React from "react";
import { StyleSheet, View, Text, Image, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { buttonRent, mainColor, white } from "../assets/color";
import { useNavigation } from "@react-navigation/native";
import DetailScreen from "../screens/Detail";


export default function(){
    const navigation = useNavigation();

    function clickBTnRent(){
        navigation.navigate('Detail')
    }

    return(
        <View style={styles.container}>
            <View style={styles.titleOption}>
                <Text style={{fontSize:16 , fontWeight:'500', color:'white'}}>Bugatti</Text>
                
                <Text style={{fontSize:16 , fontWeight:'500', color:'white'}}>$500</Text>
            </View>
            <View style={styles.titleName}>
                <Text style={{color:'white'}}>Chiron</Text>
                <Text style={{color:'white'}}>/day</Text>
            </View>
            <View style={{paddingHorizontal:20}}>
                <Image source={require('../assets/car.png')} style={styles.imageCar}></Image>
            </View>
            <View style={styles.buyDetail}>
            <TouchableOpacity style={styles.btnDetail}>
                    <Text style={{color: white}}>Detail</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRent}>
                    <Text style={{color: white}} onPress={clickBTnRent}>Rent now icon</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:mainColor,
        width:220,
        height:300,
        borderRadius:20,
        marginRight:10,
        justifyContent:'space-between',
    },
    titleOption:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:5,
        paddingHorizontal:20,
        paddingTop:20
    },
    titleName:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20
    },
    imageCar:{
        width:190,
        height:150,
        resizeMode:'contain',
    },
    buyDetail:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    btnDetail:{
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        marginLeft:10
    },

    btnRent:{
        backgroundColor:buttonRent,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderBottomRightRadius:20,
        borderTopLeftRadius:20

    }
})