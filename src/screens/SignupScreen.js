import React,{useState} from 'react'
import { View, Text ,Image,StyleSheet, KeyboardAvoidingView} from 'react-native'
import{ TextInput, Button, Appbar} from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LoginScreen = () => {
  const [license, setLicenseno] = useState('')
  const [name, setName] = useState('')
  const [areaofservice, setAreaofservice] = useState('')
  const [pincode, setPincode] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <KeyboardAvoidingView behavior="padding">
      <Appbar.Header>
       <Appbar.Content title="Register"/>
    </Appbar.Header>
      {/*
      <View style={styles.box1}>
        <Image style={{width:200,height:200}} source={require('../assets/img1.jpeg')}/>
        <Text style={styles.text}>Login to continue!</Text>
      </View>*/}
      <View style={styles.box2}>
        <TextInput
          label="License"
          value={license}
          mode="outlined"
          onChangeText={text => setLincenseno(text)}
        />
        <TextInput
          label="Name"
          value={name}
          mode="outlined"
          onChangeText={text => setName(text)}
        />
        <TextInput
          label="Area of Service"
          value={areaofservice}
          mode="outlined"
          onChangeText={text => setAreaofservice(text)}
        />
        <TextInput
          label="Pincode"
          value={pincode}
          mode="outlined"
          onChangeText={text => setPincode(text)}
        />
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
         <Button style={styles.button1} mode="contained" onPress={() => console.log('Pressed')}>
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
    justifyContent:"space-evenly",
    top:"25%"
  },
  text:{
    fontSize:25

  },
  button1:{
    top:"3%"
  }
});

export default LoginScreen
