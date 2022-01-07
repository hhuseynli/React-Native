import React from "react";
import { Button, KeyboardAvoidingView, StyleSheet, TextInput, Text, Platform } from "react-native";
import { connect } from "react-redux";
import { login } from "./api";
import { loginUser } from "./redux/actions";

class LoginScreen extends React.Component {
  state={
    username:"",
    password:""
  }

   

  handleChange = key => val => {
    this.setState({[key]: val})
  }

   _login = async () => {
      this.props.loginUser(this.state.username, this.state.password)

  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <TextInput placeholder="username" 
        style={styles.input} 
        value={this.state.username} 
        onChangeText={this.handleChange('username')}
        autoCapitalize="none" />

        <TextInput placeholder="password" 
        style={styles.input} 
        value={this.state.password} 
        onChangeText={this.handleChange('password')} 
        secureTextEntry/>

        <Text style={styles.error}>{this.props.err}</Text>
        <Button title="Log In" onPress={this._login} />

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    minHeight:30,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  
  },
  error:{
    textAlign:"center",
    color:"red"
  }
});

const mapStateToProps = state => ({
  err:state.user.loginErr
})

export default connect(mapStateToProps, {loginUser: loginUser})(LoginScreen)