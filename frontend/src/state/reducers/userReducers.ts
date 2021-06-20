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

export type LoginState = {
  loading?: boolean
  error?: string
  userInfo: UserInfo
}

export type RegisterState = {
  loading?: boolean
  error?: string
  userInfo: UserInfo
}

export const authenticateReducer = (
  state: LoginState = { userInfo: null },
  action: Action
): LoginState => {
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

export const registerReducer = (
  state = { userInfo: null },
  action: Action
): RegisterState => {
  switch (action.type) {
    case ActionType.REGISTER_REQUEST:
      return { loading: true, userInfo: null }
    case ActionType.REGISTER_SUCCESS:
      return { userInfo: action.payload.userInfo }
    case ActionType.REGISTER_FAIL:
      return { error: action.payload.error, userInfo: null }
    default:
      return state
  }
}
