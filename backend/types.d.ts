import { Request } from 'express'
import { Document, ObjectId } from 'mongoose'
import User from './models'

export interface IRequest extends Request {
  user?: User
}

export interface IUser extends Document {
  _id: ObjectId
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  isAdministrator: boolean
  matchPassword: (enteredPassword: string) => Promise<boolean>
}

export interface IQuestion extends Document {
  _id: ObjectId
  question: string
  type: 'yes/no' | 'multiple' | 'slider'
  answerOptions: string[] | null
}

export interface IQuestionAnswer extends Document {
  question: ObjectId
  answer: string
}

export interface QuestionAnswer {
  question: ObjectId
  answer: string
}

export interface ISubmission extends Document {
  _id: ObjectId
  user: ObjectId
  answers: IQuestionAnswer[]
  emailed: boolean
}

export interface IToken {
  id: string
}
