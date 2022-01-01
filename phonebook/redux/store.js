const {createStore} = require('redux')
const { updateUser, addContact } = require('./actions')
const { reducer } = require('./reducers')


const store = createStore(reducer)
store.dispatch(addContact({name:"Jordan Hayashi", phone:"0123456252"}))
store.dispatch(addContact({name:"David J. Malan", phone:"0123453527"}))
store.dispatch(addContact({name:"Huseyn Huseynli", phone:"0123226789"}))
export default store
