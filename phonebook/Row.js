import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native';


const Row = props => (
        (<TouchableOpacity style={styles.contactContainer} onPress={()=>{props.onSelectContact(props)}}>
            <Text>{props.name}</Text>
            <Text>{props.phone}</Text>
        </TouchableOpacity>)
    )

const styles = StyleSheet.create({
    contactContainer: {
        paddingBottom: 10
    }
    
})

export default Row


