import { useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'

const Resources = () => {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'guides', icon: 'security', title: t('resources.guidesTitle'), text: t('resources.guidesText'), action: t('resources.viewGuides'), target: 'kit' },
    { id: 'legal', icon: 'gavel', title: t('resources.legalTitle'), text: t('resources.legalText'), action: t('resources.readDocuments'), target: 'faq' },
    { id: 'mental', icon: 'psychology', title: t('resources.mentalTitle'), text: t('resources.mentalText'), action: t('resources.findHelp'), target: 'faq' },
    { id: 'child', icon: 'child_care', title: t('resources.childTitle'), text: t('resources.childText'), action: t('resources.protectChild'), target: 'helplines' },
    { id: 'women', icon: 'woman', title: t('resources.womenTitle'), text: t('resources.womenText'), action: t('resources.learnMore'), target: 'helplines' },
    { id: 'community', icon: 'groups', title: t('resources.communityTitle'), text: t('resources.communityText'), action: t('resources.localContacts'), target: 'helplines' },
  ]

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredCategories = categories.filter((cat) => {
    if (!normalizedQuery) return true
    return `${cat.title} ${cat.text}`.toLowerCase().includes(normalizedQuery)
  })

  // Sections that the category cards scroll the user to.
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9ff]/50 to-[#f8f9ff]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-[48px] leading-[56px] text-[#00236f] mb-4 font-[700] font-['Poppins']">{t('resources.heroTitle')}</h1>
          <p className="text-[18px] text-gray-600 mb-10 max-w-2xl mx-auto font-['Inter']">{t('resources.heroText')}</p>
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-400">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="w-full pl-14 pr-32 py-5 rounded-2xl border-none shadow-lg focus:ring-2 focus:ring-[#1e3a8a] bg-white text-[18px] font-['Inter']" 
              placeholder={t('resources.searchPlaceholder')} 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-2 bottom-2 px-8 bg-[#00236f] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors font-['Inter']">{t('resources.search')}</button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4 md:px-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-300 hover:border-[#006a63] hover:shadow-md transition-all group cursor-pointer" onClick={() => scrollTo(cat.target)}>
              <div className="w-14 h-14 rounded-xl bg-[#99efe5] flex items-center justify-center text-[#006f67] mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
              </div>
              <h3 className="text-[20px] font-[500] text-[#00236f] mb-3 font-['Poppins']">{cat.title}</h3>
              <p className="text-gray-600 mb-6 font-['Inter']">{cat.text}</p>
              <span className="text-[#006a63] font-semibold flex items-center gap-2 font-['Inter']">{cat.action} <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </div>
          ))}
        </div>
        {normalizedQuery && filteredCategories.length === 0 && (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <p className="text-gray-600 font-['Inter']">
              {t('resources.noResults', { query: searchQuery })}
            </p>
          </div>
        )}
      </section>

      {/* Featured Content: Safety First */}
      <section className="bg-[#00236f] py-20 text-white" id="kit">
        <div className="px-4 md:px-10 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-[32px] leading-[40px] mb-6 text-[#b6c4ff] font-['Poppins']">{t('resources.kitTitle')}</h2>
            <p className="text-[18px] mb-8 text-white/90 font-['Inter']">{t('resources.kitText')}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors cursor-pointer border border-white/10">
                <span className="material-symbols-outlined text-3xl text-[#b6c4ff]">picture_as_pdf</span>
                <div className="flex-grow">
                  <p className="font-semibold text-[#b6c4ff]">{t('resources.rightsGuide')}</p>
                  <p className="text-sm opacity-70 font-['Inter']">{t('resources.rightsGuideMeta')}</p>
                </div>
                <span className="material-symbols-outlined">download</span>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors cursor-pointer border border-white/10">
                <span className="material-symbols-outlined text-3xl text-[#b6c4ff]">picture_as_pdf</span>
                <div className="flex-grow">
                  <p className="font-semibold text-[#b6c4ff]">{t('resources.safetyPlan')}</p>
                  <p className="text-sm opacity-70 font-['Inter']">{t('resources.safetyPlanMeta')}</p>
                </div>
                <span className="material-symbols-outlined">download</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                className="w-full h-auto" 
                alt="Community leaders and government officials meeting" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHNUXstGnkunVWJC7pPLrL40CfdxV9sY0fO_dCNq-VjL_j2zOHwCLDpMNtoctMOteA-zQUQ_nhJGye3WVgzehfdAyj0Bcp4RbuNPj9klKLn6lZSnJL67NwPKLoClsu_hIFthll-_ATbKsDq7J4Lb3vn9n-Qn-TYIlCrHXiZD97sN5jVL7C9qIlgcIMWL-BFeprSV7hlBKp2XPhyjKXQiIkqcSeN-gf7Iyps-v_WzuxpxmWEBySD4lHy-9edKRjJdLtLOWdJILF9A"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#006a63] text-white p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-[20px] font-[500] mb-1 italic font-['Poppins']">{t('resources.privacyQuote')}</p>
              <p className="text-sm opacity-80 font-['Inter']">{t('resources.privacyText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-10 max-w-4xl mx-auto" id="faq">
        <h2 className="text-[32px] leading-[40px] text-center text-[#00236f] mb-12 font-['Poppins']">{t('resources.faqTitle')}</h2>
        <div className="space-y-4">
          <details className="group bg-white rounded-xl border border-gray-300 p-2 overflow-hidden" open>
            <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
              <span className="font-semibold text-[20px] text-gray-800 font-['Inter']">{t('resources.faqAnonymousQ')}</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="p-4 pt-0 text-gray-600 leading-relaxed font-['Inter']">
              {t('resources.faqAnonymousA')}
            </div>
          </details>
          <details className="group bg-white rounded-xl border border-gray-300 p-2 overflow-hidden">
            <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
              <span className="font-semibold text-[20px] text-gray-800 font-['Inter']">{t('resources.faqAfterQ')}</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="p-4 pt-0 text-gray-600 leading-relaxed font-['Inter']">
              {t('resources.faqAfterA')}
            </div>
          </details>
          <details className="group bg-white rounded-xl border border-gray-300 p-2 overflow-hidden">
            <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
              <span className="font-semibold text-[20px] text-gray-800 font-['Inter']">{t('resources.faqDataQ')}</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="p-4 pt-0 text-gray-600 leading-relaxed font-['Inter']">
              {t('resources.faqDataA')}
            </div>
          </details>
        </div>
      </section>

      {/* Emergency Numbers & Contact Section */}
      <section className="bg-[#eff4ff] py-16 px-4 md:px-10" id="helplines">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-[32px] leading-[40px] text-[#00236f] mb-8 font-['Poppins']">{t('resources.helplinesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-[#00236f]/10 flex flex-col items-center">
              <span className="material-symbols-outlined text-5xl text-[#ba1a1a] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>phone_callback</span>
              <p className="text-sm font-semibold text-[#006a63] uppercase tracking-widest mb-2 font-['Inter']">{t('resources.childHelpline')}</p>
              <a className="text-5xl font-bold text-[#00236f] hover:text-[#006a63] transition-colors font-['Poppins']" href="tel:116">116</a>
              <p className="mt-4 text-gray-600 font-['Inter']">{t('resources.childHelplineText')}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-[#00236f]/10 flex flex-col items-center">
              <span className="material-symbols-outlined text-5xl text-[#ba1a1a] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
              <p className="text-sm font-semibold text-[#006a63] uppercase tracking-widest mb-2 font-['Inter']">{t('resources.gbvHelpline')}</p>
              <a className="text-5xl font-bold text-[#00236f] hover:text-[#006a63] transition-colors font-['Poppins']" href="tel:555">555</a>
              <p className="mt-4 text-gray-600 font-['Inter']">{t('resources.gbvHelplineText')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resources