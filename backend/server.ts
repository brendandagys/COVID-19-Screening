import express from 'express'

import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
// dotenv.config({ path: __dirname + '/../.env' })
// dotenv.config({ path: __dirname + (process.env.ENVPATH ?? '/.env') })

import { notFoundHandler, errorHandler } from './middleware/errorMiddleware'

import userRoutes from './routes/userRoutes'
import questionRoutes from './routes/questionRoutes'
import submissionRoutes from './routes/submissionRoutes'

import connectDatabase from './config/database'
connectDatabase()

const ORIGIN = process.env.ORIGIN ?? 'http://localhost:3002'
const PORT = process.env.PORT ?? 80

const app = express()

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': ORIGIN,
    Vary: 'Origin',
  })
  next()
})

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/questions', questionRoutes)
app.use('/api/submissions', submissionRoutes)

app.get('/api/health', (req, res) => {
  res.send('API server for Screening App is healthy!')
})

app.get('*', (req, res) => {
  res.send(
    `API server for Screening App running in ${process.env.NODE_ENV} on port ${PORT}...`
  )
})

// if (process.env.NODE_ENV === 'production') {
//   // Express will serve up production assets like our main.js or main.css file
//   app.use(express.static(path.join(process.cwd(), 'frontend', 'build')))

//   // Express will serve up the index.html file if it doesn't recognize the route
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(process.cwd(), 'frontend', 'build', 'index.html'))
//   })
// } else {
//   app.get('/', (req, res) => {
//     res.send('API server is running...')
//   })
// }

// Custom error middleware
app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT, () =>
  console.log(
    `API server for Screening running in ${process.env.NODE_ENV} on port ${PORT}...`
  )
)
