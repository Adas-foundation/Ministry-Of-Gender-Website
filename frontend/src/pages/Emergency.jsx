import { useState } from 'react'
import { createSosAlert } from '../services/sosApi'

const Emergency = () => {
  const [sosActive, setSosActive] = useState(false)
  const [pressTimer, setPressTimer] = useState(/** @type {ReturnType<typeof setTimeout> | null} */ (null))
  const [sendingSilent, setSendingSilent] = useState(false)
  const [sendingSos, setSendingSos] = useState(false)
  const [sosError, setSosError] = useState('')
  const [sosMessage, setSosMessage] = useState('')

  const quickExit = () => {
    window.location.replace("https://www.google.com/search?q=malawi+weather")
  }

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser.'))
        return
      }
      navigator.geolocation.getCurrentPosition(
        (position) => resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        }),
        () => reject(new Error('Unable to access your location. Please enable location services and try again.')),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      )
    })
  }

  const sendSosAlert = async (source) => {
    const coords = await getCurrentPosition()
    return createSosAlert({ ...coords, source })
  }

  const triggerSOS = async () => {
    setSosError('')
    setSosMessage('')
    setSendingSos(true)
    try {
      await sendSosAlert('sos')
      setSosActive(true)
    } catch (err) {
      console.error('Failed to send SOS', err)
      setSosError(err.message || 'Could not send SOS. Please call 997.')
    } finally {
      setSendingSos(false)
    }
  }

  const cancelSOS = () => {
    setSosActive(false)
  }

  const silentSOS = async () => {
    setSosError('')
    setSosMessage('')
    setSendingSilent(true)
    try {
      await sendSosAlert('silent')
      setSosMessage('Silent SOS sent. Your location has been shared discreetly with the emergency team. No sirens or sounds will play on this device.')
      setTimeout(() => setSosMessage(''), 6000)
    } catch (err) {
      console.error('Failed to send silent SOS', err)
      setSosError(err.message || 'Could not send silent SOS.')
    } finally {
      setSendingSilent(false)
    }
  }

  const handleMouseDown = () => {
    setPressTimer(setTimeout(() => {
      triggerSOS()
    }, 3000))
  }

  const handleMouseUp = () => {
    if (pressTimer) {
      clearTimeout(pressTimer)
      setPressTimer(null)
    }
  }

  const handleTouchStart = (e) => {
    e.preventDefault()
    handleMouseDown()
  }

  const handleTouchEnd = () => {
    handleMouseUp()
  }

  return (
    <main className="flex-grow">
      {/* Quick Exit Fixed Button (Always Visible) */}
      <button 
        className="fixed top-4 right-4 z-[100] px-6 py-3 rounded-full bg-gradient-to-r from-[#ba1a1a] to-[#93000a] text-white font-bold shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        onClick={quickExit}
      >
        <span className="material-symbols-outlined">close</span>
        QUICK EXIT
      </button>

      {/* Hero Section: Emergency Action */}
      <section className="relative py-8 px-4 md:px-10 bg-[#eff4ff] overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* SOS Trigger Area */}
          <div className="lg:col-span-7 flex flex-col items-center text-center py-4">
            <h2 className="text-[48px] leading-[56px] mb-4 text-[#00236f] font-[700] font-['Poppins']">Help is One Tap Away</h2>
            <p className="text-[18px] text-gray-600 max-w-xl mb-8 font-['Inter']">Press the button below for immediate assistance. Your location and status will be shared with the Ministry of Gender emergency team.</p>
            <div className="relative group">
              <div className="sos-pulse absolute inset-0 bg-[#ba1a1a]/20 rounded-full animate-pulse"></div>
              <button 
                className="relative w-64 h-64 md:w-80 md:h-80 bg-[#ba1a1a] rounded-full shadow-2xl flex flex-col items-center justify-center text-white hover:bg-[#ba1a1a]/90 active:scale-95 transition-all border-8 border-white/10"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <span className="material-symbols-outlined text-7xl md:text-8xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>{sendingSos ? 'sync' : 'emergency_share'}</span>
                <span className="text-[24px] font-[600] font-['Poppins']">{sendingSos ? 'SENDING SOS...' : 'ACTIVATE SOS'}</span>
                <span className="text-[14px] mt-2 opacity-80 uppercase tracking-widest font-['Inter']">{sendingSos ? 'Transmitting your location' : 'Hold for 3 seconds'}</span>
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                className="flex items-center gap-2 px-8 py-4 bg-[#d9e3f6] border border-gray-300 rounded-xl font-bold text-gray-800 hover:bg-gray-200 transition-colors font-['Inter'] disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={silentSOS}
                disabled={sendingSilent}
              >
                <span className="material-symbols-outlined">{sendingSilent ? 'sync' : 'visibility_off'}</span>
                {sendingSilent ? 'SENDING...' : 'SILENT SOS (No sound)'}
              </button>
            </div>
            {sosError && (
              <div className="mt-4 max-w-md w-full rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 flex items-start gap-2">
                <span className="material-symbols-outlined">error</span>
                <span>{sosError}</span>
              </div>
            )}
            {sosMessage && (
              <div className="mt-4 max-w-md w-full rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-700 flex items-start gap-2">
                <span className="material-symbols-outlined">check_circle</span>
                <span>{sosMessage}</span>
              </div>
            )}
          </div>

          {/* Status & Location Bento Area */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Location Card */}
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-300">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00236f]">location_on</span>
                  <span className="text-[20px] font-[500] font-['Poppins']">Live Location</span>
                </div>
                <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-ping"></span>
                  BROADCASTING
                </div>
              </div>
              <div className="w-full h-48 rounded-lg overflow-hidden relative border border-gray-300">
                <img 
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all" 
                  alt="Map of Lilongwe, Malawi" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe9TDlH_ceMaoGflsb9Yjx-zSGP4l0aqerbgxtJE9R8SrRccsgjydbiOZyRfEL2xYIS7jscKGWcOHinFyqEz-67IcpUxrIoCp4MR-QdmB7z9SpymIrIJHMIrAk9iSb2E8AvjR85CEfUoWslsHFji1WY0twoLzmvAkMi6D2hhj4_3YXk-CGMIfRYtlPECSsi9g4vUAnpM15wrmHsHCSzJeL73ABRbFWUqp75mCrqM4sLJtBKld5awL-HS735mPtdyXXsPuD7tS9zQ"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 px-3 py-1 rounded text-xs font-semibold text-gray-600 shadow-sm">
                  GPS Accuracy: ±5 meters
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 font-['Inter']">Last updated: Just now</p>
            </div>

            {/* Emergency Contacts Quick View */}
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-300">
              <h3 className="text-[20px] font-[500] mb-4 flex items-center gap-2 font-['Poppins']">
                <span className="material-symbols-outlined text-[#00236f]">contacts</span>
                Emergency Contacts
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-[#eff4ff] rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold">MK</div>
                    <div>
                      <p className="font-bold">Mary Kalua</p>
                      <p className="text-xs text-gray-600 font-['Inter']">Mother • +265 888 123 456</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                </div>
                <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 font-['Inter']">
                  <span className="material-symbols-outlined">add</span>
                  Add Primary Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-8 px-4 md:px-10 max-w-[1280px] mx-auto">
        <h3 className="text-[24px] font-[600] mb-4 text-center md:text-left font-['Poppins']">One-Touch Emergency Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Call Police */}
          <a className="bg-white p-6 rounded-xl shadow-md border border-gray-300 hover:border-[#00236f] transition-all group" href="tel:997">
            <div className="w-12 h-12 bg-[#00236f]/10 rounded-full flex items-center justify-center mb-4 text-[#00236f] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">local_police</span>
            </div>
            <h4 className="text-[20px] font-[500] font-bold font-['Poppins']">Call Police</h4>
            <p className="text-gray-600 text-sm mb-4 font-['Inter']">Direct line to Malawi Police Service.</p>
            <span className="text-[#00236f] font-bold text-lg font-['Poppins']">997</span>
          </a>
          {/* Call Ambulance */}
          <a className="bg-white p-6 rounded-xl shadow-md border border-gray-300 hover:border-[#00236f] transition-all group" href="tel:998">
            <div className="w-12 h-12 bg-[#ba1a1a]/10 rounded-full flex items-center justify-center mb-4 text-[#ba1a1a] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">medical_services</span>
            </div>
            <h4 className="text-[20px] font-[500] font-bold font-['Poppins']">Call Ambulance</h4>
            <p className="text-gray-600 text-sm mb-4 font-['Inter']">National Health Emergency Line.</p>
            <span className="text-[#ba1a1a] font-bold text-lg font-['Poppins']">998</span>
          </a>
          {/* Nearest Safe House */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300 hover:border-[#00236f] transition-all group cursor-pointer">
            <div className="w-12 h-12 bg-[#006a63]/10 rounded-full flex items-center justify-center mb-4 text-[#006a63] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">roofing</span>
            </div>
            <h4 className="text-[20px] font-[500] font-bold font-['Poppins']">Nearest Safe House</h4>
            <p className="text-gray-600 text-sm mb-4 font-['Inter']">Confidential secure locations nearby.</p>
            <span className="text-[#006a63] font-bold text-sm underline font-['Inter']">Find on Map</span>
          </div>
          {/* Nearest Hospital */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300 hover:border-[#00236f] transition-all group cursor-pointer">
            <div className="w-12 h-12 bg-[#533c00]/20 rounded-full flex items-center justify-center mb-4 text-[#261a00] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">hospital</span>
            </div>
            <h4 className="text-[20px] font-[500] font-bold font-['Poppins']">Nearest Hospital</h4>
            <p className="text-gray-600 text-sm mb-4 font-['Inter']">24/7 medical facilities near you.</p>
            <span className="text-[#261a00] font-bold text-sm underline font-['Inter']">Find on Map</span>
          </div>
        </div>
      </section>

      {/* Safety Tips Bento Section */}
      <section className="py-8 bg-[#d9e3f6]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="flex items-end justify-between mb-4">
            <div>
              <h3 className="text-[24px] font-[600] font-['Poppins']">Immediate Safety Steps</h3>
              <p className="text-gray-600 font-['Inter']">Recommended actions while waiting for help.</p>
            </div>
            <a className="hidden md:block text-[#00236f] font-bold hover:underline font-['Inter']">View All Safety Guides</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tip 1 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#00236f]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#00236f] text-white flex items-center justify-center font-bold">1</span>
                <h4 className="font-bold font-['Poppins']">Find a Secure Spot</h4>
              </div>
              <p className="text-gray-600 text-sm font-['Inter']">Lock yourself in a room or find a public place with many witnesses. Stay away from kitchen or tools.</p>
            </div>
            {/* Tip 2 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#006a63]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#006a63] text-white flex items-center justify-center font-bold">2</span>
                <h4 className="font-bold font-['Poppins']">Save Evidence</h4>
              </div>
              <p className="text-gray-600 text-sm font-['Inter']">If safe, take photos or voice recordings. Keep them in a hidden folder or cloud storage immediately.</p>
            </div>
            {/* Tip 3 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#f6be39]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#f6be39] text-[#261a00] flex items-center justify-center font-bold">3</span>
                <h4 className="font-bold font-['Poppins']">Keep Phone Charged</h4>
              </div>
              <p className="text-gray-600 text-sm font-['Inter']">Switch to low power mode. Do not close this browser tab as it is tracking your location for responders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay Alerts */}
      {sosActive && (
        <div className="fixed inset-0 bg-[#ba1a1a]/90 z-[110] flex items-center justify-center p-6 text-center text-white animate-pulse">
          <div className="max-w-md">
            <span className="material-symbols-outlined text-9xl mb-6">emergency</span>
            <h2 className="text-4xl font-bold mb-4 font-['Poppins']">SOS SIGNAL SENT</h2>
            <p className="text-xl mb-8 font-['Inter']">Authorities have been notified and your live location is being shared. Responders are being dispatched to your area.</p>
            <button 
              className="px-8 py-3 bg-white text-[#ba1a1a] font-bold rounded-full hover:bg-gray-100 transition-all font-['Inter']"
              onClick={cancelSOS}
            >
              CANCEL SOS (I am safe)
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default Emergency
