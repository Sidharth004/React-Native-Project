/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  
  StyleSheet,
  Text,
  
  View,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer ,DefaultTheme as DefaultThemeNav} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import CreateAdScreen from './screens/CreateAdScreen';
import ListItemsscreen  from './screens/ListItemsscreen';
import AccountScreen from './screens/AccountScreen';
import Feather from 'react-native-vector-icons/Feather'
import auth from '@react-native-firebase/auth' 

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'deepskyblue'
  },
};
const MyTheme = {
  ...DefaultThemeNav,
  colors: {
    ...DefaultThemeNav.colors,
    background: 'pink',
  },
};

const Stack = createStackNavigator() 
const Tab = createBottomTabNavigator();

const AuthNavigator =()=>{
  return(
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
      </Stack.Navigator>
  )
}

const TabNavigator=()=>{
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
          }else if(route.name==='Book Request'){
            iconName='plus-square'
          }else if(route.name==='account'){
            iconName='user'
          }

          // You can return any component that you like here!
          return <View style={{borderWidth:2,borderColor:"white",borderRadius:20}}><Feather name={iconName} size={29} color={color}/></View> 
        },
      })}
    tabBarOptions={{
        activeTintColor: 'deepskyblue',
        inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="Home" component={ListItemsscreen}  options={{title:""}} />
        <Tab.Screen name="Book Request" component={CreateAdScreen}options={{title:""}} />
        <Tab.Screen name="account" component={AccountScreen} options={{title:""}} />
      </Tab.Navigator>
  )
}
 
const Navigation =()=>{
  const [user,setUser] = useState('')
  useEffect(()=>{
    const unsubscribe =   auth().onAuthStateChanged((userExist)=>{
        if(userExist){
            setUser(userExist)
        }
        else{
            setUser("")
        }
  })
  return unsubscribe 
},[])
  return (
    <NavigationContainer theme={MyTheme}>
        {user?<TabNavigator/>:<AuthNavigator/>}
        
    </NavigationContainer>
  )
}
const App =() => {
  return (
    <>
    <PaperProvider theme={theme}>
    <StatusBar barStyle="dark-content" backgroundColor="deepskyblue"/>
    <View style = {styles.container}>
        {/*<LoginScreen />
          <SignupScreen/>
          <CreateAdScreen/>
          <ListItemsscreen/>*/}
        <Navigation/>
    </View>
    </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:"white"
    
  }
 
});

export default App;
