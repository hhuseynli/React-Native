import React from 'react'
import {Button, StyleSheet, TextInput, SafeAreaView} from 'react-native'
import {Constants} from 'expo'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class AddContactForm extends React.Component {
  state = {
    key: '',
    val: '',
  }

  handleKeyChange = key => {
    this.setState({key})
  }

  handleValChange = val => {
    this.setState({val})
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.key, this.state.val)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.key}
          onChangeText={this.handleKeyChange}
          placeholder="Key"
        />
        <TextInput
          style={styles.input}
          value={this.state.val}
          onChangeText={this.handleValChange}
          placeholder="Val"
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </SafeAreaView>
    )
  }
}
