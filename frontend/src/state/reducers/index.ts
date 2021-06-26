import { combineReducers } from 'redux'
import { questionsFetchReducer } from './questionReducers'
import {
  submissionFetchReducer,
  submissionCreateReducer,
  emailFetchReducer,
  emailCreateReducer,
} from './submissionReducers'
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
  questionsFetch: questionsFetchReducer,
  submissionFetch: submissionFetchReducer,
  submissionCreate: submissionCreateReducer,
  emailFetch: emailFetchReducer,
  emailCreate: emailCreateReducer,
})

export default reducers

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>
