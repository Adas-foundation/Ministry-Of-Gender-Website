import React, { useState, useMemo } from 'react'
import AdminSidebar from '../components/AdminSidebar'

const MOCK_CASES = [
  {
    id: 'SR-2024-88912',
    victim: 'M.K.',
    age: 24,
    type: 'Domestic Violence',
    district: 'Lilongwe',
    priority: 'Critical',
    priorityColor: 'bg-error',
    status: 'New',
    statusVariant: 'bg-primary/10 text-primary',
    officer: { name: 'Grace Phiri', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8lrtiQZrtu89qDtmUYI7GSrdAebvif5xEMYIOmklg5TfTbi7qHw-4rihcdX4LRUB6J_rHpba1kk4h42s_vyDrWJLaYj9DGFyXyFwXEeW9GFnFBo3pnbOGFaym8eX8oVghcr5rURU88ua2O1682CSXzXkb2lsQuCCfTgs_tg7Oh6jZQApmAj5KJv87wttLHrL-uMUy6E5eDAipEJ7-UYtZOuFGf9V0Y9UcZB6Z7opErUugXurj0l2v3NxPPrI4YdRRcQ7sd6MCeg' },
    date: 'Oct 12, 2024'
  },
  {
    id: 'SR-2024-88915',
    victim: 'J.C.',
    age: 12,
    type: 'Child Protection',
    district: 'Blantyre',
    priority: 'High',
    priorityColor: 'bg-[#eab308]',
    status: 'Investigating',
    statusVariant: 'bg-[#fef9c3] text-[#854d0e]',
    officer: { name: 'John Banda', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCOrXij5G2RPR6OHpkiV1AqsmmRem5dX7Z00paAWhecsqHv1XxdhQQ0ueC0YXQ4VinAQWX317ADVkqn9v4i_ey_8IGzDzlbSUUC8UDDxYu8uXGhqZG5NsvwZtEj5cy_RwmUTfDI-ab85mng0rVOqLakCyNVfS3HC7Nohi-8Qp0qJLtGTGV_4P3yxo2_MX0tAbqKYJP4u0x0FPiSw313neJrbOPi3UnVfXbSWNz0AuLcZk60PdX_KSBero-wBHtK0Sh1oxV7g3TQA' },
    date: 'Oct 11, 2024'
  },
  {
    id: 'SR-2024-88901',
    victim: 'S.L.',
    age: 35,
    type: 'Economic Abuse',
    district: 'Mzimba',
    priority: 'Medium',
    priorityColor: 'bg-secondary',
    status: 'Resolved',
    statusVariant: 'bg-secondary/10 text-secondary',
    officer: { name: 'Rose Moyo', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP2MVBX3yUbkN-uNU9QYs-stKDUIEv-o4epUlihgqTFhVZVQ4K-sENNs5DAOFfMcTPP53a02eUzaCyeQUgL9KLwDr-ycNRtpn3lXv7s8PQqXD4IlO351gRgTFi5f65LFBbXWPmDoFZY7v8JlioHlsXRCwZcULpdkAZiNFgJmJp7OoYDuETjWXB4U86oVTQzgD-sNE2Digv2JFAJAiEaKFxENl3sAtyKzcxEmI-V4lI1YQQ2WDpHwEc36RZYhuZqcxVarlsX4nnMw' },
    date: 'Oct 10, 2024'
  },
  {
    id: 'SR-2024-88920',
    victim: 'P.M.',
    age: 19,
    type: 'Sexual Harassment',
    district: 'Zomba',
    priority: 'Critical',
    priorityColor: 'bg-error',
    status: 'Assigned',
    statusVariant: 'bg-primary/10 text-primary',
    officer: { name: 'Maxwell Kapito', avatar: null },
    date: 'Oct 12, 2024'
  }
]

export default function CaseManagement() {
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Statuses')
  const [districtFilter, setDistrictFilter] = useState('All Districts')
  const [priorityFilter, setPriorityFilter] = useState('Any')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return MOCK_CASES.filter(c => {
      if (statusFilter !== 'All Statuses' && c.status !== statusFilter) return false
      if (districtFilter !== 'All Districts' && c.district !== districtFilter) return false
      if (priorityFilter !== 'Any' && c.priority !== priorityFilter) return false
      if (query && !(`${c.id} ${c.victim} ${c.district} ${c.type}`.toLowerCase().includes(query.toLowerCase()))) return false
      return true
    })
  }, [query, statusFilter, districtFilter, priorityFilter])

  function handleViewDetails(caseId) {
    // Placeholder: wire this to route or modal later
    alert(`View details for ${caseId}`)
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="ml-64 flex-1 min-h-screen bg-background text-on-surface font-body-md">
        <header className="sticky top-0 bg-surface-container-lowest z-40 border-b border-outline-variant px-margin-desktop py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary font-semibold">Case Management</h2>
              <p className="text-on-surface-variant text-sm">Managing all active incident reports across Malawi districts</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-outline text-on-surface-variant rounded-lg hover:bg-surface-container-low transition-colors font-medium">
                <span className="material-symbols-outlined">download</span>
                Export CSV
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-outline text-on-surface-variant rounded-lg hover:bg-surface-container-low transition-colors font-medium">
                <span className="material-symbols-outlined">picture_as_pdf</span>
                PDF
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 px-0 md:px-0">
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                aria-label="Search cases"
                className="w-full pl-10 pr-4 py-2 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="Search Case ID, Victim Initials, or District..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                aria-label="Filter by status"
                className="bg-white border border-outline-variant rounded-xl px-4 py-2 text-sm text-on-surface focus:ring-primary focus:border-primary"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Statuses</option>
                <option>New</option>
                <option>Assigned</option>
                <option>Investigating</option>
                <option>Resolved</option>
              </select>
              <select
                aria-label="Filter by district"
                className="bg-white border border-outline-variant rounded-xl px-4 py-2 text-sm text-on-surface focus:ring-primary focus:border-primary"
                value={districtFilter}
                onChange={(e) => setDistrictFilter(e.target.value)}
              >
                <option>All Districts</option>
                <option>Lilongwe</option>
                <option>Blantyre</option>
                <option>Mzimba</option>
                <option>Zomba</option>
              </select>
              <select
                aria-label="Filter by priority"
                className="bg-white border border-outline-variant rounded-xl px-4 py-2 text-sm text-on-surface focus:ring-primary focus:border-primary"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option>Any</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
              </select>
              <button className="px-4 py-2 bg-surface-container-high text-primary rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                More Filters
              </button>
            </div>
          </div>
        </header>

        <div className="p-margin-desktop flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th scope="col" className="px-6 py-4 font-semibold text-on-surface-variant text-sm">Case ID</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-on-surface-variant text-sm">Victim</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-on-surface-variant text-sm">Type</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-on-surface-variant text-sm">District</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-on-surface-variant text-sm">Priority</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-on-surface-variant text-sm">Status</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-on-surface-variant text-sm">Officer</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-on-surface-variant text-sm">Date</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-on-surface-variant text-sm text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {filtered.map((c) => (
                    <tr key={c.id} className="hover:bg-surface-bright transition-colors group" onClick={(e) => { if (!e.target.closest('button')) handleViewDetails(c.id) }}>
                      <td className="px-6 py-4">
                        <span className="font-mono font-bold text-primary">{c.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface">{c.victim}</span>
                          <span className="text-xs text-on-surface-variant">Age: {c.age}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-on-surface">{c.type}</td>
                      <td className="px-6 py-4 text-sm text-on-surface">{c.district}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${c.priorityColor}`} aria-hidden="true" />
                          <span className="text-sm font-medium" aria-label={`Priority ${c.priority}`}>{c.priority}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`px-3 py-1 rounded-full text-[12px] font-semibold inline-flex items-center gap-1 ${c.statusVariant}`}>
                          <span className="material-symbols-outlined text-[14px]">assignment</span>
                          <span>{c.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {c.officer.avatar ? (
                            <img src={c.officer.avatar} alt={`Headshot ${c.officer.name}`} className="w-8 h-8 rounded-full border border-outline-variant object-cover" />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary font-bold text-xs border border-outline-variant">MK</div>
                          )}
                          <span className="text-sm">{c.officer.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">{c.date}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleViewDetails(c.id)}
                          className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-lg text-sm font-semibold hover:opacity-90 active:scale-95 transition-all"
                          aria-label={`View details for ${c.id}`}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
              <span className="text-sm text-on-surface-variant">Showing {filtered.length} of {MOCK_CASES.length} cases</span>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-outline-variant rounded-lg hover:bg-white transition-colors disabled:opacity-40" disabled={page===1} aria-label="Previous page">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <div className="flex gap-1">
                  <button className="w-9 h-9 flex items-center justify-center bg-primary text-white rounded-lg font-semibold text-sm">1</button>
                  <button className="w-9 h-9 flex items-center justify-center hover:bg-white text-on-surface rounded-lg font-medium text-sm transition-colors">2</button>
                  <button className="w-9 h-9 flex items-center justify-center hover:bg-white text-on-surface rounded-lg font-medium text-sm transition-colors">3</button>
                </div>
                <button className="p-2 border border-outline-variant rounded-lg hover:bg-white transition-colors" aria-label="Next page">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-auto bg-primary text-on-primary px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center gap-base">
          <div className="text-center md:text-left">
            <span className="font-title-lg text-title-lg font-bold block mb-1">SafeReport Malawi</span>
            <p className="font-body-md text-body-md text-on-primary/80">© 2024 Ministry of Gender, Community Development and Social Welfare - Government of Malawi</p>
          </div>
          <div className="flex gap-gutter">
            <a className="hover:text-on-primary transition-colors font-body-md text-body-md text-on-primary/80" href="#">Privacy Policy</a>
            <a className="hover:text-on-primary transition-colors font-body-md text-body-md text-on-primary/80" href="#">Help Desk</a>
            <a className="hover:text-on-primary transition-colors font-body-md text-body-md text-on-primary/80" href="#">Contact Us</a>
          </div>
        </footer>

        <div className="fixed bottom-8 right-8 z-[100]">
          <button className="bg-error text-white h-14 w-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group overflow-hidden relative" aria-label="Urgent Alert">
            <span className="material-symbols-outlined text-[28px] group-hover:hidden">emergency_share</span>
            <span className="hidden group-hover:block font-bold text-xs uppercase tracking-tighter">Alert</span>
            <div className="absolute inset-0 bg-white/20 animate-ping rounded-full"></div>
          </button>
        </div>
      </main>
    </div>
  )
}
