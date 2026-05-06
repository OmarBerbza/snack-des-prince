const mongoose = require('mongoose')

async function connectDB() {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/snack_des_princes'
  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 4000,
  })
}

module.exports = connectDB
