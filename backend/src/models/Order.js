const mongoose = require('mongoose')

const orderItemSchema = new mongoose.Schema(
  {
    menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true },
  },
  { _id: false },
)

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    paymentMethod: { type: String, default: 'Cash on delivery' },
    items: { type: [orderItemSchema], required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Order', orderSchema)
