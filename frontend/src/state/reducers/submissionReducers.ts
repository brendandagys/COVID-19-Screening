import { ActionType } from '../action-types'
import { Action } from '../actions'
import { IQuestionAnswer } from '../../../../backend/types'

export type SubmissionFetchState = {
  loading?: boolean
  error?: string
  submission: IQuestionAnswer | null
}

export type SubmissionCreateState = {
  loading?: boolean
  error?: string
  submission: IQuestionAnswer | null
}

export const submissionFetchReducer = (
  state: SubmissionFetchState = { submission: null },
  action: Action
): SubmissionFetchState => {
  switch (action.type) {
    case ActionType.SUBMISSION_FETCH_REQUEST:
      return { loading: true, submission: null }
    case ActionType.SUBMISSION_FETCH_SUCCESS:
      return { submission: action.payload }
    case ActionType.SUBMISSION_FETCH_FAIL:
      return { error: action.payload.error, submission: null }
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
    default:
      return state
  }
}
