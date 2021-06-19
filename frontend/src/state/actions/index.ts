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

export type Action =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
