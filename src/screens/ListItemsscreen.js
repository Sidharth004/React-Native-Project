import React,{useEffect,useState} from 'react'
import { View, Text ,FlatList,StyleSheet,Linking,Platform} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const ListItemsscreen = () => {
    const [items,setItems]=useState([])
    
    const getDetails = async ()=>{
       const querySnap = await firestore().collection('adds').get() 
       const result  = querySnap.docs.map(docSnap=>docSnap.data())
       console.log(result)
       setItems(result)
    }
    const openDial = (phone)=>{
      if(Platform.OS === 'android'){
        Linking.openURL(`tel:${phone}` )
      }else{
        Linking.openURL(`telprompt:${phone}` )
      }

    }
    useEffect(()=>{
       getDetails()
       return()=>{
         console.log("cleanup")
       }

     },[])
    const renderItem =(item)=>{
       return( <Card style={styles.card}>
        {/*<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />*/}
        <Card.Title title = {item.name} />
        <Card.Content>
          <Paragraph>{item.desc}</Paragraph>
          <Paragraph>{item.datev}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Actions>
          <Button>{item.pincode}</Button>
          <Button onPress={()=>openDial()}>call seller</Button>
        </Card.Actions>
      </Card>
       )
    }
  return (
    <View>
      {/*<Text>ListItemsscreen</Text>*/}
      <FlatList
      data={items}
      keyExtractor={(item)=>item.phone}
      renderItem={({item})=>renderItem(item)}
      inverted
      />
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        margin:10,
        elevation:2,
    }, 
  });


export default ListItemsscreen