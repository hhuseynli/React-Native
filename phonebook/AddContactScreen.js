import React from 'react';
import { connect } from 'react-redux';
import AddContactForm from './AddContactForm'
import { addContact } from './redux/actions';


class AddContactScreen extends React.Component {

    handleSubmit = formState => {
        this.props.addContact(formState)
        this.props.navigation.goBack()
    }
    
    render(){
        return (<AddContactForm onSubmit={this.handleSubmit}/>)
    }
}
export default connect(null, {addContact:addContact})(AddContactScreen)