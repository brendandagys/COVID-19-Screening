import { combineReducers } from 'redux'
import authenticateReducer from './userReducers'

const reducers = combineReducers({ authenticate: authenticateReducer })

export default reducers

export type RootState = ReturnType<typeof reducers>
