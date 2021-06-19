import { ActionType } from '../action-types'
import { Action } from '../actions'

export type UserInfo =
  | {
      id: string
      firstName: string
      lastName: string
      email: string
      username: string
      isAdministrator: boolean
      token: string
    }
  | {}

export type UserLoginState = {
  loading?: boolean
  error?: string
  userInfo: UserInfo
}

const authenticateReducer = (
  state: UserLoginState = { userInfo: {} },
  action: Action
): UserLoginState => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return { loading: true, userInfo: {} }
    case ActionType.LOGIN_SUCCESS:
      return { userInfo: action.payload.userInfo }
    case ActionType.LOGIN_FAIL:
      return { error: action.payload.error, userInfo: {} }
    case ActionType.LOGOUT:
      return { userInfo: {} }
    default:
      return state
  }
}

export default authenticateReducer
