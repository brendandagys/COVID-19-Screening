import express from 'express'
const router = express.Router()
import {
  authenticateUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController'
import { protect } from '../middleware/authMiddleware'

router.route('/').post(registerUser)
router.post('/login', authenticateUser)
router.route('/profile').get(protect, getUserProfile)

export default router
