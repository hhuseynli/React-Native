import {createStore, applyMiddleware} from 'redux'
import { updateUser, addContact } from './actions'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import {reducer} from './reducers'
import contacts from '../contacts'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const thunk = store => next => action => {
    if (typeof action === "function"){
        action(store.dispatch)
    } else {
        next(action)
    }
}

export const store = createStore(persistedReducer, contacts, applyMiddleware(thunk))
export const persistor = persistStore(store)

export default store
