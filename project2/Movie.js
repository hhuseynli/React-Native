import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default class Movie extends React.Component{

    formatText = text => {
        if(text.length > 35){
            return text.slice(0, 35) + "..."
        }
        return text
    }
    render(){
        return (
            <TouchableOpacity onPress={() => this.props.onSelectMovie(this.props)}>
                <View style={styles.container}>
                    <Image
                     style={{ width:75, height:110}}
                    source={{
                        uri: this.props.Poster,
                      }}/>
                    <Text style={{color:"#515151"}} accessibilityLabel={this.props.Title}>{this.formatText(this.props.Title)}</Text>
                </View>
                
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F6F6F6",
        width:100,
        height:200,
        alignItems:"center",
        padding:10,
        margin:10,
        borderWidth:2,
        borderColor:"black",
        borderRadius:3
    }
})



