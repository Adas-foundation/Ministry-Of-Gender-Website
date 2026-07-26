const ReportStep1 = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-300">
      <h2 className="text-[24px] font-[600] mb-6 text-[#00236f] font-['Poppins']">What type of incident are you reporting?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="group relative p-6 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-[#00236f] transition-all active:scale-95">
          <input className="absolute top-4 right-4 text-[#00236f] focus:ring-[#00236f] h-5 w-5" name="incident_type" type="radio" value="domestic"/>
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl mb-3 text-[#00236f]" style={{ fontVariationSettings: "'FILL' 1" }}>family_restroom</span>
            <span className="text-[20px] font-[500] font-['Poppins']">Domestic Violence</span>
            <span className="text-[16px] text-gray-600 font-['Inter']">Violence or abuse within a household or relationship.</span>
          </div>
        </label>
        <label className="group relative p-6 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-[#00236f] transition-all active:scale-95">
          <input className="absolute top-4 right-4 text-[#00236f] focus:ring-[#00236f] h-5 w-5" name="incident_type" type="radio" value="sexual"/>
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl mb-3 text-[#00236f]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
            <span className="text-[20px] font-[500] font-['Poppins']">Sexual Assault</span>
            <span className="text-[16px] text-gray-600 font-['Inter']">Non-consensual sexual contact or behavior.</span>
          </div>
        </label>
        <label className="group relative p-6 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-[#00236f] transition-all active:scale-95">
          <input className="absolute top-4 right-4 text-[#00236f] focus:ring-[#00236f] h-5 w-5" name="incident_type" type="radio" value="child"/>
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl mb-3 text-[#00236f]" style={{ fontVariationSettings: "'FILL' 1" }}>child_care</span>
            <span className="text-[20px] font-[500] font-['Poppins']">Child Abuse</span>
            <span className="text-[16px] text-gray-600 font-['Inter']">Harm or neglect of a person under 18.</span>
          </div>
        </label>
        <label className="group relative p-6 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-[#00236f] transition-all active:scale-95">
          <input className="absolute top-4 right-4 text-[#00236f] focus:ring-[#00236f] h-5 w-5" name="incident_type" type="radio" value="harassment"/>
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl mb-3 text-[#00236f]" style={{ fontVariationSettings: "'FILL' 1" }}>person_alert</span>
            <span className="text-[20px] font-[500] font-['Poppins']">Harassment</span>
            <span className="text-[16px] text-gray-600 font-['Inter']">Intimidation, bullying, or stalking.</span>
          </div>
        </label>
      </div>
      <div className="mt-8 flex items-center gap-3 p-4 bg-[#1e3a8a]/10 rounded-lg">
        <input className="w-5 h-5 text-[#ba1a1a] rounded focus:ring-[#ba1a1a]" id="emergency_help" type="checkbox"/>
        <label className="text-[14px] text-[#ba1a1a] font-['Inter']" htmlFor="emergency_help">I need immediate medical or security assistance</label>
      </div>
    </div>
  )
}

export default ReportStep1
