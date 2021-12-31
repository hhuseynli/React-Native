import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import MoviesListScreen from './screens/MoviesListScreen';

const AppNavigator = createStackNavigator(
  {
    MoviesList: MoviesListScreen,
    MovieDetails: MovieDetailsScreen
  },
  {
    initialRouteName:"MoviesList"
  }
)

const Navigator = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return <Navigator/>
  }
}


