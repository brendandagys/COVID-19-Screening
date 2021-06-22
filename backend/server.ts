import express from 'express'
import path from 'path'
import { notFoundHandler, errorHandler } from './middleware/errorMiddleware'

import userRoutes from './routes/userRoutes'
import questionRoutes from './routes/questionRoutes'
import submissionRoutes from './routes/submissionRoutes'

import dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/../.env' })

import connectDatabase from './config/database'
connectDatabase()

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/questions', questionRoutes)
app.use('/api/submissions', submissionRoutes)

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like our main.js or main.css file
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  // Express will serve up the index.html file if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('Server is running...')
  })
}

// Custom error middleware
app.use(notFoundHandler)
app.use(errorHandler)

const PORT = process.env.PORT ?? 5000

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}...`)
)
