import {useState} from 'react';
import * as React from 'react';
import { View, Text, StyleSheet, Pressable,Image, ScrollView,useColorScheme, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Ionicons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

//Import a local component here-- #935116--//
import Welcomeapp from '../Finalassesment/Welcomeapp'
import Subscribe from '../Finalassesment/Subscribe'
import { Header } from '@react-navigation/stack';
import { FlingGestureHandler } from 'react-native-gesture-handler';
import { SlideInUp } from 'react-native-reanimated';

export default function welcomeApp() {
  
  return(
    <NavigationContainer independent={true}>
      <View style={style.container}>
       <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerTitleAlign:'center',headerStyle:{ backgroundColor:'#F0E68C'}}}>
       <Stack.Screen name='Welcome' component={Welcomeapp}/>
       <Stack.Screen name='Subscribe' component={Subscribe}/>
       </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
   headercon:{backgroundColor:"#002349",alignItems:'center',flexDirection:'row', justifyContent:'center'},
   container:{flex:1,},headertext:{ padding:5, fontSize:15, color:"white" },
   logo:{height:50,width:50,resizeMode:'contain'},
   Button:{padding:20,margin:20,backgroundColor:"#553A41",alignItems:"center", borderWidth:1,borderColor:"white", borderRadius:10},
   ButtonText:{color:"white"}
});











