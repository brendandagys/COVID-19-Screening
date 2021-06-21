import express from 'express'
const router = express.Router()
import { getQuestions } from '../controllers/questionController'
import { protect } from '../middleware/authMiddleware'

router.route('/').get(protect, getQuestions)

export default router
