import { useRef } from 'react'

const ReportStep5 = ({ formData, updateField }) => {
  const fileInputRef = useRef(null)

  const handleFilesSelected = (e) => {
    const selected = Array.from(e.target.files || [])
    updateField('files', [...formData.files, ...selected])
  }

  const removeFile = (index) => {
    updateField(
      'files',
      formData.files.filter((_, i) => i !== index)
    )
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300">
      <h2 className="text-[24px] font-[600] mb-2 text-[#00236f] font-['Poppins']">Evidence Upload</h2>
      <p className="text-gray-600 text-[16px] mb-8 font-['Inter']">Upload photos, videos, or documents that support your report. Max file size: 20MB.</p>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".jpg,.jpeg,.png,.mp4,.pdf,.docx"
        className="hidden"
        onChange={handleFilesSelected}
      />

      <div
        className="border-2 border-dashed border-[#d9e3f6] rounded-xl p-12 text-center hover:bg-[#f8f9ff] hover:border-[#00236f] transition-all cursor-pointer group"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-[#d9e3f6] rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00236f] transition-all">
            <span className="material-symbols-outlined text-5xl text-[#00236f] group-hover:text-white transition-colors">cloud_upload</span>
          </div>
          <div>
            <span className="text-[20px] font-[500] block text-gray-800 font-['Poppins'] mb-1">Click to upload or drag and drop</span>
            <span className="text-[14px] text-gray-600 font-['Inter']">JPEG, PNG, MP4, PDF, or DOCX</span>
          </div>
        </div>
      </div>

      {formData.files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {formData.files.map((file, index) => (
            <li key={`${file.name}-${index}`} className="flex items-center justify-between px-4 py-2 bg-[#f8f9ff] border border-gray-200 rounded-lg">
              <span className="text-[14px] font-['Inter'] truncate">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-[#ba1a1a] hover:underline text-[13px] font-['Inter']"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 space-y-4">
        <div className="flex items-start gap-3">
          <input
            className="w-6 h-6 mt-1 text-[#00236f] rounded focus:ring-[#00236f] focus:ring-2"
            id="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => updateField('consent', e.target.checked)}
          />
          <label className="text-[16px] text-gray-600 leading-relaxed font-['Inter'] cursor-pointer" htmlFor="consent">
            I confirm that the information provided is accurate to the best of my knowledge. I understand this information will be handled with strict confidentiality by the Ministry of Gender and authorized responders.
          </label>
        </div>
      </div>

      <div className="mt-6 p-4 bg-[#eff4ff] rounded-lg border border-[#d9e3f6]">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-[#006a63] text-xl mt-0.5">info</span>
          <div>
            <p className="text-[14px] font-semibold text-[#00236f] font-['Inter'] mb-1">Privacy Notice</p>
            <p className="text-[13px] text-gray-600 font-['Inter'] leading-relaxed">
              Your files are encrypted and stored securely. Only authorized personnel will have access to review your evidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportStep5