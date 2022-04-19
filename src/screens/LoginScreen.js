import React,{useState} from 'react'
import { View, Text ,Image,StyleSheet} from 'react-native'
import{ TextInput } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  return (
    <View>
      <View style={styles.box1}>
        <Image style={{width:200,height:200}} source={require('../assets/img1.jpeg')}/>
        <Text style={styles.text}>Login to continue!</Text>
      </View>
      <View>
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          onChangeText={text => setEmail(text)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box1:{
    alignItems:"center"
  },
  text:{
    fontSize:25
    
  }
});

export default LoginScreen