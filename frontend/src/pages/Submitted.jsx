import { Link, useLocation } from 'react-router-dom'

const Submitted = () => {
  const location = useLocation()
  const referenceNumber = location.state?.referenceNumber || ''

  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-[#99efe5] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-5xl text-[#006f67]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>

        {/* Heading */}
        <h1 className="text-[32px] font-[600] text-[#006a63] mb-2 font-['Poppins']">Report Submitted</h1>
        
        {/* Description */}
        <p className="text-[18px] text-gray-600 mb-8 font-['Inter']">
          Your report has been received and encrypted. A case officer will review it shortly.
        </p>

        {/* Reference Number */}
        <div className="bg-[#eff4ff] border border-gray-300 rounded-xl p-6 mb-8 max-w-md mx-auto">
          <span className="text-[14px] text-gray-600 block mb-1 font-['Inter']">Your Tracking Reference</span>
          <span className="text-[24px] font-[600] text-[#00236f] tracking-widest font-mono font-['Poppins']">{referenceNumber || '—'}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 max-w-md mx-auto">
          <button className="w-full py-4 bg-[#00236f] text-white font-bold rounded-xl hover:opacity-90 transition-all font-['Poppins']">
            Download Receipt (PDF)
          </button>
          <Link 
            to="/"
            className="w-full py-4 border-2 border-gray-300 text-gray-800 font-semibold rounded-xl hover:bg-gray-100 transition-all font-['Inter'] text-center"
          >
            Go to Dashboard
          </Link>
        </div>

        {/* Warning Notice */}
        <p className="mt-6 text-[12px] text-[#ba1a1a] font-['Inter']">
          Please save your reference number. For your security, this page will close in 2 minutes.
        </p>
      </div>

      {/* Additional Info Section */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-300">
        <h2 className="text-[20px] font-[600] text-[#00236f] mb-4 font-['Poppins']">What happens next?</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-[#d9e3f6] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[#00236f] text-lg">verified</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 font-['Inter'] mb-1">Verification</h3>
              <p className="text-sm text-gray-600 font-['Inter']">Our team will verify the information provided within 24-48 hours.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-[#d9e3f6] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[#00236f] text-lg">person</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 font-['Inter'] mb-1">Case Assignment</h3>
              <p className="text-sm text-gray-600 font-['Inter']">A dedicated case officer will be assigned to handle your report.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-[#d9e3f6] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[#00236f] text-lg">notifications</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 font-['Inter'] mb-1">Updates</h3>
              <p className="text-sm text-gray-600 font-['Inter']">You'll receive updates on your case using your tracking reference number.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Submitted
