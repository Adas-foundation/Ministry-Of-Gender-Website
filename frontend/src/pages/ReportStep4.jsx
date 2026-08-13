import { useEffect, useState } from 'react'
import { getDistricts } from '../services/districtsApi'
import { useLanguage } from '../i18n/useLanguage'
import { MALAWI_DISTRICTS, matchDistrictFromAddress } from '../utils/districts'

const ReportStep4 = ({ formData, updateField }) => {
  const { t } = useLanguage()
  const [districts, setDistricts] = useState(/** @type {any[]} */ (MALAWI_DISTRICTS))
  const [usingFallback, setUsingFallback] = useState(false)
  const [districtsError, setDistrictsError] = useState('')
  const [loadingDistricts, setLoadingDistricts] = useState(true)

  // GPS state: 'idle' | 'locating' | 'success' | 'unsupported' | 'denied' | 'unavailable' | 'failed'
  const [gpsState, setGpsState] = useState('idle')
  const [accuracy, setAccuracy] = useState(null)
  const [reverseAddress, setReverseAddress] = useState('')
  const [gpsArea, setGpsArea] = useState({})

  useEffect(() => {
    let cancelled = false

    getDistricts()
      .then((data) => {
        if (cancelled) return
        const list = Array.isArray(data) && data.length > 0 ? data : MALAWI_DISTRICTS
        setDistricts(list)
        setUsingFallback(list === MALAWI_DISTRICTS)
        // keep a previously chosen district if it still exists, else default first
        const stillValid = list.some((d) => d.id === formData.districtId)
        if (!formData.districtId || !stillValid) {
          updateField('districtId', list[0]?.id ?? null)
        }
      })
      .catch((err) => {
        if (cancelled) return
        // Offline / unreachable backend: fall back to the built-in district list
        // so the form remains usable. This is expected, not a hard error.
        console.warn('District API unavailable, using built-in list', err)
        setDistricts(MALAWI_DISTRICTS)
        setUsingFallback(true)
        if (!formData.districtId) {
          updateField('districtId', MALAWI_DISTRICTS[0]?.id ?? null)
        }
        setDistrictsError('')
      })
      .finally(() => {
        if (!cancelled) setLoadingDistricts(false)
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Best-effort reverse geocode so the user sees a readable place name next to
  // the raw coordinates. Non-blocking: a failure just keeps the coordinates.
  const reverseGeocode = async (lat, lng) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=en`
      )
      if (!res.ok) return
      const data = await res.json()
      const display = data?.display_name || ''
      setReverseAddress(display)
      setGpsArea(data?.address || {})

      // Auto-select the district that matches the resolved area.
      const matched = matchDistrictFromAddress(data?.address, districts)
      if (matched) {
        updateField('districtId', matched.id)
      }
    } catch (err) {
      console.error('Reverse geocoding failed', err)
      setReverseAddress('')
      setGpsArea({})
    }
  }

  const applyLocation = (position) => {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    updateField('latitude', lat)
    updateField('longitude', lng)
    setAccuracy(Math.round(position.coords.accuracy))
    setGpsState('success')
    reverseGeocode(lat, lng)
  }

  const handleLocationError = (err) => {
    console.error('Geolocation error', err?.code, err?.message)
    // every nonexistent/permission/position error
    if (err?.code === 1) {
      // PERMISSION_DENIED
      setGpsState('denied')
    } else if (err?.code === 3) {
      // TIMEOUT
      setGpsState('failed')
    } else {
      // POSITION_UNAVAILABLE or anything else
      setGpsState('unavailable')
    }
  }

  const useCurrentLocation = () => {
    if (!('geolocation' in navigator)) {
      setGpsState('unsupported')
      return
    }

    // Geolocation only works in secure contexts (HTTPS or localhost).
    if (typeof window !== 'undefined' && window.isSecureContext === false && window.location.hostname !== 'localhost') {
      setGpsState('unsupported')
      return
    }

    setGpsState('locating')
    setReverseAddress('')

    navigator.geolocation.getCurrentPosition(applyLocation, handleLocationError, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    })
  }

  const selectedDistrictName = districts.find((d) => d.id === formData.districtId)?.name

  const hasCoords = formData.latitude != null && formData.longitude != null

  const gps = {
    idle: { cls: 'bg-gray-100 text-gray-600', icon: 'gps_fixed', label: t('report.gpsIdle') },
    locating: { cls: 'bg-[#fef9c3] text-[#854d0e]', icon: 'my_location', label: t('report.gpsLocating') },
    success: { cls: 'bg-secondary/10 text-[#006a63]', icon: 'check_circle', label: t('report.gpsSuccess') },
    unsupported: { cls: 'bg-red-50 text-red-600', icon: 'gps_off', label: t('report.geoUnsupported') },
    denied: { cls: 'bg-red-50 text-red-600', icon: 'block', label: t('report.locationDenied') },
    unavailable: { cls: 'bg-red-50 text-red-600', icon: 'location_off', label: t('report.locationUnavailable') },
    failed: { cls: 'bg-red-50 text-red-600', icon: 'schedule', label: t('report.geoFailed') },
  }[gpsState] || { cls: 'bg-gray-100 text-gray-600', icon: 'gps_fixed', label: '' }

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-300">
      <h2 className="text-[24px] font-[600] mb-2 text-[#00236f] font-['Poppins']">{t('report.locationTitle')}</h2>
      <p className="text-gray-600 text-[16px] mb-6 font-['Inter']">{t('report.locationSubtitle')}</p>
      <div className="flex flex-col gap-6">
        {/* Map / location panel */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-inner border border-gray-300 bg-[#eff4ff]">
          <div className="w-full h-full opacity-60 grayscale hover:grayscale-0 transition-all cursor-crosshair" />

          {/* GPS controls */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
            <button
              className="flex items-center gap-2 bg-[#00236f] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all disabled:opacity-70 font-['Inter']"
              type="button"
              onClick={useCurrentLocation}
              disabled={gpsState === 'locating'}
            >
              <span className={`material-symbols-outlined text-sm ${gpsState === 'locating' ? 'animate-spin' : ''}`}>
                {gpsState === 'locating' ? 'sync' : 'my_location'}
              </span>
              <span className="text-[12px]">{t('report.useGps')}</span>
            </button>

            <span className={`flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-full shadow font-semibold font-['Inter'] ${gps.cls}`}>
              <span className="material-symbols-outlined text-[15px]">{gps.icon}</span>
              {gps.label}
            </span>
          </div>

          {/* Centered pin marker representing current location */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center">
              {hasCoords ? (
                <span
                  className={`material-symbols-outlined text-5xl ${gpsState === 'success' ? 'text-[#ba1a1a]' : 'text-[#00236f]/40'}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
              ) : (
                <span className="material-symbols-outlined text-[#00236f]/40 text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  map
                </span>
              )}
              <div className="bg-white px-3 py-1 rounded shadow-md mt-2 border border-gray-300 max-w-[90%]">
                <span className="text-xs font-bold text-gray-800 font-['Inter']">
                  {hasCoords
                    ? `${formData.latitude.toFixed(5)}, ${formData.longitude.toFixed(5)}`
                    : selectedDistrictName || t('report.mapMalawi')}
                </span>
              </div>
              {hasCoords && accuracy != null && (
                <span className="bg-white px-2 py-0.5 rounded-full shadow-sm mt-1 border border-gray-200 text-[10px] text-gray-500 font-['Inter']">
                  ±{accuracy} m accuracy
                </span>
              )}
            </div>
          </div>
        </div>

        {/* GPS status / reverse-geocoded address */}
        {hasCoords && (
          <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#d9e3f6] flex items-start gap-3">
            <span className="material-symbols-outlined text-[#006a63] mt-0.5">near_me</span>
            <div className="min-w-0">
              <p className="text-[14px] font-semibold text-[#00236f] font-['Inter'] mb-1">
                {t('report.gpsResolved')}
              </p>
              {gpsArea.road && (
                <p className="text-[13px] text-gray-700 font-['Inter'] mb-1">
                  <span className="font-semibold text-[#00236f]">{gpsArea.road}</span>
                  {gpsArea.suburb || gpsArea.neighbourhood ? `, ${gpsArea.suburb || gpsArea.neighbourhood}` : ''}
                </p>
              )}
              <p className="text-[13px] text-gray-700 font-['Inter'] mb-1">
                <span className="font-semibold text-[#00236f]">{gpsArea.county || gpsArea.state_district || gpsArea.state || t('track.district')}</span>
                {gpsArea.state || gpsArea.country ? `, ${gpsArea.state || ''} ${gpsArea.country || ''}`.trim() : ''}
              </p>
              <p className="text-[12px] text-gray-500 font-['Inter'] leading-relaxed truncate">
                {reverseAddress || t('report.gpsRawOnly')}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="bg-white px-2 py-1 rounded-lg border border-[#d9e3f6] text-[11px] text-[#00236f] font-semibold font-['Inter']">
                  {t('report.district')}: {selectedDistrictName || '—'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* District + landmark fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[14px] font-['Inter']">{t('report.district')}</label>
            {districtsError ? (
              <p className="text-red-600 text-[14px] font-['Inter']">{districtsError}</p>
            ) : (
              <select
                className="w-full h-[50px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all font-['Inter']"
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
            {/* Note sits below the select so it never shifts the box out of
                alignment with the landmark input next to it. */}
            {usingFallback && !districtsError && (
              <p className="text-[11px] text-[#854d0e] font-['Inter'] flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">info</span>
                {t('report.offlineDistricts')}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-[14px] font-['Inter']">{t('report.landmark')}</label>
            <input
              className="w-full h-[50px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all font-['Inter']"
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