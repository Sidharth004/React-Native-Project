import React,{useState} from 'react'
import { View, Text ,Image,StyleSheet, KeyboardAvoidingView, TouchableOpacity,Alert} from 'react-native'
import{ TextInput, Button, Appbar} from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';
import { color } from 'react-native-reanimated';


const LoginScreen = ({navigation}) => {
  const [license, setLicenseno] = useState('')
  const [name, setName] = useState('')
  const [areaofservice, setAreaofservice] = useState('')
  const [pincode, setPincode] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignup =async()=>{
    if(!email||!password){
      Alert.alert("please check your mail-id")
      return
    }
    try{
      await auth().createUserWithEmailAndPassword(email,password)
    }catch(err){
      Alert.alert("something went wrong ! Incorrect password or email")
    }


  }
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.box2}>
        <TextInput
          label="License"
          value={license}
          mode="outlined"
          keyboardType="number-pad"
          onChangeText={text =>setLicenseno(text)}
        />
        <TextInput
          label="Name"
          value={name}
          mode="outlined"
          keyboardType="default"
          onChangeText={text => setName(text)}
        />
        <TextInput
          label="Area of Service"
          value={areaofservice}
          mode="outlined"
          keyboardType="default"
          onChangeText={text => setAreaofservice(text)}
        />
        <TextInput
          label="Pincode"
          value={pincode}
          mode="outlined"
          keyboardType="number-pad"
          onChangeText={text => setPincode(text)}
        />
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
         <Button style={styles.button1} mode="contained" onPress={() => userSignup()}>
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
