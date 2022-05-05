import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { ScreenContainer } from 'react-native-screens';
import{Button} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import { BorderlessButton } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

export default function FrontScreen({navigation}) {
  return (
    <View style={styles.aligning}>
      <TouchableOpacity onPress={()=>navigation.navigate("Signup")}><Text style={styles.texle}>Register</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")}><Text style={styles.texle}>Login</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    aligning:{
        top:"45%",
        justifyContent:"center",
    },
    texle:{
        textAlign:'center',
        fontFamily:'monospace',
        fontSize:27,
        color:'deepskyblue',
        fontWeight:'bold',
        paddingBottom:30
    }
})