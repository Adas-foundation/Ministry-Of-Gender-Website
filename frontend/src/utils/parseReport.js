// Extracts the structured fields that buildDescription() folds into
// the report's `description` column so the admin UI can render them.
export function parseReportDescription(description = '') {
  const lines = String(description).split('\n')
  const fields = {}

  for (const line of lines) {
    const match = line.match(/^([^:]+):\s*(.*)$/)
    if (!match) continue
    fields[match[1].trim().toLowerCase()] = match[2].trim()
  }

  const inDescription = description.split('Description:').pop()?.trim() || ''

  return {
    incidentType: fields['incident type'] || 'General Report',
    isAnonymous: fields['anonymous report'] === 'Yes',
    victimName: fields['victim name'] && fields['victim name'] !== 'N/A' ? fields['victim name'] : null,
    victimAgeRange: fields['victim age range'] && fields['victim age range'] !== 'N/A' ? fields['victim age range'] : null,
    victimGender: fields['victim gender'] && fields['victim gender'] !== 'N/A' ? fields['victim gender'] : null,
    victimPhone: fields['victim phone'] && fields['victim phone'] !== 'N/A' ? fields['victim phone'] : null,
    needsEmergencyHelp: fields['needs emergency assistance'] === 'Yes',
    incidentDateTime: fields['incident date/time'] && fields['incident date/time'] !== 'N/A' ? fields['incident date/time'] : null,
    immediateThreat: fields['immediate threat remaining'] && fields['immediate threat remaining'] !== 'Not specified' ? fields['immediate threat remaining'] : null,
    landmark: fields['landmark'] && fields['landmark'] !== 'N/A' ? fields['landmark'] : null,
    coordinates: fields['coordinates'] || null,
    details: inDescription && inDescription !== '(none provided)' ? inDescription : '',
  }
}

// Displays a report victim column: name if provided (anonymized as initials),
// otherwise "Anonymous".
export function victimLabel(report) {
  const parsed = parseReportDescription(report?.description)
  if (parsed.isAnonymous || !parsed.victimName) return 'Anonymous'
  const initials = parsed.victimName
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
  return initials || parsed.victimName
}

// Maps backend status values (may be 'SUBMITTED' or 'submitted') to display labels.
export function statusLabel(status) {
  const normalized = String(status || '').toUpperCase()
  const labels = {
    SUBMITTED: 'Submitted',
    UNDER_REVIEW: 'Under Review',
    ASSIGNED: 'Assigned',
    RESOLVED: 'Resolved',
  }
  return labels[normalized] || normalized || 'Unknown'
}

// Returns Tailwind classes for a status badge.
export function statusVariant(status) {
  const normalized = String(status || '').toUpperCase()
  const variants = {
    SUBMITTED: 'bg-primary/10 text-primary',
    UNDER_REVIEW: 'bg-[#fef9c3] text-[#854d0e]',
    ASSIGNED: 'bg-[#e0e7ff] text-[#1e3a8a]',
    RESOLVED: 'bg-secondary/10 text-secondary',
  }
  return variants[normalized] || 'bg-slate-100 text-slate-700'
}

// ISO date -> "Oct 12, 2024" style display.
export function formatDate(value) {
  if (!value) return '—'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return String(value)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function formatDateTime(value) {
  if (!value) return '—'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return String(value)
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}
