const {combineReducers} = require('redux')
const { UPDATE_CONTACT, UPDATE_USER } = require('./actions')

const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state = [], action) => {
    if(action.type === UPDATE_CONTACT) return [...state, action.payload]
    return state
}

const userReducer = (state = {}, action) => {
    if(action.type === UPDATE_USER) return merge(state, action.payload)
    return state
}

export const reducer = combineReducers({
    user: userReducer,
    contacts: contactReducer
})