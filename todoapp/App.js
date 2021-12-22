import React from 'react';
import {View, Button, Text, ScrollView, SafeAreaView, StyleSheet, Switch} from 'react-native';
let id = 0

const styles = StyleSheet.create({
  TodoContainer:{flexDirection:'row', alignItems:'center'},
  Fill:{flex:1}
})

const Todo = props => (
  <View style={styles.TodoContainer}>  
    <Switch value={props.todo.checked} onValueChange={props.onToggle} />
    <Button onPress={props.onDelete} title="delete"/>
    <Text>{props.todo.text}</Text>
  </View>
)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    id++;
    const text = `TODO Number ${id}`
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id, text: text, checked: false},
      ], 
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.Fill}>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</Text>
        <Button onPress={() => this.addTodo()} title="add TODO"/>
        <ScrollView style={styles.Fill}>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

