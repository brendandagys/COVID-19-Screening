import { ActionType } from '../action-types'
import { Action } from '../actions'

export type UserInfo = {
  id: string
  firstName: string
  lastName: string
  email: string
  username: string
  isAdministrator: boolean
  token: string
} | null

export type UserLoginState = {
  loading?: boolean
  error?: string
  userInfo: UserInfo
}

const authenticateReducer = (
  state: UserLoginState = { userInfo: null },
  action: Action
): UserLoginState => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return { loading: true, userInfo: null }
    case ActionType.LOGIN_SUCCESS:
      return { userInfo: action.payload.userInfo }
    case ActionType.LOGIN_FAIL:
      return { error: action.payload.error, userInfo: null }
    case ActionType.LOGOUT:
      return { userInfo: null }
    default:
      return state
  }
}

export default authenticateReducer
