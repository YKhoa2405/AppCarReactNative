import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import ItemCarHome from '../components/ItemCarHome';
import { Ionicons } from '@expo/vector-icons';
import ItemDealers from '../components/ItemDealers';

export default function HomeScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topLayout} >
                <Text style={{fontSize:28, fontWeight:'500'}}>Browse cars</Text>
                {/* <Ionicons name="list-outline" size={24} color="black" /> */}
            </View>
            <View style={styles.topSearch}>
                <TextInput placeholder='Search type, categories, location' style={styles.search}></TextInput>
            </View>

            <View style={styles.contentLayout}>
                <View style={styles.contentTitle}>
                    <Text style={{fontSize:18, color:'black'}}>Hot deals</Text>
                    <Text style={{fontSize:18, color:'#00ced1'}}>View All</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.contentItemCar}>
                        <ItemCarHome></ItemCarHome>
                        <ItemCarHome></ItemCarHome>
                        <ItemCarHome></ItemCarHome>
                        <ItemCarHome></ItemCarHome>
                    </View>
                </ScrollView>

                <View style={styles.contentTitle}>
                    <Text style={{fontSize:18, color:'black'}}>Top dealers</Text>
                    <Text style={{fontSize:18, color:'#00ced1'}}>View All</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.contentItemCar}>
                        <ItemDealers></ItemDealers>
                        <ItemDealers></ItemDealers>
                        <ItemDealers></ItemDealers>
                        <ItemDealers></ItemDealers>

                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container:{
        marginTop:70,
        marginHorizontal:20,
        flex:1
        
    },
    topLayout:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    topSearch:{
        marginVertical:20
    },
    search:{
        padding:10,
        paddingVertical:15,
        backgroundColor:'#f8f8ff',
        borderRadius:10,
        marginBottom:30
    },
    contentLayout:{
    },
    contentTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10
    },
    contentItemCar:{
        flexDirection:'row',
        marginBottom:40
    }

})