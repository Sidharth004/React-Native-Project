import React,{useState} from 'react'
import { View, Text ,Image,StyleSheet, KeyboardAvoidingView, TouchableOpacity, Alert} from 'react-native'
import{ TextInput, Button, Appbar} from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userLogin =async()=>{
    if(!email||!password){
      Alert.alert("please check your mail-id")
      return
    }
    try{
     const result = await auth().signInWithEmailAndPassword(email,password)
     console.log(result.user)
    }catch(err){
      Alert.alert("something went wrong ! Incorrect password or email")
    }


  }
  return (
    <KeyboardAvoidingView behavior="padding">
      {/*<Appbar.Header>
       <Appbar.Content title="Awesome Project"/>
      </Appbar.Header>
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
        <View>
          <TouchableOpacity><Text>Forgot Password</Text></TouchableOpacity>
        </View>
         <Button icon="" mode="contained" onPress={() => userLogin()}>
          Login
        </Button>
        <TouchableOpacity onPress={()=>navigation.navigate("Signup")}><Text>Don't have an Account?</Text></TouchableOpacity>
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

  },
});

export default LoginScreen
