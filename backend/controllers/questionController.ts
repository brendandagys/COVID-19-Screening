import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import Question from '../models/Question'

// @desc    Get all questions
// @route   GET /api/questions
// @access  Private
export const getQuestions = asyncHandler(
  async (req: Request, res: Response) => {
    const questions = await Question.find()

    if (questions) {
      res.json(questions)
    } else {
      res.status(404)
      throw new Error('No questions found')
    }
  }
)
