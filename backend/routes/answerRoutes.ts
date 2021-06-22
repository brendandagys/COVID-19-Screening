import express from 'express'
const router = express.Router()
import { getAnswer, submitAnswer } from '../controllers/answerController'
import { protect } from '../middleware/authMiddleware'

router.route('/').get(protect, getAnswer).post(protect, submitAnswer)

export default router
