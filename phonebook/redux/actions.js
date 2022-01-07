import { login } from "../api"

export const UPDATE_USER = "UPDATE_USER"
export const UPDATE_CONTACT = "UPDATE_CONTACT"
export const LOG_IN_SENT = "LOG_IN_SENT"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAIL = "LOG_IN_FAIL"

export const updateUser = update => ({
    type: UPDATE_USER,
    payload: update
})

export const addContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
})

export const loginUser = (username, password) => dispatch => {
    dispatch({type: LOG_IN_SENT})
    login(username, password).then(() => {
        dispatch({type:LOG_IN_SUCCESS})
    }).catch((err) => {
        dispatch({type:LOG_IN_FAIL, payload:err.message})
    })
}


