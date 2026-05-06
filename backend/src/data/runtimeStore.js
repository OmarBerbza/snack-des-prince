const seedMenu = require('./seedMenu')

const runtimeMenu = seedMenu.map((item, index) => ({
  ...item,
  _id: `seed-${index + 1}`,
}))

const runtimeOrders = []

module.exports = { runtimeMenu, runtimeOrders }
