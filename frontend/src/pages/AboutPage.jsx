import { openingHours } from '../data/content.js'

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>
          Notre <span>Histoire</span> 👑
        </h1>
        <p>Une passion pour la pizza, au coeur de Massa</p>
      </div>
      <section className="about-content container">
        <article className="about-text">
          <h2>
            Le <span>meilleur</span> snack de Massa
          </h2>
          <p>
            Snack des princes est ne d'une passion simple: offrir des pizzas savoureuses a un prix
            accessible, avec une experience client chaleureuse.
          </p>
          <p>
            Nous sommes connus pour nos pizzas genereuses, nos frites offertes et notre service
            rapide en salle comme a emporter.
          </p>
        </article>
        <article className="info-cards">
          <div className="info-card">
            <h4>Horaires d'ouverture</h4>
            <ul>
            {openingHours.map((item) => (
              <li key={item}>{item}</li>
            ))}
            </ul>
          </div>
          <div className="info-card">
            <h4>Adresse</h4>
            <p>Massa, Maroc</p>
          </div>
          <iframe
            className="map-embed"
            loading="lazy"
            title="Massa map"
            src="https://maps.google.com/maps?q=Massa%20Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </article>
      </section>
    </div>
  )
}

export default AboutPage
