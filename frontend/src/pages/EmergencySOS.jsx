import { useState } from 'react';

const EmergencySOS = () => {
  const [isCounting, setIsCounting] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [sosActivated, setSosActivated] = useState(false);

  const handleSOSClick = () => {
    if (sosActivated) return;
    
    setIsCounting(true);
    setCountdown(3);
    
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsCounting(false);
          setSosActivated(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resetSOS = () => {
    setSosActivated(false);
    setIsCounting(false);
    setCountdown(3);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-red-600 pt-16 pb-32">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6">
            <span className="material-symbols-outlined text-[18px]">emergency</span>
            <span className="text-xs font-bold">IMMEDIATE ASSISTANCE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Emergency SOS
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-12">
            If you are in immediate danger, use this feature to connect with emergency responders instantly. Help is on the way.
          </p>

          {/* SOS Button */}
          <div className="relative">
            <button
              onClick={handleSOSClick}
              disabled={sosActivated}
              className={`w-48 h-48 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                isCounting
                  ? 'bg-orange-500 scale-110 animate-pulse'
                  : sosActivated
                  ? 'bg-green-500 scale-110'
                  : 'bg-red-700 hover:bg-red-800 hover:scale-105 shadow-2xl'
              }`}
            >
              {isCounting ? (
                <>
                  <span className="text-6xl font-bold text-white">{countdown}</span>
                  <span className="text-white text-sm mt-2">Cancel to stop</span>
                </>
              ) : sosActivated ? (
                <>
                  <span className="material-symbols-outlined text-white text-6xl">check_circle</span>
                  <span className="text-white text-sm mt-2">SOS Activated</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-white text-6xl">sos</span>
                  <span className="text-white text-lg font-bold mt-2">TAP FOR SOS</span>
                </>
              )}
            </button>

            {sosActivated && (
              <button
                onClick={resetSOS}
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all"
              >
                Reset SOS
              </button>
            )}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-700 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      </section>

      {/* Status Information */}
      {sosActivated && (
        <section className="py-12 px-6 bg-green-50 border-b-4 border-green-500">
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl">check_circle</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">SOS Alert Sent Successfully</h2>
                  <p className="text-gray-600">Emergency responders have been notified</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-green-600">location_on</span>
                    <span className="font-semibold text-gray-900">Location Shared</span>
                  </div>
                  <p className="text-sm text-gray-600">Your GPS coordinates have been sent to responders</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-green-600">phone_in_talk</span>
                    <span className="font-semibold text-gray-900">Call Initiated</span>
                  </div>
                  <p className="text-sm text-gray-600">Emergency hotline will call you shortly</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-green-600">timer</span>
                    <span className="font-semibold text-gray-900">ETA: &lt;15 min</span>
                  </div>
                  <p className="text-sm text-gray-600">Response team dispatched to your location</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Contact Options */}
      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Quick Emergency Contacts</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Direct contact numbers for immediate assistance across Malawi
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Police */}
            <a href="tel:997" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="material-symbols-outlined text-blue-700 text-3xl">local_police</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Malawi Police Service</h3>
              <p className="text-2xl font-bold text-blue-700">997</p>
              <p className="text-sm text-gray-600 mt-2">24/7 Emergency Line</p>
            </a>

            {/* Medical */}
            <a href="tel:998" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                <span className="material-symbols-outlined text-red-600 text-3xl">medical_services</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Emergency</h3>
              <p className="text-2xl font-bold text-red-600">998</p>
              <p className="text-sm text-gray-600 mt-2">Ambulance Services</p>
            </a>

            {/* Gender Ministry */}
            <a href="tel:555" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <span className="material-symbols-outlined text-purple-700 text-3xl">support_agent</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gender Ministry Hotline</h3>
              <p className="text-2xl font-bold text-purple-700">555</p>
              <p className="text-sm text-gray-600 mt-2">GBV & Child Protection</p>
            </a>

            {/* Fire */}
            <a href="tel:999" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="material-symbols-outlined text-orange-600 text-3xl">local_fire_department</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fire Department</h3>
              <p className="text-2xl font-bold text-orange-600">999</p>
              <p className="text-sm text-gray-600 mt-2">Fire & Rescue Services</p>
            </a>

            {/* Child Helpline */}
            <a href="tel:116" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <span className="material-symbols-outlined text-green-600 text-3xl">child_care</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Child Helpline</h3>
              <p className="text-2xl font-bold text-green-600">116</p>
              <p className="text-sm text-gray-600 mt-2">Child Protection Services</p>
            </a>

            {/* Mental Health */}
            <a href="tel:334" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                <span className="material-symbols-outlined text-teal-600 text-3xl">psychology</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mental Health Support</h3>
              <p className="text-2xl font-bold text-teal-600">334</p>
              <p className="text-sm text-gray-600 mt-2">Crisis Counseling</p>
            </a>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">While You Wait for Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-blue-700">location_on</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay in a Safe Location</h3>
                <p className="text-gray-600">Move to a safe, public place if possible. Stay away from the danger area and lock doors if indoors.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-blue-700">phone_android</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Keep Your Phone Accessible</h3>
                <p className="text-gray-600">Ensure your phone is charged and within reach. Responders may call you for more information.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-blue-700">person</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Calm and Alert</h3>
                <p className="text-gray-600">Try to remain calm. Take deep breaths and be ready to provide clear information to responders.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-blue-700">description</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Document if Safe</h3>
                <p className="text-gray-600">If it's safe to do so, take photos or notes about the situation. This can help with your case later.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmergencySOS;
