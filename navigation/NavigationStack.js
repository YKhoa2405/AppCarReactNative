import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import DetailScreen from "../screens/Detail";

const stack = createNativeStackNavigator();
export default function NavigationStack(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}></stack.Screen>
                <stack.Screen name="Detail" component={DetailScreen} ></stack.Screen>
            </stack.Navigator>
        </NavigationContainer>
    )
}