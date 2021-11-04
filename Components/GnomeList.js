import React from "react";
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GnomeCard from './GnomeCard.js';

// The list of all gnomes
class GnomeList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.main_container}>
        <FlatList
          ref={this.props.scrollRef}
          pagingEnabled={true}
          data={this.props.gnomes}
          renderItem={({item}) => <GnomeCard gnome={item} />}
          keyExtractor={item => item.id}
          numColumns={3}
        />
        
      </View>
    )
}

}


const styles = StyleSheet.create({
  main_container :{
    flex : 6
  },
  invisibleCard : {
    backgroundColor : "transparent",
  },
  floatingButton:{
    width: 60,  
    height: 60,   
    borderRadius: 30,            
    backgroundColor: '#ee6e73',                                    
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10, 
  }
})


export default GnomeList