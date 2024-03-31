import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image } from 'react-native';


export default function LoginScreen() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const clickLogin = () =>{

    }

    return(
        <SafeAreaView style={styles.layoutLogin}>
            <View style={styles.loginTop}>
                <View style={styles.titleLogo}>
                    <Image source={require('../assets/logo.png')} style={styles.imageLogo}></Image>
                    <Text style={styles.titleName}>MyApp</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.titleWelcome}>Welcome</Text>
                    <Text>Wellcome back Login to deail used app</Text>
                </View>
            </View>

            <View style={styles.loginBottom}>
                <View>
                    <Text>Mobile/Email</Text>
                    <TextInput style={styles.inputLogin} placeholder='Enter mobile no or email'></TextInput>
                </View>
                <View style={{paddingTop:10}}>
                    <Text>Password</Text>
                    <TextInput style={styles.inputLogin} placeholder='Enter your password'></TextInput>
                </View>

                <View style={styles.forgetPass}>
                     <Text>Remember me</Text>
                     <Text>Forget password?</Text>
                </View>
                <View>
                    <Button title='Login'></Button>
                </View>

                <View style={styles.registerOption}>
                    <Text>Don't have an acount? <Text style={{color:'#00bfff'}}> Register</Text></Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    layoutLogin:{
        flex: 1
    },

    loginTop:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
         backgroundColor:'#f8f8ff'
    },


    titleLogo:{
        flexDirection: 'row',
        alignItems:'center'
    },
    titleName:{
        fontWeight: 'bold',
        fontSize:20
    },
    titleWelcome:{
        fontWeight:'bold',
        fontSize:35,
        textAlignVertical: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        marginBottom:10,
    },

    imageLogo:{
        width:120,
        height:120,
        resizeMode: 'contain',
    },

    loginBottom:{
        flex:3,
        padding:12,
        marginTop:20,
    },
    inputLogin:{
        padding:10,
        borderWidth:1,
        borderRadius:5,
        borderColor:'gray',
        marginTop:5
    
    },
    registerOption:{
        alignItems:'center',
        marginTop:10
    },
    forgetPass:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        marginTop:10
    },
    loginEnd:{
        flex:1,
        paddingHorizontal:14,
        justifyContent:'space-around'
    }
});

