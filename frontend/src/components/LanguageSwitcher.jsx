import { useLanguage } from '../i18n/useLanguage'

// Single language switcher. The roadmap requires the platform to work in both
// English and Chichewa, with one place to pick a preference that then applies
// across the whole system. It sits on the Home page only.
const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage()

  const options = [
    { code: 'en', label: t('lang.english') },
    { code: 'ny', label: t('lang.chichewa') },
  ]

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border border-[#d9e3f6] p-1 shadow-sm" role="group" aria-label={t('lang.label')}>
      <span className="material-symbols-outlined text-[#00236f] pl-2 text-lg" aria-hidden="true">language</span>
      {options.map((option) => {
        const active = language === option.code
        return (
          <button
            key={option.code}
            type="button"
            aria-pressed={active}
            onClick={() => setLanguage(option.code)}
            className={`px-4 py-1.5 rounded-full text-[14px] font-semibold transition-all font-['Inter'] ${
              active
                ? 'bg-[#00236f] text-white shadow'
                : 'text-gray-600 hover:bg-[#e6eeff] hover:text-[#00236f]'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher