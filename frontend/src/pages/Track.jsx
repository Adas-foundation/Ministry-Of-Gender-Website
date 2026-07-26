import { useState } from 'react'

const Track = () => {
  const [searchQuery, setSearchQuery] = useState('SR-MW-2024-88912')
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
    }, 1500)
  }

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8">
      {/* Tracking Search Section */}
      <section className="mb-8">
        <div className="bg-[#1e3a8a] rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Atmospheric Background Elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#90a8ff]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#99efe5]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-[32px] leading-[40px] text-[#90a8ff] mb-4 font-['Poppins']">Track Your Report</h2>
            <p className="text-[#90a8ff] text-[18px] mb-8 font-['Inter']">Enter your unique reference number to see the current status and latest updates on your case.</p>
            <form className="flex flex-col md:flex-row gap-4 bg-white rounded-xl p-2 shadow-lg" onSubmit={handleSearch}>
              <div className="flex-grow relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                <input 
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-none focus:ring-2 focus:ring-[#00236f] text-gray-800 font-mono text-lg font-['Inter']" 
                  placeholder="SR-MW-2024-88912" 
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
                {isSearching ? '<span class="material-symbols-outlined animate-spin">sync</span> Searching...' : 'Search Case'}
              </button>
            </form>
            <div className="mt-6 flex items-center justify-center gap-2 text-[#90a8ff] bg-white/10 py-2 px-4 rounded-full w-fit mx-auto">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              <span className="text-[12px] font-['Inter']">Privacy Guaranteed: Your tracking data is encrypted.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Status & Timeline */}
        <div className="lg:col-span-8 space-y-6">
          {/* Case Status Overview */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <span className="text-[12px] text-gray-400 uppercase tracking-wider font-bold font-['Inter']">Current Case Status</span>
                <h3 className="text-[24px] font-[600] text-[#00236f] mt-1 font-['Poppins']">Under Investigation</h3>
              </div>
              <div className="bg-[#99efe5]/20 text-[#006a63] px-4 py-2 rounded-full border border-[#006a63]/30 flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                <span className="font-semibold font-['Inter']">Active Case</span>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="space-y-0">
              {/* Step 1 */}
              <div className="relative pl-10 pb-10" style={{ position: 'relative' }}>
                <div className="absolute left-0 top-0 w-6 h-6 bg-[#00236f] rounded-full flex items-center justify-center z-10 shadow-md shadow-[#00236f]/20">
                  <span className="material-symbols-outlined text-white text-[14px]">check</span>
                </div>
                <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-[#00236f] -z-10"></div>
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h4 className="text-[20px] font-[500] text-[#00236f] font-['Poppins']">Report Received</h4>
                    <p className="text-gray-600 text-[16px] mt-1 font-['Inter']">Your report was successfully submitted and logged into the central database.</p>
                  </div>
                  <span className="text-[12px] text-gray-400 mt-2 md:mt-0 font-medium font-['Inter']">Oct 12, 2023 • 09:45 AM</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pl-10 pb-10">
                <div className="absolute left-0 top-0 w-6 h-6 bg-[#00236f] rounded-full flex items-center justify-center z-10 shadow-md shadow-[#00236f]/20">
                  <span className="material-symbols-outlined text-white text-[14px]">check</span>
                </div>
                <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-[#00236f] -z-10"></div>
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h4 className="text-[20px] font-[500] text-[#00236f] font-['Poppins']">Assigned to Officer</h4>
                    <p className="text-gray-600 text-[16px] mt-1 font-['Inter']">Specialized caseworker <span className="font-semibold">Officer L. Phiri</span> has been assigned to your case.</p>
                  </div>
                  <span className="text-[12px] text-gray-400 mt-2 md:mt-0 font-medium font-['Inter']">Oct 13, 2023 • 02:15 PM</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pl-10 pb-10">
                <div className="absolute left-0 top-0 w-6 h-6 bg-white border-2 border-[#00236f] rounded-full flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-[#00236f] rounded-full animate-pulse"></div>
                </div>
                <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-[#e6eeff] -z-10"></div>
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h4 className="text-[20px] font-[500] text-[#00236f] font-['Poppins']">Investigation Started</h4>
                    <p className="text-gray-600 text-[16px] mt-1 font-['Inter']">Evidence review and stakeholder coordination are currently in progress.</p>
                  </div>
                  <span className="text-[12px] text-[#00236f] mt-2 md:mt-0 font-bold font-['Inter']">IN PROGRESS</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center z-10"></div>
                <div className="flex flex-col md:flex-row justify-between opacity-50">
                  <div>
                    <h4 className="text-[20px] font-[500] text-gray-600 font-['Poppins']">Resolution Pending</h4>
                    <p className="text-gray-600 text-[16px] mt-1 font-['Inter']">Awaiting final assessment and protective measures implementation.</p>
                  </div>
                  <span className="text-[12px] text-gray-400 mt-2 md:mt-0 font-medium font-['Inter']">Pending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Updates */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-300">
            <h3 className="text-[24px] font-[600] text-[#00236f] mb-6 flex items-center gap-2 font-['Poppins']">
              <span className="material-symbols-outlined">forum</span> Latest Updates
            </h3>
            <div className="space-y-4">
              <div className="bg-[#eff4ff] p-4 rounded-lg border-l-4 border-[#00236f]">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[14px] text-[#00236f] font-bold font-['Inter']">Officer L. Phiri</span>
                  <span className="text-[12px] text-gray-400 font-['Inter']">2 days ago</span>
                </div>
                <p className="text-[16px] text-gray-600 font-['Inter']">"We have reviewed the initial files provided. We are currently coordinating with local support services in your district to ensure a safe environment. Please stay reachable via your preferred contact method."</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-300/30">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[14px] text-gray-800 font-bold font-['Inter']">System Notification</span>
                  <span className="text-[12px] text-gray-400 font-['Inter']">Oct 14, 2023</span>
                </div>
                <p className="text-[16px] text-gray-600 font-['Inter']">Your case folder has been securely shared with the District Social Welfare Office for secondary review.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Actions */}
        <div className="lg:col-span-4 space-y-6">
          {/* Safety Reminder */}
          <div className="bg-[#382700] text-[#261a00] p-6 rounded-xl shadow-sm border border-[#f6be39]/20 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <span className="material-symbols-outlined text-8xl">lock_reset</span>
            </div>
            <h4 className="text-[20px] font-[500] mb-3 flex items-center gap-2 font-['Poppins']">
              <span className="material-symbols-outlined">security</span> Safety First
            </h4>
            <p className="text-[14px] mb-4 leading-relaxed font-['Inter']">Your tracking reference number is your key to this case. <span className="font-bold">Do not share it with anyone</span>, including friends or family, to ensure your safety and confidentiality.</p>
            <div className="flex items-center gap-2 bg-black/5 p-2 rounded-lg">
              <span className="material-symbols-outlined text-sm">info</span>
              <span className="text-[12px] italic font-['Inter']">Ministry Protection Protocol 2024</span>
            </div>
          </div>

          {/* Evidence Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-300">
            <h3 className="text-[20px] font-[500] text-[#00236f] mb-4 font-['Poppins']">Evidence Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00236f]">description</span>
                  <div>
                    <p className="text-[14px] font-bold text-gray-800 font-['Inter']">statement_final.pdf</p>
                    <p className="text-[12px] text-gray-400 font-['Inter']">Uploaded Oct 12</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#006a63]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00236f]">image</span>
                  <div>
                    <p className="text-[14px] font-bold text-gray-800 font-['Inter']">evidence_01.jpg</p>
                    <p className="text-[12px] text-gray-400 font-['Inter']">Uploaded Oct 12</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#006a63]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </div>
            <button className="w-full bg-[#d9e3f6] text-[#00236f] font-bold py-3 rounded-lg border border-[#00236f]/20 hover:bg-[#00236f]/5 transition-all flex items-center justify-center gap-2 active:scale-95 font-['Inter']">
              <span className="material-symbols-outlined">upload_file</span> Add More Evidence
            </button>
          </div>

          {/* Contact Support */}
          <div className="bg-[#00236f] text-white p-8 rounded-xl shadow-lg relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="material-symbols-outlined text-4xl mb-4 opacity-80">support_agent</span>
            <h4 className="text-[24px] font-[600] mb-2 font-['Poppins']">Need Help?</h4>
            <p className="text-white/80 text-[18px] mb-6 font-['Inter']">If you have questions about your status or feel unsafe, our coordinators are here 24/7.</p>
            <div className="space-y-3">
              <a className="flex items-center gap-3 font-bold bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all font-['Inter']" href="tel:+265111">
                <span className="material-symbols-outlined">call</span> Call 111 (Toll-Free)
              </a>
              <button className="w-full flex items-center gap-3 font-bold bg-[#006a63] text-white p-3 rounded-lg shadow-md hover:opacity-90 active:scale-95 transition-all font-['Inter']">
                <span className="material-symbols-outlined">chat_bubble</span> Live Support Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Track
