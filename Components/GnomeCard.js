import React from "react";
import {View , StyleSheet, Image, Text} from 'react-native'

// The gnome cards
class GnomeCard extends React.Component {

  render(){
    const gnome = this.props.gnome;
    const uri = gnome.thumbnail;
    if (gnome.empty === true) {
      return <View style={styles.invisibleCard} />;
    }
    return (
      <View style={styles.main_container}>
        <Image 
        style={styles.image} 
        source={{
          uri: uri,
        }}
        />
        <Text style={styles.textName}>{gnome.name}</Text>
        <Text style={styles.text}>{gnome.age} ans</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container : {
    height : 170,
    width: 130,
    flex : 1,
    paddingTop : 10,
    margin : 7,
    alignItems: 'center' ,
    borderWidth : 1,
    borderRadius : 20,
    borderColor : "lightgrey",
    elevation:3,
    shadowOffset : {width : 2, height : 2},
    shadowColor:"#333",
    shadowOpacity:0.3,
  },
  image :{
    width : 100,
    height : 90,
    backgroundColor : 'grey',
    borderRadius : 50 ,
    marginBottom :5,
  },
  invisibleCard : {
    height : 170,
    width: 130,
  },
  text :{
    textAlign: "center"
  },
  textName :{
    textAlign: "center",
    fontWeight:"bold"
  }
})

export default GnomeCard