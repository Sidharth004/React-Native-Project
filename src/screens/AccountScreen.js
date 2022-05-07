import React, {useState} from 'react'
import { View, Text} from 'react-native'
import auth from '@react-native-firebase/auth'
import {Button} from 'react-native-paper'

const AccountScreen = () => {


  return (
    <View>
      <Text>Name {auth().currentUser.email}</Text>
      <Button mode="contained" onPress={() => auth().signOut()}>
          LogOut
        </Button>
    </View>
  )
}

export default AccountScreen