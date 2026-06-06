import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>
          {t("contactPage.titleA")} <span>{t("contactPage.titleB")}</span>
        </h1>
      </div>
      <section className="contact-grid container">
        <article className="contact-info">
          <h2>
            {t("contactPage.headingA")} <span>{t("contactPage.headingB")}</span>
          </h2>
          <p>{t("contactPage.intro")}</p>
          <div className="contact-item">
            <h4>{t("contactPage.phone")}</h4>
            <p>06 00 00 00 00</p>
          </div>
          <div className="contact-item">
            <h4>{t("contactPage.address")}</h4>
            <p>{t("footer.location")}</p>
          </div>
          <div className="contact-item">
            <h4>{t("contactPage.whatsapp")}</h4>
            <p>{t("contactPage.whatsappText")}</p>
          </div>
        </article>
        <form className="contact-form">
          <h3>
            {t("contactPage.formTitleA")}{" "}
            <span>{t("contactPage.formTitleB")}</span>
          </h3>
          <div className="form-group">
            <label>{t("contactPage.name")}</label>
            <input placeholder={t("contactPage.namePlaceholder")} />
          </div>
          <div className="form-group">
            <label>{t("contactPage.phone")}</label>
            <input placeholder="06 XX XX XX XX" />
          </div>
          <div className="form-group">
            <label>{t("contactPage.message")}</label>
            <textarea placeholder={t("contactPage.messagePlaceholder")} />
          </div>
          <button type="button" className="btn-primary w-full justify-center">
            {t("contactPage.send")}
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactPage;
