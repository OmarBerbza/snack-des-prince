const Order = require('../models/Order')
const mongoose = require('mongoose')
const { runtimeOrders } = require('../data/runtimeStore')

const createOrder = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const runtimeOrder = {
        ...req.body,
        _id: `runtime-order-${Date.now()}`,
        createdAt: new Date().toISOString(),
      }
      runtimeOrders.unshift(runtimeOrder)
      res.status(201).json({ message: 'Order created (runtime mode)', orderId: runtimeOrder._id })
      return
    }

    const order = await Order.create(req.body)
    res.status(201).json({ message: 'Order created', orderId: order._id })
  } catch (error) {
    next(error)
  }
}

const getOrders = async (_req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      res.json(runtimeOrders)
      return
    }

    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (error) {
    next(error)
  }
}

module.exports = { createOrder, getOrders }
