import React from "react";
import {StyleSheet, View, Button, TextInput} from 'react-native'; 
import {getBrastlewarkInhabitantsWhitSearchText} from '../API/Brastlewarkapi'

//The Search Bar, input field and the methods to filter the gnomes
class Search extends React.Component {
  constructor(props){
    super(props)
    this.handleLoadGnomes = this.handleLoadGnomes.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    
  }

 /// Retrive the array filtered by the name of each gnomes
  handleLoadGnomes(){
      getBrastlewarkInhabitantsWhitSearchText().then(data => {
        var result = data.Brastlewark.filter((e)=>{return e.name.toLowerCase().includes(this.props.filterText.toLowerCase())});
        this.props.onGnomesChange(result);
      })
  }

  handleFilterTextChange (text){
    this.props.onFilterTextChange(text)
  }

  

  render(){
    return (
      <View style={styles.main_container}>
        <TextInput 
          type="text"
          placeholder="Search a gnome ..." 
          style={styles.textinput} 
          value={this.props.filterText} 
          onChangeText = {(text) => this.handleFilterTextChange(text) }
        />
        <Button title="Search" onPress= {text=>{this.handleLoadGnomes(text)}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container :{
    marginTop : 30,
    marginBottom: 10,
    flex : 1,
  },
  textinput : {
    marginLeft : 5,
    marginRight : 5,
    height : 50,
    borderRadius : 10,
    borderColor : "black", 
    borderWidth : 1, 
    paddingLeft : 10 ,
  },
  button : {
    height : 10,
    width : 50,
  }
})

export default Search