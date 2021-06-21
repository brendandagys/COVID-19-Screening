import { ActionType } from '../action-types'
import { Action } from '../actions'
import { IQuestion } from '../../../../backend/types'

export type QuestionsFetchState = {
  loading?: boolean
  error?: string
  questions: IQuestion[] | null
}

export const questionsFetchReducer = (
  state: QuestionsFetchState = { questions: null },
  action: Action
): QuestionsFetchState => {
  switch (action.type) {
    case ActionType.QUESTIONS_FETCH_REQUEST:
      return { ...state, loading: true }
    case ActionType.QUESTIONS_FETCH_SUCCESS:
      return { questions: action.payload }
    case ActionType.QUESTIONS_FETCH_FAIL:
      return { error: action.payload.error, questions: null }
    default:
      return state
  }
}
