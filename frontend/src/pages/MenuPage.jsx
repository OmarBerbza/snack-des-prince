import { useMemo, useState } from 'react'
import { useQuery } from './useQuery.js'
import { useCart } from '../store/CartContext.jsx'

function MenuPage() {
  const { data: menu = [], loading, error } = useQuery()
  const { addToCart } = useCart()
  const categories = useMemo(() => ['All', ...new Set(menu.map((item) => item.category))], [menu])
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleItems =
    activeCategory === 'All' ? menu : menu.filter((item) => item.category === activeCategory)

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <h1>
          Notre <span>Menu</span> 🍕
        </h1>
        <p>Decouvrez nos pizzas artisanales et snacks delicieux</p>
      </div>
      <div className="menu-categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`cat-btn ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      {loading ? (
        <p className="section-header">Loading menu...</p>
      ) : error ? (
        <p className="section-header text-red-600">{error}</p>
      ) : (
        <div className="menu-grid">
          {visibleItems.map((item) => (
            <article key={item._id} className="menu-card">
              <div className="menu-card-img-wrap">
                <img src={item.image} alt={item.name} className="menu-card-img" />
              </div>
              <div className="menu-card-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-card-footer">
                  <span className="price">{item.price} <span>MAD</span></span>
                <button
                  type="button"
                  onClick={() => addToCart(item)}
                  className="add-btn"
                >
                  +
                </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default MenuPage
