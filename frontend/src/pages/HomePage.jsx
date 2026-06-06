import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useQuery } from './useQuery.js'
import { reviewImages } from '../data/content.js'
import { useCart } from '../store/CartContext.jsx'

const translateMenuItem = (item, t) => ({
  ...item,
  name: t(`menu.items.${item.key}.name`, { defaultValue: item.name }),
  description: t(`menu.items.${item.key}.description`, { defaultValue: item.description }),
})

function HomePage() {
  const { t } = useTranslation()
  const { addToCart } = useCart()
  const { data: menu = [] } = useQuery()
  const popular = menu.slice(0, 4).map((item) => translateMenuItem(item, t))
  const highlights = t('highlights', { returnObjects: true })
  const reviews = t('reviews', { returnObjects: true })
  const carouselReviews = [...reviews, ...reviews]

  return (
    <div>
      <section className="hero">
        <div>
          <div className="hero-badge">
            <Star size={15} fill="currentColor" />
            {t('home.badge')}
          </div>
          <h1 className="hero-title">
            {t('home.titleA')}
            <span className="accent">{t('home.titleB')}</span>
          </h1>
          <p className="hero-subtitle">{t('home.subtitle')}</p>
          <div className="hero-ctas">
            <Link to="/menu" className="btn-primary">
              {t('home.order')}
            </Link>
            <Link to="/menu" className="btn-secondary">
              {t('home.viewMenu')}
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="number">5.0</div>
              <div className="label">{t('home.customerRating')}</div>
            </div>
            <div className="hero-stat">
              <div className="number">MAD 1-50</div>
              <div className="label">{t('home.affordable')}</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            className="hero-pizza"
            src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80"
            alt={t('home.titleB')}
          />
        </div>
      </section>

      <section className="features-strip">
        {highlights.map((item, index) => (
          <motion.article key={item.title} whileHover={{ y: -5 }} className="feature-item">
            <div className="feature-icon">{String(index + 1).padStart(2, '0')}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="section-block">
        <div className="section-header">
          <div className="section-tag">{t('home.favoritesTag')}</div>
          <h2 className="section-title">{t('home.bestsellers')}</h2>
        </div>
        <div className="menu-grid">
          {popular.map((item) => (
            <article key={item._id} className="menu-card">
              <div className="menu-card-img-wrap">
                <img src={item.image} alt={item.name} className="menu-card-img" />
              </div>
              <div className="menu-card-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-card-footer">
                  <div className="price">
                    {item.price} <span>{t('common.currency')}</span>
                  </div>
                  <button type="button" onClick={() => addToCart(item)} className="add-btn">
                    +
                    <span className="sr-only">{t('common.addToCart')}</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">{t('home.reviewsTag')}</div>
            <h2 className="section-title">{t('home.reviewsTitle')}</h2>
          </div>
        </div>
        <div className="reviews-carousel" aria-label={t('home.reviewsTitle')}>
          <div className="reviews-track">
            {carouselReviews.map((review, index) => (
              <blockquote key={`${review.name}-${index}`} className="review-card">
                <div className="review-head">
                  <img src={reviewImages[index % reviewImages.length]} alt={review.name} />
                  <div>
                    <h3>{review.name}</h3>
                    <span>{review.role}</span>
                  </div>
                </div>
                <p>"{review.text}"</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
