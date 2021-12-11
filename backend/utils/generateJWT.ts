import jwt from 'jsonwebtoken'

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_SCREENING as string, {
    expiresIn: '30d',
  })
}

export default generateToken
