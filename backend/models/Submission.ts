import { Model, Schema, model } from 'mongoose'
import { ISubmission } from '../types'

const questionAnswerSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Question',
  },
  answer: {
    type: String,
    required: true,
  },
})

const submissionSchema = new Schema<ISubmission>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    answers: [questionAnswerSchema],
    emailed: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Submission: Model<ISubmission> = model('Submission', submissionSchema)

export default Submission
