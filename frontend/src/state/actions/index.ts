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

export type Action =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailAction
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailAction
  | LogoutAction
