import React from "react"
import { StyleSheet, TextInput, View, Button, Text, KeyboardAvoidingView} from 'react-native';
import { fetchMovies } from "../api";
import MoviesFlatList from "../MoviesFlatList";
import Search from "../Search";


export default class MoviesListScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        headerTitle:"Movies"
    })
    

    state = {
        title:"",
        movies: null
    }

    
    changeTitle = title => {
        this.setState({title})
    } 
    
    fetchData = () => {    
        fetchMovies(this.state.title).then(result => this.setState({movies:result}))
    }

    
    render() {
      //
        return (   
          <View style={styles.container}>  
          <KeyboardAvoidingView behavior="padding" style={styles.search}>
              <Search onSearch={this.fetchData} changeTitle={this.changeTitle} title={this.state.title}/>
            </KeyboardAvoidingView>   
            {(this.state.movies ? <MoviesFlatList  {...this.state} onSelectMovie={movie => {
            this.props.navigation.navigate("MovieDetails", {...movie})
            }}/> : <View style={{alignItems: 'center',
            justifyContent: 'center'}}><Text >Please, search for movies</Text></View>)}
            
          </View>  

        );
      }

    }

    const styles = StyleSheet.create({
      container:{
        flex:1
      },
    })
