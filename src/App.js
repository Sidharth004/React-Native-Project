/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  
  StyleSheet,
  Text,
  
  View,
  StatusBar,
} from 'react-native';

import LoginScreen from './screens/LoginScreen'




const App =() => {
  return (
    <>
  
    <StatusBar barStyle="dark-content" backgroundColor="deepskyblue"/>
    <View style = {styles.container}>
        <LoginScreen />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:"black"
    
  }
 
});

export default App;
