import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddContactScreen from './AddContactScreen';
import ContactListScreen from './ContactListScreen'
import ContactDetailsScreen from './ContactDetailsScreen';
import SettingsScreen from './SettingsScreen';

import Ionicons from "react-native-vector-icons/Ionicons";
import LoginScreen from './LoginScreen';

import { connect } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import React from 'react';

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
function mainNav() {
  return (<Tab.Navigator>
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
  </Tab.Navigator>)
}

const AppNav = createNativeStackNavigator()
class MainNavigator extends React.Component {
    render() {
        return <NavigationContainer>
        <AppNav.Navigator> 
        {( !this.props.userLoggedIn ?                  
          <AppNav.Screen name="Main" component={mainNav} options={{ headerShown: false}}/>
        :
          <AppNav.Screen name="Login" component={LoginScreen}/>
      )}
      </AppNav.Navigator> 
      </NavigationContainer>
  }
}

 export default connect(state => ({userLoggedIn:state.userLoggedIn}))(MainNavigator)