import { useState } from 'react'
import { getReportByReference, getCaseStatusHistory } from '../services/reportsApi'
import { parseReportDescription, statusLabel, statusVariant, formatDateTime } from '../utils/parseReport'
import { useLanguage } from '../i18n/useLanguage'

const Track = () => {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [report, setReport] = useState(/** @type {any} */ (null))
  const [history, setHistory] = useState(/** @type {any[]} */ ([]))
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    setError('')
    setReport(null)
    setHistory([])
    setIsSearching(true)
    setSearched(true)

    try {
      const found = await getReportByReference(searchQuery.trim())
      setReport(found)
      try {
        const historyData = await getCaseStatusHistory(found.id)
        setHistory(Array.isArray(historyData) ? historyData : [])
      } catch (historyErr) {
        console.error('Failed to load status history', historyErr)
        setHistory([])
      }
    } catch (err) {
      console.error('Report lookup error', err)
      setError(err.message || t('track.notFound'))
    } finally {
      setIsSearching(false)
    }
  }

  const parsed = report ? parseReportDescription(report.description) : null
  const statusUpper = String(report?.status || '').toUpperCase()

  // Build the timeline: submission + recorded status changes.
  const timelineSteps = [
    {
      key: 'submitted',
      title: t('track.reportReceived'),
      description: t('track.reportReceivedText'),
      timestamp: report?.createdAt,
      done: true,
      inProgress: false,
    },
    ...history.map((h, index) => ({
      key: `${h.id}-${index}`,
      title: statusLabel(h.status),
      description: `${t('track.statusChanged')} ${statusLabel(h.status).toLowerCase()} ${t('track.byCaseTeam')}`,
      timestamp: h.changed_at,
      done: true,
      inProgress: false,
    })),
    {
      key: 'current',
      title: statusLabel(report?.status),
      description:
        statusUpper === 'RESOLVED'
          ? t('track.resolved')
          : t('track.currentStage'),
      timestamp: null,
      done: statusUpper === 'RESOLVED',
      inProgress: statusUpper !== 'RESOLVED',
    },
  ]

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8">
      {/* Tracking Search Section */}
      <section className="mb-8">
        <div className="bg-[#1e3a8a] rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#90a8ff]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#99efe5]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-[32px] leading-[40px] text-[#90a8ff] mb-4 font-['Poppins']">{t('track.title')}</h2>
            <p className="text-[#90a8ff] text-[18px] mb-8 font-['Inter']">{t('track.subtitle')}</p>
            <form className="flex flex-col md:flex-row gap-4 bg-white rounded-xl p-2 shadow-lg" onSubmit={handleSearch}>
              <div className="flex-grow relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                <input
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-none focus:ring-2 focus:ring-[#00236f] text-gray-800 font-mono text-lg font-['Inter']"
                  placeholder={t('track.placeholder')}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                className="bg-[#00236f] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1e3a8a] transition-all active:scale-95 font-['Inter']"
                type="submit"
                disabled={isSearching}
              >
                {isSearching ? <span className="material-symbols-outlined animate-spin">sync</span> : t('track.search')}
              </button>
            </form>
            <div className="mt-6 flex items-center justify-center gap-2 text-[#90a8ff] bg-white/10 py-2 px-4 rounded-full w-fit mx-auto">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              <span className="text-[12px] font-['Inter']">{t('track.privacy')}</span>
            </div>
          </div>
        </div>
      </section>

      {error && (
        <section className="mb-8">
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-6 text-center font-['Inter']">
            <span className="material-symbols-outlined text-3xl block mb-2">search_off</span>
            {error}
          </div>
        </section>
      )}

      {!report && !error && !isSearching && !searched && (
        <section className="mb-8">
          <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-300">
            <span className="material-symbols-outlined text-5xl text-[#00236f]/30 block mb-4">travel_explore</span>
            <p className="text-gray-500 font-['Inter']">{t('track.empty')}</p>
          </div>
        </section>
      )}

      {report && parsed && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <span className="text-[12px] text-gray-400 uppercase tracking-wider font-bold font-['Inter']">{t('track.currentStatus')}</span>
                  <h3 className="text-[24px] font-[600] text-[#00236f] mt-1 font-['Poppins']">{statusLabel(report.status)}</h3>
                  <p className="text-sm text-gray-500 font-['Inter'] mt-1 font-mono">{report.referenceNumber}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-4 py-2 rounded-full border flex items-center gap-2 ${statusVariant(report.status)}`}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <span className="font-semibold font-['Inter']">{statusLabel(report.status)}</span>
                  </span>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-[12px] uppercase tracking-wider text-gray-400 font-bold font-['Inter'] block mb-1">{t('report.district')}</span>
                  <span className="font-semibold text-gray-800 font-['Inter']">{report.district?.name || '—'}</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-[12px] uppercase tracking-wider text-gray-400 font-bold font-['Inter'] block mb-1">{t('track.assignedOfficer')}</span>
                  <span className="font-semibold text-gray-800 font-['Inter']">{report.assignedUser?.name || t('track.awaiting')}</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-[12px] uppercase tracking-wider text-gray-400 font-bold font-['Inter'] block mb-1">{t('track.incidentType')}</span>
                  <span className="font-semibold text-gray-800 font-['Inter']">{parsed.incidentType}</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-[12px] uppercase tracking-wider text-gray-400 font-bold font-['Inter'] block mb-1">{t('track.submittedOn')}</span>
                  <span className="font-semibold text-gray-800 font-['Inter']">{formatDateTime(report.createdAt)}</span>
                </div>
              </div>

              <div className="space-y-0">
                {timelineSteps.map((step, index) => {
                  const isLast = index === timelineSteps.length - 1
                  return (
                    <div key={step.key} className="relative pl-10 pb-10" style={{ position: 'relative' }}>
                      <div
                        className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center z-10 shadow-md ${
                          step.done
                            ? 'bg-[#00236f] shadow-[#00236f]/20'
                            : step.inProgress
                            ? 'bg-white border-2 border-[#00236f]'
                            : 'bg-white border-2 border-gray-300'
                        }`}
                      >
                        {step.done && <span className="material-symbols-outlined text-white text-[14px]">check</span>}
                        {step.inProgress && <div className="w-2 h-2 bg-[#00236f] rounded-full animate-pulse"></div>}
                      </div>
                      {!isLast && (
                        <div className={`absolute left-[11px] top-6 bottom-0 w-[2px] ${step.done ? 'bg-[#00236f]' : 'bg-[#e6eeff]'} -z-10`}></div>
                      )}
                      <div className={`flex flex-col md:flex-row justify-between ${step.done || step.inProgress ? '' : 'opacity-50'}`}>
                        <div>
                          <h4 className={`text-[20px] font-[500] font-['Poppins'] ${step.done || step.inProgress ? 'text-[#00236f]' : 'text-gray-600'}`}>{step.title}</h4>
                          <p className="text-gray-600 text-[16px] mt-1 font-['Inter']">{step.description}</p>
                        </div>
                        <span className={`text-[12px] mt-2 md:mt-0 font-medium font-['Inter'] ${step.inProgress ? 'text-[#00236f] font-bold' : 'text-gray-400'}`}>
                          {step.inProgress ? t('track.inProgress') : step.timestamp ? formatDateTime(step.timestamp) : t('track.pending')}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#382700] text-[#261a00] p-6 rounded-xl shadow-sm border border-[#f6be39]/20 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-10">
                <span className="material-symbols-outlined text-8xl">lock_reset</span>
              </div>
              <h4 className="text-[20px] font-[500] mb-3 flex items-center gap-2 font-['Poppins']">
                <span className="material-symbols-outlined">security</span> {t('track.safetyTitle')}
              </h4>
              <p className="text-[14px] mb-4 leading-relaxed font-['Inter']">{t('track.safetyText')}</p>
              <div className="flex items-center gap-2 bg-black/5 p-2 rounded-lg">
                <span className="material-symbols-outlined text-sm">info</span>
                <span className="text-[12px] italic font-['Inter']">{t('track.protocol')}</span>
              </div>
            </div>

            <div className="bg-[#00236f] text-white p-8 rounded-xl shadow-lg relative group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-4xl mb-4 opacity-80">support_agent</span>
              <h4 className="text-[24px] font-[600] mb-2 font-['Poppins']">{t('track.needHelp')}</h4>
              <p className="text-white/80 text-[18px] mb-6 font-['Inter']">{t('track.needHelpText')}</p>
              <div className="space-y-3">
                <a className="flex items-center gap-3 font-bold bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all font-['Inter']" href="tel:+265111">
                  <span className="material-symbols-outlined">call</span> {t('track.call')}
                </a>
                <a className="w-full flex items-center gap-3 font-bold bg-[#006a63] text-white p-3 rounded-lg shadow-md hover:opacity-90 active:scale-95 transition-all font-['Inter']" href="mailto:support@gender.gov.mw">
                  <span className="material-symbols-outlined">chat_bubble</span> {t('track.chat')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Track
