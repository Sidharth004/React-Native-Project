import React,{useState} from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import{ TextInput, Button, Appbar} from 'react-native-paper'

const CreateAdScreen = () => {
    const[name,setName]=useState('')
    const[desc,setDesc]=useState('')
    const[year,setYear]=useState('')
    const[price,setPrice]=useState('')
    const[phone,setPhone]=useState('')

  return (
   <KeyboardAvoidingView behavior="padding">
      <Appbar.Header>
       <Appbar.Content title="Booking Areana"/>
      </Appbar.Header>
    <View style={styles.box1}>
      <Text style={styles.text}>CreateAdScreen</Text>
      <TextInput
          label="Ad Name"
          value={name}
          mode="outlined"
          onChangeText={text => setName(text)}
        />
        <TextInput
          label="Ad Desc"
          value={desc}
          mode="outlined"
          numberOfLines={5}
          multiline={true}
          onChangeText={text => setDesc(text)}
        />
        <TextInput
          label="Ad Year"
          value={year}
          mode="outlined"
          keyboardType="numeric"
          onChangeText={date => setYear(date)}
        />
        <TextInput
          label="Ad Price"
          value={price}
          mode="outlined"
          keyboardType="numeric"
          onChangeText={number => setPrice(number)}
        />
        <TextInput
          label="Add contact"
          value={phone}
          mode="outlined"
          keyboardType="number-pad"
          onChangeText={number => setPhone(number)}
        />
         <Button icon="camera"mode="contained" onPress={() => console.log('Pressed')}>
           Upload Image
         </Button>
         <Button mode="contained" onPress={() => console.log('Pressed')}>
           Book Slot
         </Button>

    </View>
   </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    box1:{
        justifyContent:"space-evenly",
        paddingHorizontal:40,
        top:"20%"
    },
    text:{
      fontSize:25,
      textAlign:"center"
    }
    
  });

export default CreateAdScreen
