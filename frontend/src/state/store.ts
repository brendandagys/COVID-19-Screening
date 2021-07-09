import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { UserInfo } from './reducers/userReducers'

const userInfoStringFromStorage = localStorage.getItem('userInfo')

// Coerce the null returned from .getItem() into {}
const userInfoFromStorage: UserInfo = userInfoStringFromStorage
  ? JSON.parse(userInfoStringFromStorage)
  : null

const initialState = {
  authenticate: { userInfo: userInfoFromStorage },
}

export const initializeStore = () =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )

const store = initializeStore()

export default store
