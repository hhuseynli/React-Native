import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation'
import AddContactScreen from './AddContactScreen';
import ContactListScreen from './ContactListScreen'
import ContactDetailsScreen from './ContactDetailsScreen';
import SettingsScreen from './SettingsScreen';

import Ionicons from "react-native-vector-icons/Ionicons";
import LoginScreen from './LoginScreen';
import { fetchUsers } from './api';



const StackNavigator = createStackNavigator({
  AddContact:AddContactScreen,
  ContactList: ContactListScreen,
  ContactDetails: ContactDetailsScreen
},{
  initialRouteName: 'ContactList',
  navigationOptions:{headerTintColor: '#a41034'}
})

StackNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
    
      name={`people${focused ? "" : "-outline"}`}
      size={25}
      color={tintColor}
    />
  )
}

const MainNavigator = createBottomTabNavigator({
  Contacts: StackNavigator,
  Settings: SettingsScreen
},{
  tabBarOptions:
  {
    activeTintColor: '#a41034'
  }
})


const AppNavigator = createSwitchNavigator({
  Main: MainNavigator,
  Login:LoginScreen
},
{
  initialRouteName:"Login"
})

export default class App extends React.Component {


  state = {
    contacts: null
  }

  componentDidMount(){
    fetchUsers()
    .then(results => this.setState({contacts: results}))
    .catch(err => console.error(err))
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));

   }

  render() {
    return <AppNavigator screenProps={{contacts: this.state.contacts, addContact: this.addContact}}/>
  }
}
