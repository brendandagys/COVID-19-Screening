import { Request } from 'express'
import User from './models'

export interface IRequest extends Request {
  user?: User
}

export interface IUser {
  _id: number
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  isAdministrator: boolean
  matchPassword: (enteredPassword: string) => Promise<boolean>
}

export interface IToken {
  id: string
}
