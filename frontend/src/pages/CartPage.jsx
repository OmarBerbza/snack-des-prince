import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { createOrder } from '../api/api.js'
import { useCart } from '../store/CartContext.jsx'

const initialForm = {
  customerName: '',
  phone: '',
  address: '',
  paymentMethod: 'Cash on delivery',
}

function CartPage() {
  const { t } = useTranslation()
  const { items, updateQuantity, removeItem, subtotal, clearCart } = useCart()
  const [form, setForm] = useState(initialForm)
  const [statusKey, setStatusKey] = useState('')
  const translateItem = (item) => ({
    ...item,
    name: t(`menu.items.${item.key}.name`, { defaultValue: item.name }),
  })
  const translatedItems = items.map(translateItem)
  const whatsappMessage = encodeURIComponent(
    `${t('cartPage.messagePrefix')} ${translatedItems
      .map((item) => `${item.name} x${item.quantity}`)
      .join(', ')}`,
  )

  const submitOrder = async (event) => {
    event.preventDefault()
    if (!items.length) {
      setStatusKey('emptyStatus')
      return
    }
    await createOrder({
      ...form,
      paymentMethod: t('cartPage.payment'),
      items: translatedItems.map((item) => ({
        menuItemId: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: subtotal,
    })
    setStatusKey('success')
    clearCart()
    setForm(initialForm)
  }

  return (
    <div className="contact-page">
      <div className="menu-hero">
        <h1>
          {t('cartPage.titleA')} <span>{t('cartPage.titleB')}</span>
        </h1>
      </div>
      <div className="contact-grid container">
        <section className="contact-form">
          <h2 className="section-title">{t('cartPage.items')}</h2>
          {translatedItems.length === 0 ? (
            <p className="mt-4 text-slate-600">
              {t('cartPage.empty')}{' '}
              <Link to="/menu" className="font-semibold text-orange-600">
                {t('cartPage.seeMenu')}
              </Link>
            </p>
          ) : (
            <div className="mt-4 space-y-4">
              {translatedItems.map((item) => (
                <article key={item._id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-slate-600">
                      {item.price} {t('common.currency')}
                    </p>
                  </div>
                  <div className="cart-item-controls">
                    <button type="button" className="qty-btn" onClick={() => updateQuantity(item._id, item.quantity - 1)}>
                      -
                    </button>
                    <span className="qty-num">{item.quantity}</span>
                    <button type="button" className="qty-btn" onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                      +
                    </button>
                    <button type="button" className="qty-btn" onClick={() => removeItem(item._id)}>
                      x
                    </button>
                  </div>
                </article>
              ))}
              <div className="cart-total">
                <span>{t('common.total')}</span>
                <strong>
                  {subtotal} {t('common.currency')}
                </strong>
              </div>
            </div>
          )}
        </section>

        <section className="contact-form">
          <h2 className="section-title">{t('cartPage.checkout')}</h2>
          <form className="mt-4 space-y-3" onSubmit={submitOrder}>
            <input
              required
              value={form.customerName}
              onChange={(event) => setForm({ ...form, customerName: event.target.value })}
              className="form-field"
              placeholder={t('cartPage.fullName')}
            />
            <input
              required
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              className="form-field"
              placeholder={t('cartPage.phone')}
            />
            <textarea
              required
              value={form.address}
              onChange={(event) => setForm({ ...form, address: event.target.value })}
              className="form-field h-24"
              placeholder={t('cartPage.address')}
            />
            <input readOnly value={t('cartPage.payment')} className="form-field" />
            <button type="submit" className="checkout-btn">
              {t('cartPage.confirm')}
            </button>
            {!!items.length && (
              <a
                className="block w-full rounded-full bg-green-600 py-3 text-center font-bold text-white hover:bg-green-700"
                href={`https://wa.me/212603083335?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                {t('cartPage.whatsapp')}
              </a>
            )}
            {statusKey && <p className="text-sm text-green-700">{t(`cartPage.${statusKey}`)}</p>}
          </form>
        </section>
      </div>
    </div>
  )
}

export default CartPage
