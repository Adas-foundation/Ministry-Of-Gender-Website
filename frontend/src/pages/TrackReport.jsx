import { useState } from 'react';

const TrackReport = () => {
  const [refNumber, setRefNumber] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen pb-12">
      {/* Hero Section */}
      <section className="relative py-12 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Track Your Report</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Check the real-time status of your case. Your privacy and safety are our priority. All tracking requests are encrypted and secure.
          </p>

          {/* Tracking Search Component */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto text-left">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600" htmlFor="ref-number">
                    Reference Number
                  </label>
                  <input
                    className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                    id="ref-number"
                    placeholder="SR-2024-XXXX"
                    type="text"
                    value={refNumber}
                    onChange={(e) => setRefNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600" htmlFor="access-code">
                    Phone or Access Code
                  </label>
                  <input
                    className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                    id="access-code"
                    placeholder="••••••••"
                    type="password"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="w-full bg-blue-700 text-white h-12 rounded-xl font-semibold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                    Searching Database...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">search</span>
                    Search Report Status
                  </>
                )}
              </button>
              <p className="mt-4 text-xs text-gray-600 text-center italic">
                Lost your reference number? <a className="text-blue-700 hover:underline" href="/contact">Contact Support</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Status Preview Section */}
      {showResults && (
        <section className="px-6 py-12">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left: Status Timeline */}
              <div className="lg:w-2/3">
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm h-full">
                  <div className="flex justify-between items-start mb-8 border-b border-gray-200 pb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Report: SR-2024-8842</h3>
                      <p className="text-sm text-gray-600">Case Type: Gender-Based Violence Assistance</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                      <span className="text-sm font-semibold">In Progress</span>
                    </div>
                  </div>

                  <div className="relative pl-8 flex flex-col gap-8">
                    {/* Timeline Line */}
                    <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gray-200"></div>

                    {/* Status Item 1 (Completed) */}
                    <div className="relative flex gap-4">
                      <div className="z-10 w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center -ml-[45px]">
                        <span className="material-symbols-outlined text-white text-sm">check_circle</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Report Submitted</h4>
                        <p className="text-sm text-gray-600">Received on Oct 12, 2024 - 09:14 AM</p>
                        <div className="mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
                          Your report was successfully received by the central intake system. An automated confirmation was sent.
                        </div>
                      </div>
                    </div>

                    {/* Status Item 2 (Completed) */}
                    <div className="relative flex gap-4">
                      <div className="z-10 w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center -ml-[45px]">
                        <span className="material-symbols-outlined text-white text-sm">check_circle</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Assigned to Case Officer</h4>
                        <p className="text-sm text-gray-600">Assigned on Oct 12, 2024 - 02:30 PM</p>
                        <p className="text-sm text-gray-700 mt-1">Officer: J. Banda - Lilongwe District Office</p>
                      </div>
                    </div>

                    {/* Status Item 3 (Current) */}
                    <div className="relative flex gap-4">
                      <div className="z-10 w-8 h-8 rounded-full bg-blue-600 ring-4 ring-blue-100 flex items-center justify-center -ml-[45px]">
                        <span className="material-symbols-outlined text-white text-sm">hourglass_empty</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-700">Investigation in Progress</h4>
                        <p className="text-sm text-gray-600">Last updated: Oct 14, 2024 - 10:00 AM</p>
                        <div className="mt-4 flex gap-2 items-center text-blue-700 bg-blue-50 p-3 rounded-lg border border-blue-200">
                          <span className="material-symbols-outlined">info</span>
                          <span className="text-xs font-bold">Action Required: Check for SMS update</span>
                        </div>
                      </div>
                    </div>

                    {/* Status Item 4 (Pending) */}
                    <div className="relative flex gap-4 opacity-40">
                      <div className="z-10 w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center -ml-[45px]">
                        <span className="material-symbols-outlined text-gray-600 text-sm">flag</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Resolved</h4>
                        <p className="text-sm text-gray-600">Pending final verification</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Info & CTA */}
              <div className="lg:w-1/3 flex flex-col gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-700">
                    <span className="material-symbols-outlined">support_agent</span>
                    Need Assistance?
                  </h4>
                  <p className="text-base text-gray-600 mb-6">
                    If you have questions about this specific status or need to add more information to your report, please contact our helpline.
                  </p>
                  <div className="space-y-4">
                    <a
                      className="flex items-center justify-between p-4 bg-red-600 text-white rounded-lg hover:opacity-95 transition-all"
                      href="tel:555"
                    >
                      <span className="font-semibold">Call Emergency 555</span>
                      <span className="material-symbols-outlined">call</span>
                    </a>
                    <button className="w-full flex items-center justify-center gap-2 p-4 border-2 border-blue-700 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                      <span className="material-symbols-outlined">chat</span>
                      Live Chat with Officer
                    </button>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm flex-1 relative min-h-[250px]">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuACYbzkaXsrhUTUhMkQRNBUINVmY3aIQzUIW0PmsfUC_BS5cuPOwejTbI3WjrCUzNfl1rCghFnfxgln3JcywfWWH9uXpeLXPfsnWSRklvh5M_Va0vJBSMEQEqJXW57DVGs__mWs3a2uko5stILJSaNtNOwR2nWRwAE9F478ZYcMgPmdzND1pDJJ4cCzuewk4p_WKfIWa2a1DRPiCsqzgSP4O9bkcJWzEh64N-T9TcnxIFFNf59U0PvkXpm8AZTiCuFsAtMn51_nz3Y)'}}></div>
                    <div className="absolute inset-0 bg-blue-700/10"></div>
                    <div className="absolute top-4 left-4 bg-white p-2 rounded shadow-md z-10">
                      <p className="text-xs font-bold">Lilongwe District Office</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                <span className="font-semibold text-gray-900">How long does it take for a report to be assigned?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-base text-gray-600 border-t border-gray-200 pt-4">
                Most reports are reviewed and assigned within 24-48 business hours. High-priority cases involving immediate danger are prioritized and handled within minutes or hours.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                <span className="font-semibold text-gray-900">Is my tracking information private?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-base text-gray-600 border-t border-gray-200 pt-4">
                Yes. The tracking page uses end-to-end encryption. Your identity and the details of your report are only visible to authorized case officers within the Ministry of Gender.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                <span className="font-semibold text-gray-900">What do I do if I lost my Access Code?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-base text-gray-600 border-t border-gray-200 pt-4">
                If you provided an email address or phone number during submission, you can request a code reset. Alternatively, visit your nearest District Social Welfare Office with proof of identity.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                <span className="font-semibold text-gray-900">Can I update my report after submission?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-base text-gray-600 border-t border-gray-200 pt-4">
                Yes, you can add additional information or evidence to your report by contacting the assigned case officer or through the live chat feature on this page.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TrackReport;
