import jwt from 'jsonwebtoken'
import User from '../models/User'
import expressAsyncHandler from 'express-async-handler'
import { Response, NextFunction } from 'express'
import { IRequest, IToken } from '../types'

export const protect = expressAsyncHandler(
  async (req: IRequest, res: Response, next: NextFunction) => {
    let token

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET ?? 'fjdkeeijfd'
        ) as IToken

        req.user = await User.findById(decoded.id).select('-password')

        next()
      } catch (e) {
        console.error(e)
        res.status(401)
        throw new Error('Not authorized, invalid token')
      }
    }

    if (!token) {
      res.status(401)
      throw new Error('Not authorized, no token')
    }
  }
)
