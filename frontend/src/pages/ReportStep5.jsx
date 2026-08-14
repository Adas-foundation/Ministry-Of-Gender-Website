import { useRef, useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../i18n/useLanguage'

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
const VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/ogg']

const fileKind = (file) => {
  if (IMAGE_TYPES.includes(file.type)) return 'image'
  if (VIDEO_TYPES.includes(file.type)) return 'video'
  if (file.type === 'application/pdf') return 'pdf'
  return 'doc'
}

const ReportStep5 = ({ formData, updateField }) => {
  const { t } = useLanguage()
  const fileInputRef = useRef(/** @type {HTMLInputElement | null} */ (null))
  const [previewing, setPreviewing] = useState(/** @type {{ url: string; file: File } | null} */ (null))

  // Release object URLs when unmounting or when preview changes to avoid leaks.
  useEffect(() => {
    return () => {
      if (previewing) URL.revokeObjectURL(previewing.url)
    }
  }, [previewing])

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

  const openPreview = useCallback((file) => {
    setPreviewing({ url: URL.createObjectURL(file), file })
  }, [])

  const closePreview = () => {
    setPreviewing((prev) => {
      if (prev) URL.revokeObjectURL(prev.url)
      return null
    })
  }

  const renderFileItem = (file, index) => {
    const kind = fileKind(file)
    const isImage = kind === 'image'
    const isVideo = kind === 'video'
    const isPdf = kind === 'pdf'

    return (
      <li key={`${file.name}-${index}`} className="flex items-center gap-3 px-3 py-2 bg-[#f8f9ff] border border-gray-200 rounded-lg">
        {/* File type thumbnail / icon */}
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#d9e3f6] flex items-center justify-center flex-shrink-0">
          {isImage ? (
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          ) : isVideo ? (
            <span className="material-symbols-outlined text-[#00236f]">movie</span>
          ) : isPdf ? (
            <span className="material-symbols-outlined text-[#00236f]">picture_as_pdf</span>
          ) : (
            <span className="material-symbols-outlined text-[#00236f]">description</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <span className="text-[14px] font-['Inter'] truncate block">{file.name}</span>
          <span className="text-[12px] text-gray-500 font-['Inter']">
            {(file.size / 1024).toFixed(0)} KB
          </span>
        </div>

        <button
          type="button"
          onClick={() => openPreview(file)}
          className="text-[#00236f] hover:underline text-[13px] font-medium font-['Inter'] flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[16px]">visibility</span>
          {t('report.view')}
        </button>
        <button
          type="button"
          onClick={() => removeFile(index)}
          className="text-[#ba1a1a] hover:underline text-[13px] font-['Inter']"
        >
          {t('report.remove')}
        </button>
      </li>
    )
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300">
      <h2 className="text-[24px] font-[600] mb-2 text-[#00236f] font-['Poppins']">{t('report.evidenceTitle')}</h2>
      <p className="text-gray-600 text-[16px] mb-8 font-['Inter']">{t('report.evidenceSubtitle')}</p>

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
            <span className="text-[20px] font-[500] block text-gray-800 font-['Poppins'] mb-1">{t('report.evidenceDrop')}</span>
            <span className="text-[14px] text-gray-600 font-['Inter']">{t('report.evidenceTypes')}</span>
          </div>
        </div>
      </div>

      {formData.files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {formData.files.map((file, index) => renderFileItem(file, index))}
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
            {t('report.consent')}
          </label>
        </div>
      </div>

      <div className="mt-6 p-4 bg-[#eff4ff] rounded-lg border border-[#d9e3f6]">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-[#006a63] text-xl mt-0.5">info</span>
          <div>
            <p className="text-[14px] font-semibold text-[#00236f] font-['Inter'] mb-1">{t('report.privacyNotice')}</p>
            <p className="text-[13px] text-gray-600 font-['Inter'] leading-relaxed">
              {t('report.privacyText')}
            </p>
          </div>
        </div>
      </div>

      {/* Full-screen preview modal */}
      {previewing && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4"
          onClick={closePreview}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 bg-[#00236f] text-white">
              <div className="min-w-0">
                <p className="font-semibold text-sm font-['Inter'] truncate">{previewing.file.name}</p>
                <p className="text-xs text-white/70 font-['Inter']">
                  {(previewing.file.size / 1024).toFixed(0)} KB · {previewing.file.type || t('report.file')}
                </p>
              </div>
              <button
                onClick={closePreview}
                className="text-white hover:bg-white/20 rounded-lg p-1"
                aria-label="Close preview"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-auto bg-slate-50 flex items-center justify-center p-4 min-h-[300px]">
              {fileKind(previewing.file) === 'image' ? (
                <img src={previewing.url} alt={previewing.file.name} className="max-w-full max-h-[70vh] object-contain rounded-lg" />
              ) : fileKind(previewing.file) === 'video' ? (
                <video src={previewing.url} controls className="max-w-full max-h-[70vh] rounded-lg" />
              ) : (
                <iframe
                  src={previewing.url}
                  title={previewing.file.name}
                  className="w-full h-[70vh] rounded-lg bg-white border border-gray-300"
                />
              )}
            </div>

            <div className="flex justify-end gap-3 px-5 py-3 border-t border-gray-200 bg-white">
              <a
                href={previewing.url}
                download={previewing.file.name}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 font-['Inter']"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                {t('report.download')}
              </a>
              <button
                onClick={closePreview}
                className="px-5 py-2 rounded-lg bg-[#00236f] text-white text-sm font-semibold hover:opacity-90 transition-opacity font-['Inter']"
              >
                {t('report.preview')} — Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReportStep5