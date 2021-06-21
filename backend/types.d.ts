import { Request } from 'express'
import { Document } from 'mongoose'
import User from './models'

export interface IRequest extends Request {
  user?: User
}

export interface IUser extends Document {
  _id: string
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  isAdministrator: boolean
  matchPassword: (enteredPassword: string) => Promise<boolean>
}

export interface IQuestion extends Document {
  _id: string
  question: string
  type: 'yes/no' | 'multiple' | 'slider'
  answerOptions: string[] | null
}

export interface IToken {
  id: string
}
