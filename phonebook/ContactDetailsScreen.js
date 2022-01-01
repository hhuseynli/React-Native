import React from 'react'
import {Button, Text, View} from 'react-native'
import { connect } from 'react-redux';


class ContactDetailsScreen extends React.Component{
    render() {
        return (
            <View>
                <Text>{this.props.route.params.phone}</Text>
                <Button title='Go to Random'  onPress={this.goToRandomContact}/>
                <Button title="Go back to contacts" onPress={() => this.props.navigation.popToTop()}/>
            </View>
        )
    }


    goToRandomContact = () => {
        const contacts  = this.props.contacts;
        const phone = this.props.route.params.phone;
        let randomContact;
        while (!randomContact) {
          const randomIndex = Math.floor(Math.random() * contacts.length);
          if (contacts[randomIndex].phone !== phone) {
            randomContact = contacts[randomIndex];
          }
        }
        
        this.props.navigation.push('ContactDetails', {
            ...randomContact,
          });
        
      };        
    

}

const getPropsFromState = state => ({
    contacts: state.contacts
  })
  
  export default connect(getPropsFromState)(ContactDetailsScreen)