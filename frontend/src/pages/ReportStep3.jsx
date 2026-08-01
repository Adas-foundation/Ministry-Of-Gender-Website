const THREAT_OPTIONS = ['Yes', 'No', "I'm not sure"]

const ReportStep3 = ({ formData, updateField }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-300">
      <h2 className="text-[24px] font-[600] mb-6 text-[#00236f] font-['Poppins']">Incident Description</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[14px] text-gray-800 font-['Inter']">When did this happen?</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all font-['Inter']"
              type="date"
              value={formData.incidentDate}
              onChange={(e) => updateField('incidentDate', e.target.value)}
            />
            <input
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all font-['Inter']"
              type="time"
              value={formData.incidentTime}
              onChange={(e) => updateField('incidentTime', e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[14px] text-gray-800 font-['Inter']">Provide a detailed account of the incident</label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00236f] focus:outline-none transition-all resize-none font-['Inter']"
            placeholder="Describe the events clearly. Your safety and confidentiality are our priority..."
            rows="6"
            value={formData.description}
            onChange={(e) => updateField('description', e.target.value)}
          ></textarea>
        </div>
        <div className="space-y-2">
          <label className="text-[14px] text-gray-800 font-['Inter']">Is there an immediate threat remaining?</label>
          <div className="flex gap-4">
            {THREAT_OPTIONS.map((option) => (
              <button
                key={option}
                className={`px-6 py-2 border-2 rounded-lg text-[14px] transition-colors font-['Inter'] ${
                  formData.immediateThreat === option
                    ? 'border-[#00236f] bg-[#00236f] text-white'
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
                type="button"
                onClick={() => updateField('immediateThreat', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportStep3