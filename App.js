import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { NavigationBottom, NavigationStack } from './navigation/Navigation';
import NavigationStack from './navigation/NavigationStack';
import ButtonRenCar from './components/ButtonRenCar';
import ItemDetail from './components/ItemDetail';



export default function App(){
  return(
    <NavigationStack></NavigationStack>
  )
}

