import { ActionType } from '../action-types'
import { Action } from '../actions'

interface UserLoginState {
  loading?: boolean
  error?: string
  userInfo?: {
    id: string
    firstName: string
    lastName: string
    email: string
    username: string
    isAdministrator: boolean
    token: string
  }
}

const authenticateReducer = (state: UserLoginState = {}, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return { loading: true }
    case ActionType.LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case ActionType.LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case ActionType.LOGOUT:
      return {}
  }
}

export default authenticateReducer
