import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import {
  LoginRequestAction,
  LoginSuccessAction,
  LoginFailAction,
  RegisterRequestAction,
  RegisterSuccessAction,
  RegisterFailAction,
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
        payload: { userInfo: data },
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

export const logout = () => {
  localStorage.removeItem('userInfo')
  return { type: ActionType.LOGOUT }
}

export const register =
  (
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string
  ) =>
  async (
    dispatch: Dispatch<
      | RegisterRequestAction
      | RegisterSuccessAction
      | LoginSuccessAction
      | RegisterFailAction
    >
  ) => {
    try {
      dispatch({
        type: ActionType.REGISTER_REQUEST,
      })

      const config = {
        headers: { 'Content-Type': 'application/json' },
      }
      const { data } = await axios.post(
        '/api/users',
        { firstName, lastName, email, username, password },
        config
      )

      dispatch({
        type: ActionType.REGISTER_SUCCESS,
        payload: { userInfo: data },
      })

      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: { userInfo: data },
      })

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (e) {
      dispatch({
        type: ActionType.REGISTER_FAIL,
        payload: {
          error:
            e.response && e.response.data.message
              ? e.response.data.message
              : e.message,
        },
      })
    }
  }
