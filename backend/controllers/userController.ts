import asyncHandler from 'express-async-handler'
import { Response } from 'express'
import { IRequest, IUser } from '../types'
import User from '../models/User'
import generateToken from '../utils/generateJWT'

// @desc    Authenticate user and get JWT
// @route   POST /api/users/login
// @access  Public
const authenticateUser = asyncHandler(async (req: IRequest, res: Response) => {
  const { username, password } = req.body

  const user: IUser | null = await User.findOne({
    username,
  })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      isAdministrator: user.isAdministrator,
      token: generateToken(user._id.toString()),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req: IRequest, res: Response) => {
  const { firstName, lastName, email, username, password } = req.body

  const usernameExists: IUser | null = await User.findOne({
    username,
  })

  const emailExists: IUser | null = await User.findOne({ email })

  if (usernameExists) {
    res.status(400)
    throw new Error('Username is already in use')
  } else if (emailExists) {
    res.status(400)
    throw new Error('Email is already in use')
  }

  const user: IUser = await User.create({
    firstName,
    lastName,
    email,
    username,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      isAdministrator: user.isAdministrator,
      token: generateToken(user._id.toString()),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req: IRequest, res: Response) => {
  const user: IUser | null = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      isAdministrator: user.isAdministrator,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req: IRequest, res: Response) => {
  const user: IUser | null = await User.findById(req.user._id)

  if (user) {
    user.firstName = req.body.firstName ?? user.firstName
    user.lastName = req.body.lastName ?? user.lastName
    user.email = req.body.email ?? user.email
    user.username = req.body.username ?? user.username

    if (req.body.password) {
      user.password = req.body.password
    }

    user.isAdministrator = req.body.username ?? user.isAdministrator

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      username: updatedUser.username,
      isAdministrator: updatedUser.isAdministrator,
      token: generateToken(user._id.toString()),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { authenticateUser, registerUser, getUserProfile, updateUserProfile }
