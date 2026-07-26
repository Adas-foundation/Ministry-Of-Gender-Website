const ReportStep4 = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-300">
      <h2 className="text-[24px] font-[600] mb-6 text-[#00236f] font-['Poppins']">Where did it occur?</h2>
      <div className="flex flex-col gap-6">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-inner border border-gray-300 bg-[#eff4ff]">
          <div className="w-full h-full opacity-60 grayscale hover:grayscale-0 transition-all cursor-crosshair"></div>
          <div className="absolute top-4 left-4 z-10">
            <button className="flex items-center gap-2 bg-[#00236f] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all font-['Inter']" type="button">
              <span className="material-symbols-outlined text-sm">my_location</span>
              <span className="text-[12px]">Use My Current GPS</span>
            </button>
          </div>
          {/* Mock Map UI */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-[#ba1a1a] text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <div className="bg-white px-3 py-1 rounded shadow-md mt-2 border border-gray-300">
                <span className="text-xs font-bold text-gray-800 font-['Inter']">Lilongwe, Central Region</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[14px] font-['Inter']">District</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all font-['Inter']">
              <option>Lilongwe</option>
              <option>Blantyre</option>
              <option>Zomba</option>
              <option>Mzuzu</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[14px] font-['Inter']">Specific Landmark or Address</label>
            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all font-['Inter']" placeholder="e.g. Near Area 18 Post Office" type="text"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportStep4
