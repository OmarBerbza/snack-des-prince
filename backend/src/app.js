const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message: 'Snack des princes API running' })
})

app.use('/api', routes)

app.use((error, _req, res, _next) => {
  res.status(500).json({ message: error.message || 'Server error' })
})

module.exports = app
