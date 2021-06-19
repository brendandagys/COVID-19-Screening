import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { UserInfo } from './reducers/userReducers'

const userInfoStringFromStorage = localStorage.getItem('userInfo')

const userInfoFromStorage: UserInfo = userInfoStringFromStorage
  ? JSON.parse(userInfoStringFromStorage)
  : {}

const initialState = {
  authenticate: { userInfo: userInfoFromStorage },
}

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
