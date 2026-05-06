import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useQuery } from './useQuery.js'
import { highlights, reviews } from '../data/content.js'

function HomePage() {
  const { data: menu = [] } = useQuery()
  const popular = menu.slice(0, 4)

  return (
    <div>
      <section className="hero">
        <div>
          <div className="hero-badge">⭐ Note 5.0 - Massa, Maroc</div>
          <h1 className="hero-title">
            La meilleure
            <span className="accent">Pizza de Massa</span>
          </h1>
          <p className="hero-subtitle">
            Saveurs authentiques, service rapide, prix imbattables. Frites offertes avec les pizzas.
          </p>
          <div className="hero-ctas">
            <Link to="/menu" className="btn-primary">
              Commander maintenant
            </Link>
            <Link to="/menu" className="btn-secondary">
              View Menu
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="number">5.0⭐</div>
              <div className="label">Note clients</div>
            </div>
            <div className="hero-stat">
              <div className="number">MAD 1-50</div>
              <div className="label">Prix accessibles</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img className="hero-pizza" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80" alt="Fresh pizza" />
        </div>
      </section>

      <section className="features-strip">
        {highlights.map((item) => (
          <motion.article
            key={item.title}
            whileHover={{ y: -5 }}
            className="feature-item"
          >
            <div className="feature-icon">🍕</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="section-block">
        <div className="section-header">
          <div className="section-tag">🔥 Les Favoris</div>
          <h2 className="section-title">Nos <em>bestsellers</em></h2>
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
                  <div className="price">{item.price} <span>MAD</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">⭐ Avis Clients</div>
            <h2 className="section-title">Ce que disent nos <em>clients</em></h2>
          </div>
        </div>
        <div className="reviews-grid container">
          {reviews.map((review) => (
            <blockquote key={review} className="review-card">
              "{review}"
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
