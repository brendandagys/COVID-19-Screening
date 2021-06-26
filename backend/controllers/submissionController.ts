import asyncHandler from 'express-async-handler'
import { Response } from 'express'
import { IRequest, ISubmission } from '../types'
import Submission from '../models/Submission'
import { sendEmail } from '../utils/sendEmail'

// @desc    Get today's answer
// @route   GET /api/submissions
// @access  Private
export const getSubmission = asyncHandler(
  async (req: IRequest, res: Response) => {
    const submission = await Submission.findOne({
      user: req.user._id,
      updatedAt: { $gte: new Date().setHours(0, 0, 0, 0) },
    })

    // console.log(new Date().setHours(0, 0, 0, 0))
    // console.log(submission?.updatedAt)

    if (submission) {
      res.json(submission)
    } else {
      res.status(404)
      throw new Error('You have not completed the screening today')
    }
  }
)

// @desc    Submit answers for today
// @route   POST /api/submissions
// @access  Private
export const submitSubmission = asyncHandler(
  async (req: IRequest, res: Response) => {
    const { answers, emailed } = req.body

    const submissionExists: ISubmission | null = await Submission.findOne({
      user: req.user._id,
      createdAt: { $gte: new Date() },
    })

    if (submissionExists) {
      res.status(400).json(submissionExists)
      return
    }

    const submission: ISubmission = await Submission.create({
      user: req.user._id,
      answers,
      emailed,
    })

    if (submission) {
      res.status(201).json(submission)
    } else {
      res.status(400)
      throw new Error('Unable to submit')
    }
  }
)

// @desc    Check for confirmation email
// @route   GET /api/submissions/email
// @access  Private
export const checkForConfirmationEmail = asyncHandler(
  async (req: IRequest, res: Response) => {
    const submission = await Submission.findOne({
      user: req.user._id,
      updatedAt: { $gte: new Date().setHours(0, 0, 0, 0) },
    })

    if (submission?.emailed) {
      res.json({ emailSent: true })
    } else {
      res.status(404)
      throw new Error('You have not sent an email confirmation today')
    }
  }
)

// @desc    Send confirmation email
// @route   POST /api/submissions/email
// @access  Private
export const sendConfirmationEmail = asyncHandler(
  async (req: IRequest, res: Response) => {
    const { to, color }: { to: string; color: string } = req.body

    const submission = await Submission.findOne({
      user: req.user._id,
      updatedAt: { $gte: new Date().setHours(0, 0, 0, 0) },
    })

    if (submission) {
      await sendEmail(to, color)
      submission.emailed = true
      await submission.save()
      res.status(201).json({ emailSent: true })
    } else {
      res.status(400)
      throw new Error('Could not send email. Please try again.')
    }
  }
)
