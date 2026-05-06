import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createOrder } from '../api/api.js'
import { useCart } from '../store/CartContext.jsx'

const initialForm = {
  customerName: '',
  phone: '',
  address: '',
  paymentMethod: 'Cash on delivery',
}

function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, clearCart } = useCart()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')
  const whatsappMessage = encodeURIComponent(
    `Hello Snack des princes, I want to order: ${items
      .map((item) => `${item.name} x${item.quantity}`)
      .join(', ')}`,
  )

  const submitOrder = async (event) => {
    event.preventDefault()
    if (!items.length) {
      setStatus('Cart is empty.')
      return
    }
    await createOrder({
      ...form,
      items: items.map((item) => ({
        menuItemId: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: subtotal,
    })
    setStatus('Order placed successfully! We will contact you soon.')
    clearCart()
    setForm(initialForm)
  }

  return (
    <div className="contact-page">
      <div className="menu-hero">
        <h1>Mon <span>Panier</span> 🛒</h1>
      </div>
      <div className="contact-grid container">
      <section className="contact-form">
        <h2 className="section-title">Vos articles</h2>
        {items.length === 0 ? (
          <p className="mt-4 text-slate-600">
            Panier vide. <Link to="/menu" className="font-semibold text-orange-600">Voir menu</Link>
          </p>
        ) : (
          <div className="mt-4 space-y-4">
            {items.map((item) => (
              <article key={item._id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-slate-600">{item.price} MAD</p>
                </div>
                <div className="cart-item-controls">
                  <button type="button" className="qty-btn" onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
                  <span className="qty-num">{item.quantity}</span>
                  <button type="button" className="qty-btn" onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                  <button type="button" className="qty-btn" onClick={() => removeItem(item._id)}>x</button>
                </div>
              </article>
            ))}
            <div className="cart-total"><span>Total</span><strong>{subtotal} MAD</strong></div>
          </div>
        )}
      </section>

      <section className="contact-form">
        <h2 className="section-title">Checkout</h2>
        <form className="mt-4 space-y-3" onSubmit={submitOrder}>
          <input
            required
            value={form.customerName}
            onChange={(event) => setForm({ ...form, customerName: event.target.value })}
            className="form-field"
            placeholder="Full name"
          />
          <input
            required
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="form-field"
            placeholder="Phone"
          />
          <textarea
            required
            value={form.address}
            onChange={(event) => setForm({ ...form, address: event.target.value })}
            className="form-field h-24"
            placeholder="Delivery address"
          />
          <input
            readOnly
            value={form.paymentMethod}
            className="form-field"
          />
          <button type="submit" className="checkout-btn">
            Confirm Order (Cash on delivery)
          </button>
          {!!items.length && (
            <a
              className="block w-full rounded-full bg-green-600 py-3 text-center font-bold text-white hover:bg-green-700"
              href={`https://wa.me/212603083335?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              Order on WhatsApp
            </a>
          )}
          {status && <p className="text-sm text-green-700">{status}</p>}
        </form>
      </section>
      </div>
    </div>
  )
}

export default CartPage
