import axios from 'axios'
import { UserInfoWithPassword } from '../reducers/userReducers'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import {
  LoginRequestAction,
  LoginSuccessAction,
  LoginFailAction,
  RegisterRequestAction,
  RegisterSuccessAction,
  RegisterFailAction,
  UserDetailsRequestAction,
  UserDetailsSuccessAction,
  UserDetailsFailAction,
  UserUpdateRequestAction,
  UserUpdateSuccessAction,
  UserUpdateFailAction,
  UserUpdateResetAction,
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
      | RegisterFailAction
      | LoginSuccessAction
      | UserUpdateResetAction
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

      dispatch({
        type: ActionType.USER_UPDATE_RESET,
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

export const getUserDetails =
  (id: string) =>
  async (
    dispatch: Dispatch<
      | UserDetailsRequestAction
      | UserDetailsSuccessAction
      | UserDetailsFailAction
    >,
    getState: any
  ) => {
    try {
      dispatch({
        type: ActionType.USER_DETAILS_REQUEST,
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
      const { data } = await axios.get(`/api/users/${id}`, config)

      dispatch({
        type: ActionType.USER_DETAILS_SUCCESS,
        payload: { userInfo: data },
      })
    } catch (e) {
      dispatch({
        type: ActionType.USER_DETAILS_FAIL,
        payload: {
          error:
            e.response && e.response.data.message
              ? e.response.data.message
              : e.message,
        },
      })
    }
  }

export const updateUser =
  (user: UserInfoWithPassword) =>
  async (
    dispatch: Dispatch<
      | UserDetailsSuccessAction
      | UserUpdateRequestAction
      | UserUpdateSuccessAction
      | UserUpdateFailAction
      | UserUpdateResetAction
    >,
    getState: any
  ) => {
    try {
      dispatch({
        type: ActionType.USER_UPDATE_REQUEST,
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
      const { data } = await axios.put('/api/users/profile', user, config)

      dispatch({
        type: ActionType.USER_UPDATE_SUCCESS,
        payload: { userInfo: data },
      })

      dispatch({
        type: ActionType.USER_DETAILS_SUCCESS,
        payload: { userInfo: data },
      })
    } catch (e) {
      dispatch({
        type: ActionType.USER_UPDATE_FAIL,
        payload: {
          error:
            e.response && e.response.data.message
              ? e.response.data.message
              : e.message,
        },
      })
    }
  }
