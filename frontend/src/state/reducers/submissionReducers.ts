import { ActionType } from '../action-types'
import { Action } from '../actions'
import { ISubmission } from '../../../../backend/types'

export type SubmissionFetchState = {
  loading?: boolean
  error?: string
  submission: ISubmission | null
  userResetFlag?: boolean
}

export type SubmissionCreateState = {
  loading?: boolean
  error?: string
  submission: ISubmission | null
}

export type EmailFetchState = {
  loading?: boolean
  error?: string
}

export type EmailCreateState = {
  loading?: boolean
  error?: string
}

export const submissionFetchReducer = (
  state: SubmissionFetchState = { submission: null },
  action: Action
): SubmissionFetchState => {
  switch (action.type) {
    case ActionType.SUBMISSION_FETCH_REQUEST:
      return { ...state, loading: true, submission: null }
    case ActionType.SUBMISSION_FETCH_SUCCESS:
      return {
        ...state,
        error: undefined,
        loading: false,
        submission: action.payload,
      }
    case ActionType.SUBMISSION_FETCH_FAIL:
      return { error: action.payload.error, submission: null }
    case ActionType.SUBMISSION_FETCH_RESET:
      return { ...state, userResetFlag: true }
    case ActionType.SUBMISSION_FETCH_FLAG_RESET:
      return { ...state, userResetFlag: false }
    case ActionType.SUBMISSION_FETCH_FULL_RESET:
      return { submission: null }
    default:
      return state
  }
}

export const submissionCreateReducer = (
  state: SubmissionCreateState = { submission: null },
  action: Action
): SubmissionCreateState => {
  switch (action.type) {
    case ActionType.SUBMISSION_CREATE_REQUEST:
      return { ...state, loading: true }
    case ActionType.SUBMISSION_CREATE_SUCCESS:
      return { submission: action.payload }
    case ActionType.SUBMISSION_CREATE_FAIL:
      return { error: action.payload.error, submission: null }
    case ActionType.SUBMISSION_CREATE_RESET:
      return { submission: null }
    default:
      return state
  }
}

export const emailFetchReducer = (
  state: EmailFetchState = {},
  action: Action
): EmailFetchState => {
  switch (action.type) {
    case ActionType.EMAIL_FETCH_REQUEST:
      return { loading: true }
    case ActionType.EMAIL_FETCH_SUCCESS:
      return { loading: false }
    case ActionType.EMAIL_FETCH_FAIL:
      return { error: action.payload.error }
    case ActionType.EMAIL_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const emailCreateReducer = (
  state: EmailCreateState = {},
  action: Action
): EmailCreateState => {
  switch (action.type) {
    case ActionType.EMAIL_CREATE_REQUEST:
      return { loading: true }
    case ActionType.EMAIL_CREATE_SUCCESS:
      return { loading: false }
    case ActionType.EMAIL_CREATE_FAIL:
      return { error: action.payload.error }
    case ActionType.EMAIL_CREATE_RESET:
      return {}
    default:
      return state
  }
}
