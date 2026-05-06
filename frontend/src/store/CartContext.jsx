import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = (menuItem) => {
    setItems((current) => {
      const existing = current.find((item) => item._id === menuItem._id)
      if (existing) {
        return current.map((item) =>
          item._id === menuItem._id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { ...menuItem, quantity: 1 }]
    })
  }

  const updateQuantity = (_id, quantity) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item._id !== _id))
      return
    }
    setItems((current) => current.map((item) => (item._id === _id ? { ...item, quantity } : item)))
  }

  const removeItem = (_id) => {
    setItems((current) => current.filter((item) => item._id !== _id))
  }

  const clearCart = () => setItems([])

  const cartCount = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items],
  )
  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items],
  )

  return (
    <CartContext.Provider
      value={{ items, addToCart, updateQuantity, removeItem, clearCart, cartCount, subtotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}
