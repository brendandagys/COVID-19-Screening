import { combineReducers } from 'redux'
import {
  authenticateReducer,
  registerReducer,
  userDetailsReducer,
  userUpdateReducer,
} from './userReducers'

const reducers = combineReducers({
  authenticate: authenticateReducer,
  registration: registerReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
})

export default reducers

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>
