import mongoose from 'mongoose'

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI as string, {
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
