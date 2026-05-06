require('dotenv').config()
const app = require('./app')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000

async function startServer() {
  try {
    await connectDB()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`MongoDB unavailable, running in runtime mode: ${error.message}`)
  }

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${PORT}`)
  })
}

startServer()
