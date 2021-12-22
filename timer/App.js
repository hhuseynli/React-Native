import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  AppContainer: {
    alignItems:'center',
    justifyContent:'center'
  },
  Count: {
    fontSize:48
  },
  ButtonView: {
    paddingTop: Constants.statusBarHeight
  }
});



class Counter extends React.Component{
  constructor(props){
    super()
    this.state = {
      count:0
    }
  }

  componentDidMount(){
    this.interval = setInterval(() => this.inc(), 1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }


  inc(){
    this.setState(prevState => ({count: prevState.count+1}))
  }

  render(){
    return (
      <View style={styles.AppContainer}>
      <Text style={styles.Count}>{this.state.count}</Text>
      </View>
    )
  }
}

export default class App extends React.Component{
  
    constructor(props) {
      super(props)
      this.state = {
        showCounter: true,
      }
    }

    toggleCounter = () => this.setState(prevState => ({showCounter: !prevState.showCounter}))
    

    render(){

      if(this.state.showCounter){

        return (
          <View style = {styles.ButtonView}>
          <Button title="toggle" onPress={this.toggleCounter}/>
          <Counter/>
          </View>
          )
      } else {
        return(<View style = {styles.ButtonView}>
        <Button title="toggle" onPress={this.toggleCounter}/>
        </View>)
      }
    }

  }


