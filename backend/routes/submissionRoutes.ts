import express from 'express'
const router = express.Router()
import {
  checkForConfirmationEmail,
  getSubmission,
  sendConfirmationEmail,
  submitSubmission,
} from '../controllers/submissionController'
import { protect } from '../middleware/authMiddleware'

router.route('/').get(protect, getSubmission).post(protect, submitSubmission)
router
  .route('/email')
  .get(protect, checkForConfirmationEmail)
  .post(protect, sendConfirmationEmail)

export default router
