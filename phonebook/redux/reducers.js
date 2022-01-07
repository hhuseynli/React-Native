const {combineReducers} = require('redux')
import contacts from "../contacts"
import * as actions from "./actions"

const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state = [], action) => {
    if(action.type === actions.UPDATE_CONTACT) return [...state, action.payload]
    return state
}

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.UPDATE_USER:
            return merge(state, action.payload)
        case actions.LOG_IN_SUCCESS:
            console.log("success")
            return merge(state, {userLoggedIn:true})
        case actions.LOG_IN_FAIL:
            return merge(state, {loginErr: action.payload})
        default:
            return state
    }
    
}

export const reducer = combineReducers({
    user: userReducer,
    contacts: contactReducer
})