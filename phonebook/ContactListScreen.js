import React from 'react';
import { Button, StyleSheet, SafeAreaView } from 'react-native';

import contacts, {compareNames} from './contacts'
import SectionListContacts from './SectionListContacts'

export default class App extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: "Phonebook",
        headerRight: <Button title="Add" color={'#a41034'} onPress={() => {navigation.navigate("AddContact")}}/>
    })

  state = {
    showContacts: true,
    contacts: contacts,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  sort = () => {
    this.setState(prevState => ({contacts: prevState.contacts.sort(compareNames)}))
  }

  showForm = () => {this.props.navigation.navigate("AddContact")}
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {this.state.showContacts && 
        <SectionListContacts 
        contacts={this.props.screenProps.contacts} 
        onSelectContact={contact => {this.props.navigation.navigate("ContactDetails", {
            phone:contact.phone,
            name:contact.name
        })}}
        />}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});