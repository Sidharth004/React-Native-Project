import React,{useState} from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView,Alert } from 'react-native'
import{ TextInput, Button, Appbar} from 'react-native-paper'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import AccountScreen from './AccountScreen';

const CreateAdScreen = () => {
    const[name,setName]=useState('')  
    const[desc,setDesc]=useState('')
    const[year,setYear]=useState('')
    const[price,setPrice]=useState('')
    const[phone,setPhone]=useState('')
    {/*const[image,setImage]=useState("")*/}

   const postData = async ()=>{
    try{
      await firestore().collection('adds')
     .add({
      name,
      desc,
      year,
      price,
      phone,
      image:"https://media.istockphoto.com/vectors/ewaste-in-recycling-bin-vector-id474368084?k=20&m=474368084&s=170667a&w=0&h=2nTJjAuokLcr4xq3R4XlrDDmMvfapHN5kRwPQMypHMs=",
      uid:auth().currentUser.uid
    })
    Alert.alert("posted your add!")

  }catch(err){
    Alert.alert("something went wrong !")
  }
    
    }
    

 const openCamera = ()=>{
    launchCamera({quality:0.5},(fileobj)=>{
      console.log(fileobj)
      {/*const uploadTask = storage().ref().child(`/items/${Date.now()}`).putFile()
      uploadTask.on('state_changed', 
      (snapshot) => {
        
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if(progress=100){alert("Uploaded")}
        
      }, 
      (error) => {
        alert("Something Went Wrong")
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          //console.log('File available at', downloadURL);
          setImage(downloadURL)
        });
      }
    );*/}
    })
 } 
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
         <Button icon="camera"mode="contained" onPress={() => openCamera()}>
           Upload Image
         </Button>
         <Button mode="contained" onPress={() =>postData()}>
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

export default AccountScreen
