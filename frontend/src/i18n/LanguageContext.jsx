import { useEffect, useState } from 'react'
import { translations } from './translations'
import { LanguageContext } from './i18nContext'
const STORAGE_KEY = 'safereport_language'

// t walks the dictionary for a dotted key (e.g. 'nav.home'), falling back to
// English when the active language has no entry.
function buildT(lang) {
  return (key, vars) => {
    const dict = translations[lang] || translations.en
    let value = key.split('.').reduce((acc, part) => (acc == null ? acc : acc[part]), dict)
    if (value == null) {
      value = key
        .split('.')
        .reduce((acc, part) => (acc == null ? acc : acc[part]), translations.en)
    }
    if (value == null) return key
    if (vars) {
      Object.entries(vars).forEach(([name, val]) => {
        value = String(value).replace(new RegExp(`\\{${name}\\}`, 'g'), String(val))
      })
    }
    return value
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // storage unavailable — ignore
    }
    document.documentElement.setAttribute('lang', language)
  }, [language])

  const t = buildT(language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}