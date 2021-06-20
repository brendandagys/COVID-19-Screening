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
}

export type UserInfoWithPassword = {
  id: string
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  isAdministrator: boolean
}

export type LoginState = {
  loading?: boolean
  error?: string
  userInfo: UserInfo | null
}

export type RegisterState = {
  loading?: boolean
  error?: string
  userInfo: UserInfo | null
}

export type UserDetailsState = {
  loading?: boolean
  error?: string
  userInfo: UserInfo | null
}

export type UserUpdateState = {
  loading?: boolean
  error?: string
  userInfo: UserInfo | null
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
  state: RegisterState = { userInfo: null },
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

export const userDetailsReducer = (
  state: UserDetailsState = { userInfo: null },
  action: Action
): UserDetailsState => {
  switch (action.type) {
    case ActionType.USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case ActionType.USER_DETAILS_SUCCESS:
      return { userInfo: action.payload.userInfo }
    case ActionType.USER_DETAILS_FAIL:
      return { error: action.payload.error, userInfo: null }
    default:
      return state
  }
}

export const userUpdateReducer = (
  state: UserUpdateState = { userInfo: null },
  action: Action
): UserUpdateState => {
  switch (action.type) {
    case ActionType.USER_UPDATE_REQUEST:
      return { loading: true, userInfo: null }
    case ActionType.USER_UPDATE_SUCCESS:
      return { userInfo: action.payload.userInfo }
    case ActionType.USER_UPDATE_FAIL:
      return { error: action.payload.error, userInfo: null }
    case ActionType.USER_UPDATE_RESET:
      return { userInfo: null }
    default:
      return state
  }
}
