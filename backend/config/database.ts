import mongoose from 'mongoose'

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(<string>process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB connected: ${connection.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1) // 1 means exit with failure
  }
}

export default connectDatabase
