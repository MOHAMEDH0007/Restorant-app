import * as React from 'react';
import { useState } from 'react';
import { Text, Image, TextInput, Pressable, ScrollView, StyleSheet, Alert } from 'react-native';
import {validateEmail} from '../utils/index'

export default function Subscribe() {

    const [email, onchangeemail] = useState('');
    const isEmailValid = validateEmail(email);

    return(
       <ScrollView style={SubStyle.container}>
        <Image style={SubStyle.Logo} source={require('../assets/logo.png')} />
        <Text style={SubStyle.Subtext}>Subscribe to our newsletter  for our latest delicious recipes!</Text>
        <TextInput style={SubStyle.EmailText} placeholder='Type your Email' placeholderTextColor="grey" onChangeText={onchangeemail} value={email} keyboardType='email-address'  />
        
        <Pressable style={SubStyle.Button} onPress={()=> Alert.alert('Thanks for Subscribing, Stay Tuned!')} 
          disabled={(!isEmailValid)}>
            <Text style={SubStyle.ButtonText}> Subscribe </Text>
        </Pressable>
       </ScrollView>
    )
}
const SubStyle= StyleSheet.create({
    container:{flex:1, backgroundColor:'#004643'},
    Logo:{resizeMode:'contain',height:100, width:100, marginTop:20, marginLeft:152},
    Subtext:{textAlign:'center',fontSize:18, color:'#E5CCB2'},
    EmailText:{marginTop:30, textAlign:'center', marginHorizontal:20, borderWidth:2, borderRadius:8,borderColor:'white', paddingVertical:5, color:'white'},
    Button:{marginTop:40,borderRadius:30, backgroundColor:'#E5CCB2',paddingVertical:6, marginHorizontal:80},
    ButtonText:{fontSize:17,textAlign:'center'},
})