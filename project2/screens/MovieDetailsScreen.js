import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

export default class MovieDetailsScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        headerTitle: ` ${navigation.getParam("Type")[0].toUpperCase()}${navigation.getParam("Type").slice(1)}: ${navigation.getParam("Title")} `
    })

    render() {
        return (
            <View style={styles.container}>
                <Image
                 style={styles.image}
                source={{ uri: this.props.navigation.getParam("Poster") }}/>
                <Text style={styles.text}>Release Date: {this.props.navigation.getParam("Year")}</Text>
                <Text style={styles.text}>IMDB ID: {this.props.navigation.getParam("imdbID")}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F6F6F6",
        padding:10,
        margin:10,
    },
    text:{
        fontSize:18
    },
    image: {
        width:225,
        height:330
    }
})