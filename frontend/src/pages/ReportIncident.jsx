import { useState } from 'react';

const ReportIncident = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    reporterName: '',
    reporterPhone: '',
    reporterEmail: '',
    incidentDate: '',
    incidentTime: '',
    incidentType: '',
    district: '',
    address: '',
    description: '',
    survivorName: '',
    survivorAge: '',
    survivorGender: '',
    anonymous: false,
  });

  const steps = [
    { number: 1, label: 'Reporter' },
    { number: 2, label: 'Incident' },
    { number: 3, label: 'Survivor' },
    { number: 4, label: 'Review' },
  ];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Report submitted successfully! Reference number: SR-2024-' + Math.random().toString(36).substr(2, 9).toUpperCase());
  };

  return (
    <main className="flex-grow container mx-auto px-6 py-12 max-w-[720px]">
      {/* Multi-step Progress Indicator */}
      <section className="mb-12">
        <div className="flex items-center justify-between relative mb-4">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10 transform -translate-y-1/2"></div>
          <div 
            className="absolute top-1/2 left-0 h-[2px] bg-blue-700 -z-10 transform -translate-y-1/2 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          ></div>
          
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center gap-2">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md transition-all ${
                  step.number <= currentStep 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-gray-200 text-gray-600 border-2 border-gray-300'
                }`}
              >
                {step.number < currentStep ? (
                  <span className="material-symbols-outlined">check</span>
                ) : (
                  step.number
                )}
              </div>
              <span 
                className={`text-xs font-bold ${
                  step.number <= currentStep ? 'text-blue-700' : 'text-gray-600'
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Form Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {currentStep === 1 && 'Reporter Information'}
            {currentStep === 2 && 'Incident Details'}
            {currentStep === 3 && 'Survivor Information'}
            {currentStep === 4 && 'Review & Submit'}
          </h1>
          <p className="text-base text-gray-600">
            {currentStep === 1 && 'Please provide your contact information (optional if reporting anonymously).'}
            {currentStep === 2 && 'Please provide as much specific information as possible to help our case workers assist you.'}
            {currentStep === 3 && 'Information about the person affected (optional if you are the survivor).'}
            {currentStep === 4 && 'Please review all information before submitting your report.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Reporter Information */}
          {currentStep === 1 && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <input
                  type="checkbox"
                  id="anonymous"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-gray-300 text-blue-700 focus:ring-blue-700"
                />
                <label htmlFor="anonymous" className="text-sm font-semibold text-gray-900">
                  Submit this report anonymously
                </label>
              </div>

              {!formData.anonymous && (
                <>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-600" htmlFor="reporterName">
                      Your Name (Optional)
                    </label>
                    <input
                      className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                      id="reporterName"
                      name="reporterName"
                      value={formData.reporterName}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-600" htmlFor="reporterPhone">
                      Phone Number
                    </label>
                    <input
                      className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                      id="reporterPhone"
                      name="reporterPhone"
                      value={formData.reporterPhone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+265 XXX XXX XXX"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-600" htmlFor="reporterEmail">
                      Email Address (Optional)
                    </label>
                    <input
                      className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                      id="reporterEmail"
                      name="reporterEmail"
                      value={formData.reporterEmail}
                      onChange={handleChange}
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                </>
              )}
            </>
          )}

          {/* Step 2: Incident Details */}
          {currentStep === 2 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600" htmlFor="incidentDate">
                    Date of Incident
                  </label>
                  <input
                    className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                    id="incidentDate"
                    name="incidentDate"
                    value={formData.incidentDate}
                    onChange={handleChange}
                    type="date"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600" htmlFor="incidentTime">
                    Approximate Time
                  </label>
                  <input
                    className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                    id="incidentTime"
                    name="incidentTime"
                    value={formData.incidentTime}
                    onChange={handleChange}
                    type="time"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600" htmlFor="incidentType">
                  Type of Incident
                </label>
                <select
                  className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all appearance-none bg-white"
                  id="incidentType"
                  name="incidentType"
                  value={formData.incidentType}
                  onChange={handleChange}
                  required
                >
                  <option disabled value="">Select the category</option>
                  <option value="gbv">Gender Based Violence (GBV)</option>
                  <option value="child_protection">Child Protection / Abuse</option>
                  <option value="human_trafficking">Human Trafficking</option>
                  <option value="elderly_abuse">Elderly Abuse</option>
                  <option value="disability_discrimination">Disability-Based Discrimination</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600" htmlFor="district">
                  District
                </label>
                <select
                  className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all appearance-none bg-white"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                >
                  <option disabled value="">Select District</option>
                  <option value="blantyre">Blantyre</option>
                  <option value="lilongwe">Lilongwe</option>
                  <option value="mzuzu">Mzuzu</option>
                  <option value="zomba">Zomba</option>
                  <option value="dedza">Dedza</option>
                  <option value="machinga">Machinga</option>
                  <option value="mulanje">Mulanje</option>
                  <option value="other">Other...</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600" htmlFor="address">
                  Specific Location / Address
                </label>
                <textarea
                  className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all resize-none"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Village, T/A, Street name, or identifiable landmarks..."
                  rows="2"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600" htmlFor="description">
                  Description of Event
                </label>
                <textarea
                  className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all resize-none"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please describe exactly what happened in as much detail as possible..."
                  rows="5"
                  required
                />
                <span className="text-xs text-gray-600 flex items-center gap-2 mt-2">
                  <span className="material-symbols-outlined text-[16px]">info</span>
                  All information is treated with strict confidentiality.
                </span>
              </div>
            </>
          )}

          {/* Step 3: Survivor Information */}
          {currentStep === 3 && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600" htmlFor="survivorName">
                  Survivor Name (Optional)
                </label>
                <input
                  className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                  id="survivorName"
                  name="survivorName"
                  value={formData.survivorName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter survivor's name if known"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600" htmlFor="survivorAge">
                    Age (Optional)
                  </label>
                  <input
                    className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                    id="survivorAge"
                    name="survivorAge"
                    value={formData.survivorAge}
                    onChange={handleChange}
                    type="number"
                    placeholder="Age"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600" htmlFor="survivorGender">
                    Gender (Optional)
                  </label>
                  <select
                    className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all appearance-none bg-white"
                    id="survivorGender"
                    name="survivorGender"
                    value={formData.survivorGender}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">Note:</span> If you are the survivor, you can leave these fields blank. Your information from Step 1 will be used.
                </p>
              </div>
            </>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Reporter Information</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-600">Anonymous:</span> {formData.anonymous ? 'Yes' : 'No'}</p>
                  {!formData.anonymous && (
                    <>
                      <p><span className="text-gray-600">Name:</span> {formData.reporterName || 'Not provided'}</p>
                      <p><span className="text-gray-600">Phone:</span> {formData.reporterPhone}</p>
                      <p><span className="text-gray-600">Email:</span> {formData.reporterEmail || 'Not provided'}</p>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Incident Details</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-600">Date:</span> {formData.incidentDate}</p>
                  <p><span className="text-gray-600">Time:</span> {formData.incidentTime || 'Not provided'}</p>
                  <p><span className="text-gray-600">Type:</span> {formData.incidentType}</p>
                  <p><span className="text-gray-600">District:</span> {formData.district}</p>
                  <p><span className="text-gray-600">Location:</span> {formData.address || 'Not provided'}</p>
                  <p><span className="text-gray-600">Description:</span> {formData.description}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Survivor Information</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-600">Name:</span> {formData.survivorName || 'Not provided'}</p>
                  <p><span className="text-gray-600">Age:</span> {formData.survivorAge || 'Not provided'}</p>
                  <p><span className="text-gray-600">Gender:</span> {formData.survivorGender || 'Not provided'}</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <p className="text-sm text-green-800">
                  <span className="material-symbols-outlined align-middle mr-2">verified</span>
                  By submitting this report, you confirm that the information provided is accurate to the best of your knowledge.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-8">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </button>
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-blue-700 text-white shadow-md hover:bg-blue-800 active:scale-95 transition-all"
              >
                Continue
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-blue-700 text-white shadow-md hover:bg-blue-800 active:scale-95 transition-all"
              >
                Submit Report
                <span className="material-symbols-outlined">send</span>
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Help Section */}
      <div className="mt-8 p-4 bg-green-100 rounded-xl flex items-start gap-4 border border-green-200">
        <span className="material-symbols-outlined text-green-800 mt-1">support_agent</span>
        <div>
          <p className="font-semibold text-green-800">Need help filling this out?</p>
          <p className="text-sm text-green-700 opacity-80">Call our toll-free protection hotline at 555 for immediate assistance from a social worker.</p>
        </div>
      </div>
    </main>
  );
};

export default ReportIncident;
