import { combineReducers } from 'redux'
import { authenticateReducer, registerReducer } from './userReducers'

const reducers = combineReducers({
  authenticate: authenticateReducer,
  registration: registerReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
