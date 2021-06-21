import { Model, Schema, model } from 'mongoose'
import { IQuestion } from '../types'

const questionSchema = new Schema<IQuestion>(
  {
    question: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    answerOptions: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
)

const Question: Model<IQuestion> = model('Question', questionSchema)

export default Question
