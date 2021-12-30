import React from 'react'
import {Button, StyleSheet, TextInput, SafeAreaView, KeyboardAvoidingView} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
})

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }

  handleNameChange = name => {
    this.setState({name}, this.checkValidity)

  }

  handlePhoneChange = phone => {
    if(+phone >= 0 & phone.length <= 10) this.setState({phone}, this.checkValidity)
  }

  handleSubmit = () => {
    this.props.onSubmit({name: this.state.name, phone:this.state.phone})
  }

  checkValidity(){
    if(+this.state.phone >= 0 & this.state.phone.length === 10 && this.state.name.length >= 3){
        return this.setState({isFormValid: true})
    }
    return this.setState({isFormValid: false})
  }

    

  render() {
    return (
        
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
      </KeyboardAvoidingView>
        
    )
  }
}