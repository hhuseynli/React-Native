import React from 'react';
import { StyleSheet, Text, View, Button, Vibration} from 'react-native';

export default class App extends React.Component {
  state = {
    minutes: 25,
    seconds: 0,
    isStarted: true,
    isRest: false

  }

  componentDidMount() {
    this.checkTime()
    if(this.state.isStarted){
      this.decreaseSecs()
    }
  } 

  componentDidUpdate() {
    this.checkTime()
  }
    
  checkTime(){
    if(this.state.minutes === 0 && this.state.seconds === 0 && this.state.isStarted){
      Vibration.vibrate() 
      this.stopTimer()     
      if(this.state.isRest){
        this.setState({minutes: 25, seconds:0})
      } else {
        this.setState({minutes:5, seconds:0})
      }
      this.setState(prevState => ({isRest: !prevState.isRest}))
      this.pauseTimer()
      
      

    } else if (this.state.seconds === 0 && this.state.isStarted){
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
        seconds: 59
      }));
  }
}
  
  formatTime = (min, sec) => {
    return min + ":" + (sec.toString().length > 1 ? sec : "0" + sec);
  }

  stopTimer = () => {
    this.setState({isStarted: false});
    if(this.interval) clearInterval(this.interval)
  }

  pauseTimer = () => {
    this.setState({isStarted:true}) 
    this.decreaseSecs()       
  }

  decreaseSecs() {
      this.interval = setInterval(() => this.setState(prevState => ({
        seconds: prevState.seconds - 1
      })), 1000)    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Work Timer </Text>
        <Text style={styles.time}>
          {this.formatTime(this.state.minutes, this.state.seconds)}
        </Text>
        <Button 
        title={this.state.isStarted ? "Pause" : "Start"} 
        onPress={this.state.isStarted ? this.stopTimer : this.pauseTimer} 
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold'
  },
  time: {
    fontSize: 42
  }
});
