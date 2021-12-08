import axios from 'axios'
import { Dispatch } from 'redux'
import { QuestionAnswer } from '../../../../backend/types'
import { ActionType } from '../action-types'
import {
  SubmissionFetchRequestAction,
  SubmissionFetchSuccessAction,
  SubmissionFetchFailAction,
  SubmissionCreateRequestAction,
  SubmissionCreateSuccessAction,
  SubmissionCreateFailAction,
  SubmissionFetchResetAction,
  SubmissionFetchFlagResetAction,
  EmailFetchRequestAction,
  EmailFetchSuccessAction,
  EmailFetchFailAction,
  EmailCreateRequestAction,
  EmailCreateSuccessAction,
  EmailCreateFailAction,
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
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await axios.get('/api/submissions', config)

      dispatch({
        type: ActionType.SUBMISSION_FETCH_SUCCESS,
        payload: data,
      })
    } catch (e: any) {
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

export const clearSubmission = () => {
  return { type: ActionType.SUBMISSION_FETCH_RESET }
}

export const createSubmission =
  (answers: QuestionAnswer[] | undefined, emailed: boolean) =>
  async (
    dispatch: Dispatch<
      | SubmissionCreateRequestAction
      | SubmissionCreateSuccessAction
      | SubmissionCreateFailAction
      | SubmissionFetchSuccessAction
      | SubmissionFetchResetAction
      | SubmissionFetchFlagResetAction
    >,
    getState: any
  ) => {
    try {
      const {
        submissionFetch: { userResetFlag },
      } = getState()

      if (userResetFlag) {
        dispatch({
          type: ActionType.SUBMISSION_FETCH_FLAG_RESET,
        })
      } else {
        dispatch({
          type: ActionType.SUBMISSION_CREATE_REQUEST,
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

        const { data } = await axios.post(
          '/api/submissions',
          { answers, emailed },
          config
        )

        dispatch({
          type: ActionType.SUBMISSION_CREATE_SUCCESS,
          payload: data,
        })

        dispatch({
          type: ActionType.SUBMISSION_FETCH_SUCCESS,
          payload: data,
        })
      }
    } catch (e: any) {
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

export const fetchEmail =
  () =>
  async (
    dispatch: Dispatch<
      EmailFetchRequestAction | EmailFetchSuccessAction | EmailFetchFailAction
    >,
    getState: any
  ) => {
    try {
      dispatch({
        type: ActionType.EMAIL_FETCH_REQUEST,
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
      const { data } = await axios.get('/api/submissions/email', config)

      dispatch({
        type: ActionType.EMAIL_FETCH_SUCCESS,
        payload: data.emailSent,
      })
    } catch (e: any) {
      dispatch({
        type: ActionType.EMAIL_FETCH_FAIL,
        payload: {
          error:
            e.response && e.response.data.message
              ? e.response.data.message
              : e.message,
        },
      })
    }
  }

export const createEmail =
  (to: string, color: string, fontColor: string, submitTimeStamp: string) =>
  async (
    dispatch: Dispatch<
      | EmailCreateRequestAction
      | EmailCreateSuccessAction
      | EmailCreateFailAction
      | EmailFetchSuccessAction
    >,
    getState: any
  ) => {
    try {
      dispatch({
        type: ActionType.EMAIL_CREATE_REQUEST,
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

      const { data } = await axios.post(
        '/api/submissions/email',
        { to, color, fontColor, submitTimeStamp },
        config
      )

      dispatch({
        type: ActionType.EMAIL_CREATE_SUCCESS,
        payload: data,
      })
    } catch (e: any) {
      dispatch({
        type: ActionType.EMAIL_CREATE_FAIL,
        payload: {
          error:
            e.response && e.response.data.message
              ? e.response.data.message
              : e.message,
        },
      })
    }
  }
