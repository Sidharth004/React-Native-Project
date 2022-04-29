import { View, Text ,FlatList,StyleSheet} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import React from 'react'

const ListItemsscreen = () => {

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

    const renderItem =(item)=>{
       return( <Card style={styles.card}>
        {/*<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />*/}
        <Card.Title title = {item.name} />
        <Card.Content>
          <Paragraph>item.desc</Paragraph>
          <Paragraph>year...actually we need here the date and time of booking</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Actions>
          <Button>200</Button>
          <Button>call seller</Button>
        </Card.Actions>
      </Card>
       )
    }
  return (
    <View>
      {/*<Text>ListItemsscreen</Text>*/}
      <FlatList
      data={myitems}
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