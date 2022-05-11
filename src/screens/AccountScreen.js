import React, {useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth'
import {Button} from 'react-native-paper'

const AccountScreen = () => {


  return (
    <View style={styles.aligning}>
      <Text style={styles.text}>Email Id  : {auth().currentUser.email}</Text>
      <Button mode="contained" style={styles.button} onPress={() => auth().signOut()}>
          LogOut
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
      color:'black',
      textAlign:'center',
      paddingBottom:'5%'
  },
  aligning:{
    top:"45%",
    justifyContent:"center",
  },
  button:{
    width:'25%',
    alignSelf:'center'
  }
});

export default AccountScreen