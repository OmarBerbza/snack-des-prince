import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useQuery } from './useQuery.js'
import { useCart } from '../store/CartContext.jsx'

function translateMenuItem(item, t) {
  return {
    ...item,
    name: t(`menu.items.${item.key}.name`, { defaultValue: item.name }),
    description: t(`menu.items.${item.key}.description`, { defaultValue: item.description }),
    category: t(`categories.${item.categoryKey}`, { defaultValue: item.category }),
  }
}

function MenuPage() {
  const { t } = useTranslation()
  const { data: menu = [], loading, error } = useQuery()
  const { addToCart } = useCart()
  const categories = useMemo(
    () => ['all', ...new Set(menu.map((item) => item.categoryKey || item.category))],
    [menu],
  )
  const [activeCategory, setActiveCategory] = useState('all')

  const visibleItems =
    activeCategory === 'all'
      ? menu
      : menu.filter((item) => (item.categoryKey || item.category) === activeCategory)

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <h1>
          {t('menuPage.titleA')} <span>{t('menuPage.titleB')}</span>
        </h1>
        <p>{t('menuPage.subtitle')}</p>
      </div>
      <div className="menu-categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`cat-btn ${activeCategory === category ? 'active' : ''}`}
          >
            {category === 'all' ? t('common.all') : t(`categories.${category}`, { defaultValue: category })}
          </button>
        ))}
      </div>
      {loading ? (
        <p className="section-header">{t('common.loadingMenu')}</p>
      ) : error ? (
        <p className="section-header text-red-600">{t('errors.menu')}</p>
      ) : (
        <div className="menu-grid">
          {visibleItems.map((rawItem) => {
            const item = translateMenuItem(rawItem, t)

            return (
              <article key={item._id} className="menu-card">
                <div className="menu-card-img-wrap">
                  <img src={item.image} alt={item.name} className="menu-card-img" />
                </div>
                <div className="menu-card-body">
                  <div className="menu-card-kicker">{item.category}</div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-card-footer">
                    <span className="price">
                      {item.price} <span>{t('common.currency')}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      className="add-btn"
                      aria-label={`${t('common.addToCart')} ${item.name}`}
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default MenuPage
