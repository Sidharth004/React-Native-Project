import React,{useEffect,useState} from 'react'
import { View, Text ,FlatList,StyleSheet} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const ListItemsscreen = () => {
    const [items,setItems]=useState([])
    const myitems =[
        {
            name:"xyz",
            year:"2013",
            phone:"123456",
            image:"https://images.unsplash.com/photo-1631201885736-dc93178edbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            desc:"I am selling this scrap humanoid"
        },
        {
            name:"cbs",
            year:"2014",
            phone:"12345681",
            image:"unavailabe",
            desc:"sample test "

        },

    ]
    const getDetails = async ()=>{
       const querySnap = await firestore().collection('adds').get() 
       const result  = querySnap.docs.map(docSnap=>docSnap.data())
       console.log(result)
       setItems(result)
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
          <Paragraph>{item.year}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Actions>
          <Button>{item.price}</Button>
          <Button>call seller</Button>
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