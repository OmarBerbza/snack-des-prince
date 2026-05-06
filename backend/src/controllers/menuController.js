const MenuItem = require('../models/MenuItem')
const mongoose = require('mongoose')
const seedMenu = require('../data/seedMenu')
const { runtimeMenu } = require('../data/runtimeStore')

const getMenu = async (_req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      res.json(runtimeMenu)
      return
    }

    let items = await MenuItem.find().sort({ createdAt: -1 })
    if (!items.length) {
      await MenuItem.insertMany(seedMenu)
      items = await MenuItem.find().sort({ createdAt: -1 })
    }
    res.json(items)
  } catch (error) {
    next(error)
  }
}

module.exports = { getMenu }
