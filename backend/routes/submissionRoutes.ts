import express from 'express'
const router = express.Router()
import {
  getSubmission,
  submitSubmission,
} from '../controllers/submissionController'
import { protect } from '../middleware/authMiddleware'

router.route('/').get(protect, getSubmission).post(protect, submitSubmission)

export default router
