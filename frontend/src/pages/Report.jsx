import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReportStep1 from './ReportStep1'
import ReportStep2 from './ReportStep2'
import ReportStep3 from './ReportStep3'
import ReportStep4 from './ReportStep4'
import ReportStep5 from './ReportStep5'

const Report = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [isAnonymous, setIsAnonymous] = useState(false)
  const totalSteps = 5

  const updateStepUI = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      updateStepUI()
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      updateStepUI()
    }
  }

  const handleStepClick = (step) => {
    setCurrentStep(step)
    updateStepUI()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/submitted')
  }

  const toggleAnonymous = () => {
    setIsAnonymous(!isAnonymous)
  }

  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-12">
      {/* Progress Stepper */}
      <div className="mb-12">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#d9e3f6] -z-10 -translate-y-1/2"></div>
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => handleStepClick(1)}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-4 border-white shadow-sm ${currentStep >= 1 ? 'bg-[#00236f] text-white' : 'bg-[#d9e3f6] text-gray-600'} hover:scale-110`}>
              {currentStep > 1 ? '<span class="material-symbols-outlined text-sm">check</span>' : '1'}
            </div>
            <span className={`text-[12px] font-['Inter'] ${currentStep === 1 ? 'text-[#00236f]' : 'text-gray-600'}`}>Type</span>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => handleStepClick(2)}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-4 border-white shadow-sm ${currentStep >= 2 ? 'bg-[#006a63] text-white' : 'bg-[#d9e3f6] text-gray-600'} hover:scale-110`}>
              {currentStep > 2 ? '<span class="material-symbols-outlined text-sm">check</span>' : '2'}
            </div>
            <span className={`text-[12px] font-['Inter'] ${currentStep === 2 ? 'text-[#00236f]' : 'text-gray-600'}`}>Victim</span>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => handleStepClick(3)}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-4 border-white shadow-sm ${currentStep >= 3 ? 'bg-[#006a63] text-white' : 'bg-[#d9e3f6] text-gray-600'} hover:scale-110`}>
              {currentStep > 3 ? '<span class="material-symbols-outlined text-sm">check</span>' : '3'}
            </div>
            <span className={`text-[12px] font-['Inter'] ${currentStep === 3 ? 'text-[#00236f]' : 'text-gray-600'}`}>Details</span>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => handleStepClick(4)}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-4 border-white shadow-sm ${currentStep >= 4 ? 'bg-[#006a63] text-white' : 'bg-[#d9e3f6] text-gray-600'} hover:scale-110`}>
              {currentStep > 4 ? '<span class="material-symbols-outlined text-sm">check</span>' : '4'}
            </div>
            <span className={`text-[12px] font-['Inter'] ${currentStep === 4 ? 'text-[#00236f]' : 'text-gray-600'}`}>Location</span>
          </div>
          {/* Step 5 */}
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => handleStepClick(5)}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-4 border-white shadow-sm ${currentStep >= 5 ? 'bg-[#006a63] text-white' : 'bg-[#d9e3f6] text-gray-600'} hover:scale-110`}>
              {currentStep > 5 ? '<span class="material-symbols-outlined text-sm">check</span>' : '5'}
            </div>
            <span className={`text-[12px] font-['Inter'] ${currentStep === 5 ? 'text-[#00236f]' : 'text-gray-600'}`}>Evidence</span>
          </div>
        </div>
      </div>

      {/* Form Sections Container */}
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Section 1: Incident Type */}
        {currentStep === 1 && <ReportStep1 />}

        {/* Section 2: Victim Information */}
        {currentStep === 2 && <ReportStep2 isAnonymous={isAnonymous} setIsAnonymous={toggleAnonymous} />}

        {/* Section 3: Incident Details */}
        {currentStep === 3 && <ReportStep3 />}

        {/* Section 4: Location */}
        {currentStep === 4 && <ReportStep4 />}

        {/* Section 5: Evidence */}
        {currentStep === 5 && <ReportStep5 />}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-12">
          <button 
            className={`flex items-center gap-2 px-8 py-3 border-2 border-[#00236f] text-[#00236f] font-semibold rounded-xl hover:bg-[#1e3a8a]/10 transition-all font-['Inter'] ${currentStep === 1 ? 'invisible' : ''}`}
            type="button"
            onClick={handlePrev}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Previous Step
          </button>
          {currentStep < totalSteps ? (
            <button 
              className="flex items-center gap-2 px-10 py-4 bg-[#00236f] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all font-['Poppins']"
              type="button"
              onClick={handleNext}
            >
              Continue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          ) : (
            <button 
              className="flex items-center gap-2 px-12 py-4 bg-[#006a63] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all font-['Poppins']"
              type="submit"
            >
              Submit Secure Report
              <span className="material-symbols-outlined">shield_with_heart</span>
            </button>
          )}
        </div>
      </form>
    </main>
  )
}

export default Report
