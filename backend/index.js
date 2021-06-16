import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

const __dirname = path.resolve()

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

const port = process.env.PORT ?? 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${provess.env.NODE_ENV} on port ${PORT}...`.yellow.bold
  )
)
