import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddContactScreen from './AddContactScreen';
import ContactListScreen from './ContactListScreen'
import ContactDetailsScreen from './ContactDetailsScreen';
import SettingsScreen from './SettingsScreen';

import Ionicons from "react-native-vector-icons/Ionicons";
import LoginScreen from './LoginScreen';
import { fetchUsers } from './api';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';



const Stack = createNativeStackNavigator()

function contacts() {
  return (
  <Stack.Navigator 
    initialRouteName='ContactList'
    screenOptions={
      {headerTintColor: '#a41034'}
  }
    >
      <Stack.Screen 
      name="AddContact" 
      component={AddContactScreen}
      options={{title:"Add Contact"}}/>

      <Stack.Screen 
      name="ContactList" 
      component={ContactListScreen} 
      options={
        ({navigation}) => ({
          headerTitle: "Phonebook",
          headerRight: () => (<Button title="Add" color={'#a41034'} onPress={() => {navigation.navigate("AddContact")}}/>)
        })
    }/>
      <Stack.Screen 
      name="ContactDetails" 
      component={ContactDetailsScreen}
      options={
        ({route}) =>({
          title: route.params.name
        })
    }
      />
    </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

export default class App extends React.Component {


  componentDidMount(){
    fetchUsers()
    .then(results => this.setState({contacts: results}))
    .catch(err => console.error(err))
  }



  render() {
    return <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Contacts" 
          component={contacts}
          options={{ headerShown: false,tabBarActiveTintColor: '#a41034', tabBarIcon: ({ focused}) => (
            <Ionicons          
              name={`people${focused ? "" : "-outline"}`}
              size={25}
            />
          )}}/>
          <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={
            {tabBarActiveTintColor: '#a41034',
            tabBarIcon: ({ focused}) => (
            <Ionicons
              name={`ios-options${focused ? "" : "-outline"}`}
              size={25}
            />
            )}
          }/>
        </Tab.Navigator>
      </NavigationContainer>
      </Provider>
  }
}
