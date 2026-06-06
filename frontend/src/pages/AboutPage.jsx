import { useTranslation } from 'react-i18next'

function AboutPage() {
  const { t } = useTranslation()
  const openingHours = t('about.openingHours', { returnObjects: true })

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>
          {t('about.titleA')} <span>{t('about.titleB')}</span>
        </h1>
        <p>{t('about.subtitle')}</p>
      </div>
      <section className="about-content container">
        <article className="about-text">
          <h2>
            {t('about.headingA')} <span>{t('about.headingB')}</span> {t('about.headingC')}
          </h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </article>
        <article className="info-cards">
          <div className="info-card">
            <h4>{t('about.hours')}</h4>
            <ul>
              {openingHours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="info-card">
            <h4>{t('about.address')}</h4>
            <p>{t('footer.location')}</p>
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
