import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import {
  QuestionsFetchRequestAction,
  QuestionsFetchSuccessAction,
  QuestionsFetchFailAction,
} from '../actions'

export const getQuestions =
  () =>
  async (
    dispatch: Dispatch<
      | QuestionsFetchRequestAction
      | QuestionsFetchSuccessAction
      | QuestionsFetchFailAction
    >,
    getState: any
  ) => {
    try {
      dispatch({
        type: ActionType.QUESTIONS_FETCH_REQUEST,
      })

      const {
        authenticate: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await axios.get('/api/questions', config)

      dispatch({
        type: ActionType.QUESTIONS_FETCH_SUCCESS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: ActionType.QUESTIONS_FETCH_FAIL,
        payload: {
          error:
            e.response && e.response.data.message
              ? e.response.data.message
              : e.message,
        },
      })
    }
  }
