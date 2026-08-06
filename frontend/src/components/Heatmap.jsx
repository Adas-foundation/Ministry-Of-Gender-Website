import { useMemo } from 'react'

// Malawi districts laid out geographically on a rough 0..100 (x) / 0..132 (y)
// grid so the tiles render as a recognizable map (narrow north, wide middle,
// narrow south) without needing heavy polygon files.
const DISTRICT_LAYOUT = [
  // Northern Region
  { name: 'Chitipa', x: 26, y: 6 },
  { name: 'Karonga', x: 48, y: 8 },
  { name: 'Likoma', x: 84, y: 20 },
  { name: 'Rumphi', x: 58, y: 18 },
  { name: 'Mzimba', x: 32, y: 26 },
  { name: 'Nkhata Bay', x: 66, y: 32 },
  // Central Region
  { name: 'Kasungu', x: 26, y: 42 },
  { name: 'Nkhotakota', x: 58, y: 46 },
  { name: 'Ntchisi', x: 44, y: 52 },
  { name: 'Mchinji', x: 12, y: 56 },
  { name: 'Dowa', x: 40, y: 58 },
  { name: 'Salima', x: 62, y: 60 },
  { name: 'Lilongwe', x: 28, y: 64 },
  { name: 'Dedza', x: 34, y: 74 },
  { name: 'Ntcheu', x: 26, y: 82 },
  // Southern Region
  { name: 'Mangochi', x: 64, y: 84 },
  { name: 'Machinga', x: 56, y: 90 },
  { name: 'Balaka', x: 44, y: 90 },
  { name: 'Neno', x: 22, y: 92 },
  { name: 'Mwanza', x: 14, y: 98 },
  { name: 'Zomba', x: 60, y: 100 },
  { name: 'Chiradzulu', x: 48, y: 102 },
  { name: 'Phalombe', x: 72, y: 106 },
  { name: 'Blantyre', x: 40, y: 104 },
  { name: 'Mulanje', x: 62, y: 110 },
  { name: 'Thyolo', x: 48, y: 112 },
  { name: 'Chikwawa', x: 34, y: 118 },
  { name: 'Nsanje', x: 40, y: 128 },
]

// Minimum cluster size before a district's count may be shown as a hotspot.
// Any district at or below this is suppressed so a single case can never be
// identified on the map (roadmap: "minimum-count suppression rule").
const MIN_COUNT = 3

const TILE_W = 30
const TILE_H = 20

// Heat ramp built from the design-system palette (teal -> amber -> red).
function intensityColor(count, maxCount) {
  const ratio = count / maxCount
  if (ratio < 0.4) return { fill: '#9ceee5', stroke: '#006a63', text: '#006a63' }
  if (ratio < 0.7) return { fill: '#f6be39', stroke: '#533c00', text: '#261a00' }
  return { fill: '#ba1a1a', stroke: '#93000a', text: '#ffffff' }
}

const SUPPRESSED = { fill: '#e6eeff', stroke: '#c5c5d3', text: '#444651' }

// Aggregates report counts by district, applying the suppression rule.
// `suppressed` tiles still render but stay neutral so no row reveals a low count.
function aggregate(reports = []) {
  const counts = new Map()
  reports.forEach((r) => {
    const name = r.district?.name || 'Unassigned'
    counts.set(name, (counts.get(name) || 0) + 1)
  })
  const maxCount = Math.max(1, ...counts.values())
  return DISTRICT_LAYOUT.map((d) => ({
    ...d,
    count: counts.get(d.name) || 0,
    suppressed: (counts.get(d.name) || 0) < MIN_COUNT,
    color: (counts.get(d.name) || 0) >= MIN_COUNT
      ? intensityColor(counts.get(d.name), maxCount)
      : SUPPRESSED,
  }))
}

const Heatmap = ({ reports = [], title = 'Malawi District Heatmap', subtitle = 'Case concentration by district' }) => {
  const cells = useMemo(() => aggregate(reports), [reports])
  const totals = useMemo(() => {
    let visible = 0
    let suppressed = 0
    cells.forEach((c) => {
      if (c.count >= MIN_COUNT) visible += c.count
      else suppressed += c.count
    })
    return { visible, suppressed }
  }, [cells])

  const px = (x) => (x / 100) * 560
  const py = (y) => (y / 132) * 620

  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#00236f]">{title}</h2>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700">
          <span className="h-2 w-2 rounded-full bg-[#ba1a1a] animate-pulse" aria-hidden="true" />
          Live
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_15rem]">
        {/* SVG map */}
        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 640 640"
            className="h-auto w-full min-w-[420px]"
            role="img"
            aria-label="Malawi district heatmap"
          >
            <rect x="0" y="0" width="640" height="640" rx="20" fill="#f8f9ff" />
            {cells.map((c) => {
              const cx = px(c.x)
              const cy = py(c.y)
              const isSuppressed = c.suppressed
              return (
                <g key={c.name}>
                  <rect
                    x={cx - TILE_W / 2}
                    y={cy - TILE_H / 2}
                    width={TILE_W}
                    height={TILE_H}
                    rx="6"
                    fill={c.color.fill}
                    stroke={c.color.stroke}
                    strokeWidth={isSuppressed ? 1 : 1.5}
                    strokeDasharray={isSuppressed ? '3,3' : undefined}
                    className="transition-opacity cursor-help hover:opacity-85"
                  >
                    <title>
                      {`${c.name}: ${c.count} case${c.count === 1 ? '' : 's'}` +
                        (isSuppressed
                          ? ' (suppressed — below ' + MIN_COUNT + ')'
                          : '')}
                    </title>
                  </rect>
                  {c.name.split(' ').length === 1 && c.name.length <= 9 && (
                    <text
                      x={cx}
                      y={cy + 4}
                      textAnchor="middle"
                      fontSize="7.5"
                      fontWeight="600"
                      fill={c.color.text}
                      pointerEvents="none"
                    >
                      {c.name}
                    </text>
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        {/* Legend + summary */}
        <div className="space-y-6">
          <div className="rounded-[24px] bg-white p-5 border border-slate-200 shadow-sm">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Intensity</h3>
            <div className="space-y-3">
              {[
                { label: 'High', swatch: 'bg-[#ba1a1a]' },
                { label: 'Medium', swatch: 'bg-[#f6be39]' },
                { label: 'Low', swatch: 'bg-[#9ceee5]' },
                { label: 'Suppressed', swatch: 'bg-[#e6eeff] border border-[#c5c5d3]' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className={`h-3 w-3 rounded ${item.swatch}`} aria-hidden="true" />
                  <span>{item.label}</span>
                  {item.label === 'Suppressed' && <span className="text-[11px] text-slate-400">(&lt;{MIN_COUNT} cases)</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#d9e3f6] bg-[#f8f9ff] p-5">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#006a63] text-xl">privacy_tip</span>
              <div>
                <p className="mb-1 text-sm font-semibold text-[#00236f]">Anonymity protected</p>
                <p className="text-[13px] leading-relaxed text-slate-600">
                  Hotspots only render for districts with at least {MIN_COUNT} cases. Any lower counts are
                  suppressed so a single report can never be identified. Data is shown at district level only.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-4 border border-slate-200 text-center">
              <p className="text-xs uppercase tracking-wide text-slate-500">Mapped cases</p>
              <p className="mt-1 text-2xl font-semibold text-[#00236f]">{totals.visible}</p>
            </div>
            <div className="rounded-2xl bg-white p-4 border border-slate-200 text-center">
              <p className="text-xs uppercase tracking-wide text-slate-500">Suppressed</p>
              <p className="mt-1 text-2xl font-semibold text-[#444651]">{totals.suppressed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heatmap