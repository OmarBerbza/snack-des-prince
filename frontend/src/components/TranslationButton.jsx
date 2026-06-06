import { useState } from 'react'
import { Check, Globe2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { languageOptions } from '../data/content.js'

function TranslationButton() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className="translation-widget">
      {open && (
        <div className="language-panel" role="menu" aria-label={t('language.label')}>
          {languageOptions.map((language) => (
            <button
              key={language.code}
              type="button"
              role="menuitem"
              className={i18n.language === language.code ? 'selected' : ''}
              onClick={() => changeLanguage(language.code)}
            >
              <span>{language.label}</span>
              {i18n.language === language.code && <Check size={16} />}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        className="translation-toggle"
        aria-label={t('language.label')}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Globe2 size={20} />
        <span>{t('language.current')}</span>
      </button>
    </div>
  )
}

export default TranslationButton
