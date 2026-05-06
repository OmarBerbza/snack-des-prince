const express = require('express')
const { getMenu } = require('../controllers/menuController')
const { createOrder, getOrders } = require('../controllers/orderController')

const router = express.Router()

router.get('/menu', getMenu)
router.post('/order', createOrder)
router.get('/orders', getOrders)

module.exports = router
