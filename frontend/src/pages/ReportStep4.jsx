import { useEffect, useState } from 'react'
import { getDistricts } from '../services/districtsApi'
import { useLanguage } from '../i18n/useLanguage'

const ReportStep4 = ({ formData, updateField }) => {
  const { t } = useLanguage()
  const [districts, setDistricts] = useState(/** @type {any[]} */ ([]))
  const [districtsError, setDistrictsError] = useState('')
  const [loadingDistricts, setLoadingDistricts] = useState(true)

  useEffect(() => {
    let cancelled = false

    getDistricts()
      .then((data) => {
        if (cancelled) return
        setDistricts(data)
        // default to the first district if none selected yet
        if (!formData.districtId && data.length > 0) {
          updateField('districtId', data[0].id)
        }
      })
      .catch((err) => {
        if (cancelled) return
        console.error('Failed to load districts', err)
        setDistrictsError(t('report.loadError') || 'Could not load districts.')
      })
      .finally(() => {
        if (!cancelled) setLoadingDistricts(false)
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert(t('report.geoUnsupported'))
      return
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        updateField('latitude', position.coords.latitude)
        updateField('longitude', position.coords.longitude)
      },
      (err) => {
        console.error('Geolocation error', err)
        alert(t('report.geoFailed'))
      }
    )
  }

  const selectedDistrictName = districts.find((d) => d.id === formData.districtId)?.name

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-300">
      <h2 className="text-[24px] font-[600] mb-2 text-[#00236f] font-['Poppins']">{t('report.locationTitle')}</h2>
      <p className="text-gray-600 text-[16px] mb-6 font-['Inter']">{t('report.locationSubtitle')}</p>
      <div className="flex flex-col gap-6">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-inner border border-gray-300 bg-[#eff4ff]">
          <div className="w-full h-full opacity-60 grayscale hover:grayscale-0 transition-all cursor-crosshair"></div>
          <div className="absolute top-4 left-4 z-10">
            <button
              className="flex items-center gap-2 bg-[#00236f] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all font-['Inter']"
              type="button"
              onClick={useCurrentLocation}
            >
              <span className="material-symbols-outlined text-sm">my_location</span>
              <span className="text-[12px]">{t('report.useGps')}</span>
            </button>
          </div>
          {/* Mock Map UI */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-[#ba1a1a] text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <div className="bg-white px-3 py-1 rounded shadow-md mt-2 border border-gray-300">
                <span className="text-xs font-bold text-gray-800 font-['Inter']">
                  {formData.latitude != null
                    ? `${formData.latitude.toFixed(4)}, ${formData.longitude.toFixed(4)}`
                    : selectedDistrictName || t('report.mapMalawi')}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[14px] font-['Inter']">{t('report.district')}</label>
            {districtsError ? (
              <p className="text-red-600 text-[14px] font-['Inter']">{districtsError}</p>
            ) : (
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all font-['Inter']"
                value={formData.districtId ?? ''}
                onChange={(e) => updateField('districtId', Number(e.target.value))}
                disabled={loadingDistricts}
              >
                {loadingDistricts && <option value="">{t('report.loadingDistricts')}</option>}
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-[14px] font-['Inter']">{t('report.landmark')}</label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all font-['Inter']"
              placeholder={t('report.landmarkPlaceholder')}
              type="text"
              value={formData.landmark}
              onChange={(e) => updateField('landmark', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportStep4