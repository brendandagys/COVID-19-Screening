import axios from 'axios'
import { Dispatch } from 'redux'
import { IQuestionAnswer } from '../../../../backend/types'
import { ActionType } from '../action-types'
import {
  SubmissionFetchRequestAction,
  SubmissionFetchSuccessAction,
  SubmissionFetchFailAction,
  SubmissionCreateRequestAction,
  SubmissionCreateSuccessAction,
  SubmissionCreateFailAction,
} from '../actions'

export const fetchSubmission =
  () =>
  async (
    dispatch: Dispatch<
      | SubmissionFetchRequestAction
      | SubmissionFetchSuccessAction
      | SubmissionFetchFailAction
    >,
    getState: any
  ) => {
    try {
      dispatch({
        type: ActionType.SUBMISSION_FETCH_REQUEST,
      })

      const {
        authenticate: { userInfo },
      } = getState()

      const config = {
        headers: { 'Content-Type': 'application/json' },
        Authorization: `Bearer ${userInfo.token}`,
      }
      const { data } = await axios.get('/api/submissions', config)

      dispatch({
        type: ActionType.SUBMISSION_FETCH_SUCCESS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: ActionType.SUBMISSION_FETCH_FAIL,
        payload: {
          error:
            e.response && e.response.data.message
              ? e.response.data.message
              : e.message,
        },
      })
    }
  }

export const createSubmission =
  (answers: IQuestionAnswer[], emailed: boolean) =>
  async (
    dispatch: Dispatch<
      | SubmissionCreateRequestAction
      | SubmissionCreateSuccessAction
      | SubmissionCreateFailAction
    >
  ) => {
    try {
      dispatch({
        type: ActionType.SUBMISSION_CREATE_REQUEST,
      })

      const config = {
        headers: { 'Content-Type': 'application/json' },
      }
      const { data } = await axios.post(
        '/api/submissions',
        { answers, emailed },
        config
      )

      dispatch({
        type: ActionType.SUBMISSION_CREATE_SUCCESS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: ActionType.SUBMISSION_CREATE_FAIL,
        payload: {
          error:
            e.response && e.response.data.message
              ? e.response.data.message
              : e.message,
        },
      })
    }
  }
