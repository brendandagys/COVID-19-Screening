import { ActionType } from '../action-types'
import { IQuestion, ISubmission } from '../../../../backend/types'

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

export interface QuestionsFetchRequestAction {
  type: ActionType.QUESTIONS_FETCH_REQUEST
}
export interface QuestionsFetchSuccessAction {
  type: ActionType.QUESTIONS_FETCH_SUCCESS
  payload: IQuestion[]
}
export interface QuestionsFetchFailAction {
  type: ActionType.QUESTIONS_FETCH_FAIL
  payload: { error: string }
}

export interface SubmissionFetchRequestAction {
  type: ActionType.SUBMISSION_FETCH_REQUEST
}
export interface SubmissionFetchSuccessAction {
  type: ActionType.SUBMISSION_FETCH_SUCCESS
  payload: ISubmission
}
export interface SubmissionFetchFailAction {
  type: ActionType.SUBMISSION_FETCH_FAIL
  payload: { error: string }
}
export interface SubmissionFetchResetAction {
  type: ActionType.SUBMISSION_FETCH_RESET
}
export interface SubmissionFetchFlagResetAction {
  type: ActionType.SUBMISSION_FETCH_FLAG_RESET
}

export interface SubmissionCreateRequestAction {
  type: ActionType.SUBMISSION_CREATE_REQUEST
}
export interface SubmissionCreateSuccessAction {
  type: ActionType.SUBMISSION_CREATE_SUCCESS
  payload: ISubmission
}
export interface SubmissionCreateFailAction {
  type: ActionType.SUBMISSION_CREATE_FAIL
  payload: { error: string }
}

export interface EmailFetchRequestAction {
  type: ActionType.EMAIL_FETCH_REQUEST
}
export interface EmailFetchSuccessAction {
  type: ActionType.EMAIL_FETCH_SUCCESS
  payload: boolean
}
export interface EmailFetchFailAction {
  type: ActionType.EMAIL_FETCH_FAIL
  payload: { error: string }
}

export interface EmailCreateRequestAction {
  type: ActionType.EMAIL_CREATE_REQUEST
}
export interface EmailCreateSuccessAction {
  type: ActionType.EMAIL_CREATE_SUCCESS
  payload: boolean
}
export interface EmailCreateFailAction {
  type: ActionType.EMAIL_CREATE_FAIL
  payload: { error: string }
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
  | QuestionsFetchRequestAction
  | QuestionsFetchSuccessAction
  | QuestionsFetchFailAction
  | SubmissionFetchRequestAction
  | SubmissionFetchSuccessAction
  | SubmissionFetchFailAction
  | SubmissionFetchResetAction
  | SubmissionFetchFlagResetAction
  | SubmissionCreateRequestAction
  | SubmissionCreateSuccessAction
  | SubmissionCreateFailAction
  | EmailFetchRequestAction
  | EmailFetchSuccessAction
  | EmailFetchFailAction
  | EmailCreateRequestAction
  | EmailCreateSuccessAction
  | EmailCreateFailAction
