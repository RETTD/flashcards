// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import cards from './cards-reducer'

export default combineReducers({
    cards,
    // Here you can registering another reducers.
})
