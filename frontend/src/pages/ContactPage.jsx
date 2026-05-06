function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>
          Contactez-<span>nous</span> 📞
        </h1>
      </div>
      <section className="contact-grid container">
        <article className="contact-info">
          <h2>
            Parlons <span>ensemble</span>
          </h2>
          <p>Commandez, posez vos questions, ou visitez-nous a Massa.</p>
          <div className="contact-item">
            <h4>Telephone</h4>
            <p>06 03 08 33 35</p>
          </div>
          <div className="contact-item">
            <h4>Adresse</h4>
            <p>Massa, Maroc</p>
          </div>
          <div className="contact-item">
            <h4>WhatsApp</h4>
            <p>Disponible pour les commandes</p>
          </div>
        </article>
        <form className="contact-form">
          <h3>
            Envoyez-nous un <span>message</span>
          </h3>
          <div className="form-group">
            <label>Votre nom</label>
            <input placeholder="Ex: Ahmed Alaoui" />
          </div>
          <div className="form-group">
            <label>Telephone</label>
            <input placeholder="06 XX XX XX XX" />
          </div>
          <div className="form-group">
            <label>Votre message</label>
            <textarea placeholder="Votre question ou commande..." />
          </div>
            <button
              type="button"
              className="btn-primary w-full justify-center"
            >
              Envoyer le message
            </button>
        </form>
      </section>
    </div>
  )
}

export default ContactPage
