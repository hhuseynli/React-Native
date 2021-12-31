import React from "react";
import { Dimensions, FlatList, View } from "react-native"
import Movie from "./Movie";

export default class MoviesFlatList extends React.Component{

    renderMovies = ({item}) =>  <Movie {...item} onSelectMovie={this.props.onSelectMovie}/>

    calculateColumns = () => {
        const windowWidth = Dimensions.get('window').width;
        return Math.floor(windowWidth / 125)
    }

    render(){
        return <FlatList 
        data={this.props.movies}
        renderItem={this.renderMovies}
        keyExtractor={item => item.imdbID}
        onSelectMovie = {this.props.onSelectMovie}
        horizontal={false}
        numColumns={this.calculateColumns()}
        />
    }
}

