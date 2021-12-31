import { Button, StyleSheet, TextInput, View } from "react-native";

const Search = props => {
    return (<View style={styles.container} >
    <TextInput placeholder='Title' style={styles.input} value={props.title} onChangeText={props.changeTitle}/>
    <Button title="Search" onPress={props.onSearch}/>
  </View>)
}

const styles = StyleSheet.create({
    container: {
      paddingTop:30,
      marginBottom: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#F6F6F6"
    },
    input:{
      borderWidth: 1,
      borderColor: 'black',
      minWidth: 100,
      minHeight:30,     
      borderRadius: 3,
    }
  });

export default Search;