import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import {
  LoginRequestAction,
  LoginSuccessAction,
  LoginFailAction,
} from '../actions'

export const login =
  (username: string, password: string) =>
  async (
    dispatch: Dispatch<
      LoginRequestAction | LoginSuccessAction | LoginFailAction
    >
  ) => {
    try {
      dispatch({
        type: ActionType.LOGIN_REQUEST,
      })

      const config = {
        headers: { 'Content-Type': 'application/json' },
      }
      const { data } = await axios.post(
        '/api/users/login',
        { username, password },
        config
      )

      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
      })

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (e) {
      dispatch({
        type: ActionType.LOGIN_FAIL,
        payload: {
          error:
            e.response && e.response.data.message
              ? e.response.data.message
              : e.message,
        },
      })
    }
  }
