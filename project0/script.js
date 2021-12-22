const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let id = 0
let todos = []

function renderTodo(id){
  console.log(id)
  const li = document.createElement('li')
  li.className = classNames.TODO_ITEM
  li.innerHTML = ` 
  <input type="checkbox" ${todos[id].checked ? "checked": ""}
  class="${classNames.TODO_CHECKBOX}"  onchange="changeSelection(${id})"/> 
  <span class="${classNames.TODO_TEXT}">
  ${todos[id].text}</span> 
  
  `
  //<button class=${classNames.TODO_DELETE} onclick="deleteTodo(${todos[id]})"/>Delete Todo</button>
  return li
}

function render(){
  list.innerHTML = ""
  itemCountSpan.innerHTML = todos.length
  uncheckedCountSpan.innerHTML = todos.filter(todo => !todo.checked).length
  todos.map((todo, index) => renderTodo(index)).forEach(todo => {list.appendChild(todo)})
}

function newTodo() {
  const text = prompt("Enter your todo")
  todos.push({id:id++, text:text, checked:false}) 
  return render()
}

function changeSelection(id) {
  todos[id].checked = !todos[id].checked
  return render()
}

// function deleteTodo(todo) {
//   todos = todos.filter(t => t !== todo)
//   return render()
// }

