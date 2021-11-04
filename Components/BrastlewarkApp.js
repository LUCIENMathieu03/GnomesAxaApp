import React from 'react';
import {SafeAreaView,StyleSheet, Text} from 'react-native'
import Search from './Search';
import GnomeList from './GnomeList';

// The pricipal view with all the component
class BrastlewarkApp extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      filterText : "",
      gnomes : {},
    }
    this.handleLoadGnomes = this.handleLoadGnomes.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleLoadGnomes(gnomes){
    this.setState({gnomes})
    
  }

  handleFilterTextChange(filterText){
    this.setState({filterText});
    console.log(filterText)  
  }

  render(){
    console.log("RENDER");
    
    return(
      <SafeAreaView style={styles.main_container}>
        <Text style={styles.title}>Brastlewark</Text>
        <Search
          filterText = {this.state.filterText}
          onGnomesChange={this.handleLoadGnomes}
          onFilterTextChange={this.handleFilterTextChange}
        />
         <GnomeList gnomes = {this.state.gnomes}/> 
      </SafeAreaView>
    )
  }
}



const styles = StyleSheet.create({
  main_container :{
    flex :1, 
  },
  title : {
    fontSize: 35,
    textAlign : "center"
  }
})

export default BrastlewarkApp