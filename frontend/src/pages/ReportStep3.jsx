const ReportStep3 = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-300">
      <h2 className="text-[24px] font-[600] mb-6 text-[#00236f] font-['Poppins']">Incident Description</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[14px] text-gray-800 font-['Inter']">When did this happen?</label>
          <div className="grid grid-cols-2 gap-4">
            <input className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all font-['Inter']" type="date"/>
            <input className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all font-['Inter']" type="time"/>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[14px] text-gray-800 font-['Inter']">Provide a detailed account of the incident</label>
          <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all resize-none font-['Inter']" placeholder="Describe the events clearly. Your safety and confidentiality are our priority..." rows="6"></textarea>
        </div>
        <div className="space-y-2">
          <label className="text-[14px] text-gray-800 font-['Inter']">Is there an immediate threat remaining?</label>
          <div className="flex gap-4">
            <button className="px-6 py-2 border-2 border-gray-300 rounded-lg text-[14px] hover:bg-gray-100 transition-colors font-['Inter']" type="button">Yes</button>
            <button className="px-6 py-2 border-2 border-gray-300 rounded-lg text-[14px] hover:bg-gray-100 transition-colors font-['Inter']" type="button">No</button>
            <button className="px-6 py-2 border-2 border-gray-300 rounded-lg text-[14px] hover:bg-gray-100 transition-colors font-['Inter']" type="button">I'm not sure</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportStep3
