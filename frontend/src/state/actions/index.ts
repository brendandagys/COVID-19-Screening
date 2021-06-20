import { ActionType } from '../action-types'

export interface LoginRequestAction {
  type: ActionType.LOGIN_REQUEST
}
export interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS
  payload: {
    userInfo: {
      id: string
      firstName: string
      lastName: string
      email: string
      username: string
      isAdministrator: boolean
      token: string
    }
  }
}
export interface LoginFailAction {
  type: ActionType.LOGIN_FAIL
  payload: { error: string }
}
export interface LogoutAction {
  type: ActionType.LOGOUT
}

export interface RegisterRequestAction {
  type: ActionType.REGISTER_REQUEST
}
export interface RegisterSuccessAction {
  type: ActionType.REGISTER_SUCCESS
  payload: {
    userInfo: {
      id: string
      firstName: string
      lastName: string
      email: string
      username: string
      isAdministrator: boolean
      token: string
    }
  }
}
export interface RegisterFailAction {
  type: ActionType.REGISTER_FAIL
  payload: { error: string }
}

export interface UserDetailsRequestAction {
  type: ActionType.USER_DETAILS_REQUEST
}
export interface UserDetailsSuccessAction {
  type: ActionType.USER_DETAILS_SUCCESS
  payload: {
    userInfo: {
      id: string
      firstName: string
      lastName: string
      email: string
      username: string
      isAdministrator: boolean
      token: string
    }
  }
}
export interface UserDetailsFailAction {
  type: ActionType.USER_DETAILS_FAIL
  payload: { error: string }
}

export interface UserUpdateRequestAction {
  type: ActionType.USER_UPDATE_REQUEST
}
export interface UserUpdateSuccessAction {
  type: ActionType.USER_UPDATE_SUCCESS
  payload: {
    userInfo: {
      id: string
      firstName: string
      lastName: string
      email: string
      username: string
      isAdministrator: boolean
      token: string
    }
  }
}
export interface UserUpdateFailAction {
  type: ActionType.USER_UPDATE_FAIL
  payload: { error: string }
}
export interface UserUpdateResetAction {
  type: ActionType.USER_UPDATE_RESET
}

export type Action =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailAction
  | UserDetailsRequestAction
  | UserDetailsSuccessAction
  | UserDetailsFailAction
  | UserUpdateRequestAction
  | UserUpdateSuccessAction
  | UserUpdateFailAction
  | UserUpdateResetAction
