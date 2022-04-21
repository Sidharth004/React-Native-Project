import React,{useState} from 'react'
import { View, Text ,Image,StyleSheet, KeyboardAvoidingView} from 'react-native'
import{ TextInput, Button, Appbar} from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <KeyboardAvoidingView behavior="padding">
      <Appbar.Header>
       <Appbar.Content title="Awesome Project"/>
    </Appbar.Header>
      {/*
      <View style={styles.box1}>
        <Image style={{width:200,height:200}} source={require('../assets/img1.jpeg')}/>
        <Text style={styles.text}>Login to continue!</Text>
      </View>*/}
      <View style={styles.box2}>
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
         <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
          SignUp
        </Button>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  box1:{
    alignItems:"center"
  },
  box2:{
    paddingHorizontal:40,
    height:"50%",
    justifyContent:"space-evenly",
    top:"49%"
  },
  text:{
    fontSize:25
    
  }
});

export default LoginScreen