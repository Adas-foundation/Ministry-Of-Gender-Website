import { useMemo, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'

const districtData = [
  {
    id: 'lilongwe',
    name: 'Lilongwe',
    region: 'Central Region',
    lead: 'B. Kawinga',
    activeCases: 124,
    units: '14 Units',
    status: 'Optimal',
    statusStyle: 'bg-secondary/10 text-secondary border-secondary/20',
    benchmark: '94.2%',
    coverage: '94.2%',
    capacity: 88,
    logistics: 62,
    mapImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNRXfBnwDSWjhyimAKODNKa3HeLxJ_sHMPuJ3E6Qr7S5yrvERMiB0Eep0tSIbsVZ8z_pfl7fx2elsCfZdzlOleF1Gpd1_uk8PwJSfFMEk09MMEljX6Q0YJpNbdeNL35g03xbUh_1Grie4hnsWKFKG0lWSANhwlVfSxckSaRT6FN7m7ctJuyuTsdMrd4krj0Yl9hHAiL8SMFMKOcmH2UVl6rJa4zwtn4OqWkQklBqPdbqsiEw4oNBfr_EYzv8rRQOtavAOzyeFkTQ',
    summary: 'Live operations are stable with strong district coordination.',
  },
  {
    id: 'blantyre',
    name: 'Blantyre',
    region: 'Southern Region',
    lead: 'N. Maseko',
    activeCases: 98,
    units: '11 Units',
    status: 'Optimal',
    statusStyle: 'bg-secondary/10 text-secondary border-secondary/20',
  },
  {
    id: 'mzuzu',
    name: 'Mzuzu',
    region: 'Northern Region',
    lead: 'T. Chirwa',
    activeCases: 42,
    units: '5 Units',
    status: 'Understaffed',
    statusStyle: 'bg-tertiary-fixed text-on-tertiary-fixed-variant border-tertiary/20',
  },
  {
    id: 'salima',
    name: 'Salima',
    region: 'Central Region',
    lead: 'J. Banda',
    activeCases: 15,
    units: '3 Units',
    status: 'Alert',
    statusStyle: 'bg-error-container text-on-error-container border-error/20',
  },
]

const DistrictSetup = () => {
  const [searchText, setSearchText] = useState('')
  const [regionFilter, setRegionFilter] = useState('All Regions')
  const [selectedDistrict, setSelectedDistrict] = useState(districtData[0])

  const filteredDistricts = useMemo(() => {
    return districtData.filter((district) => {
      const matchesSearch =
        district.name.toLowerCase().includes(searchText.toLowerCase()) ||
        district.lead.toLowerCase().includes(searchText.toLowerCase())
      const matchesRegion =
        regionFilter === 'All Regions' || district.region === regionFilter
      return matchesSearch && matchesRegion
    })
  }, [searchText, regionFilter])

  const handleDistrictSelect = (districtId) => {
    const district = districtData.find((item) => item.id === districtId)
    if (district) setSelectedDistrict(district)
  }

  const handleSearchChange = (event) => {
    setSearchText(event.target.value)
  }

  const handleRegionChange = (event) => {
    setRegionFilter(event.target.value)
  }

  const handleClearSearch = () => {
    setSearchText('')
    setRegionFilter('All Regions')
  }

  const handleAddDistrict = () => {
    console.log('Add new district action triggered')
  }

  const handleExport = () => {
    console.log('Export district list action triggered')
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="ml-64 min-h-screen bg-[#f8f9ff] text-slate-900">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8">
        <header className="mb-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Admin Portal</p>
              <h1 className="mt-3 text-3xl font-semibold text-[#00236f]">District Setup</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Configure regional administrative controls, staffing, and live operations across Malawi districts.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleAddDistrict}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00236f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1e3a8a]"
              >
                <span className="material-symbols-outlined">add</span>
                Add District
              </button>
              <button
                type="button"
                onClick={handleExport}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <span className="material-symbols-outlined">download</span>
                Export CSV
              </button>
            </div>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[7fr_5fr]">
          <div className="space-y-6">
            <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="relative w-full sm:w-80">
                    <label htmlFor="district-search" className="sr-only">
                      Search districts
                    </label>
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      search
                    </span>
                    <input
                      id="district-search"
                      value={searchText}
                      onChange={handleSearchChange}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 focus:border-[#00236f] focus:outline-none focus:ring-2 focus:ring-[#00236f]/10"
                      placeholder="Search districts or lead officer"
                      aria-label="Search districts or lead officer"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label htmlFor="region-filter" className="text-sm font-semibold text-slate-500">
                      Region:
                    </label>
                    <select
                      id="region-filter"
                      value={regionFilter}
                      onChange={handleRegionChange}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#00236f] focus:ring-2 focus:ring-[#00236f]/10"
                    >
                      <option>All Regions</option>
                      <option>Northern Region</option>
                      <option>Central Region</option>
                      <option>Southern Region</option>
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="text-sm font-semibold text-[#00236f] hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            </section>

            <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="overflow-x-auto custom-scrollbar">
                <table className="min-w-full border-collapse text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        District
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Lead Officer
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Active Cases
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Centers
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Status
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 text-right">
                        View
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredDistricts.map((district) => (
                      <tr
                        key={district.id}
                        onClick={() => handleDistrictSelect(district.id)}
                        className={`cursor-pointer transition-colors hover:bg-slate-50 ${
                          selectedDistrict?.id === district.id ? 'bg-slate-100' : ''
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold text-slate-900">{district.name}</p>
                            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                              {district.region}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#00236f] text-xs font-bold">
                              {district.lead
                                .split(' ')
                                .map((part) => part[0])
                                .join('')}
                            </div>
                            <span className="text-sm text-slate-700">{district.lead}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">{district.activeCases}</span>
                            <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
                              <div className={`h-full rounded-full bg-[#00236f]`} style={{ width: `${Math.min(100, district.activeCases)}%` }} />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-700">{district.units}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${district.statusStyle}`}>
                            {district.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-slate-500">
                          <span className="material-symbols-outlined">chevron_right</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
                <span>Showing {filteredDistricts.length} of {districtData.length} districts</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl bg-[#00236f] px-4 py-2 text-sm font-semibold text-white"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-2xl bg-[#eff6ff] p-3 text-[#00236f]">
                    <span className="material-symbols-outlined">timer</span>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">−12%</span>
                </div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Avg. Response Time</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">2.4 Hours</p>
                <p className="mt-2 text-xs text-slate-500">Ministry Benchmark: &lt; 4 Hours</p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-2xl bg-[#ecfdf5] p-3 text-[#047857]">
                    <span className="material-symbols-outlined">fact_check</span>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">+5.2%</span>
                </div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Resolution Rate</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">87.4%</p>
                <p className="mt-2 text-xs text-slate-500">Quarterly KPI Status: On Track</p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-2xl bg-[#ffdfa0] p-3 text-[#92400e]">
                    <span className="material-symbols-outlined">diversity_3</span>
                  </div>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">-2.1%</span>
                </div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Active Personnel</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">412 Staff</p>
                <p className="mt-2 text-xs text-slate-500">8 vacancies in Northern Region</p>
              </article>
            </section>
          </div>

          <div className="space-y-6">
            <article className="sticky top-24 rounded-[28px] border border-primary/20 bg-white shadow-sm">
              <div className="rounded-t-[28px] bg-[#00236f] p-6 text-white">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-2xl font-semibold">{selectedDistrict.name} District</h2>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                    Active Focus
                  </span>
                </div>
              </div>
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${selectedDistrict.mapImage}')`,
                  }}
                  aria-label={`Map view for ${selectedDistrict.name} district`}
                  role="img"
                />
                <div className="absolute inset-0 bg-[#00236f]/5" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#00236f] shadow-md hover:bg-slate-50"
                    aria-label="Zoom in map"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#00236f] shadow-md hover:bg-slate-50"
                    aria-label="Zoom out map"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00236f] shadow-sm">
                  <span className="inline-flex h-2 w-2 rounded-full bg-red-500 animate-pulse mr-2" aria-hidden="true" />
                  LIVE OPERATIONS
                </div>
              </div>
              <div className="space-y-6 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#00236f]">
                    <span className="material-symbols-outlined text-2xl">person_pin_circle</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Lead District Officer</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">{selectedDistrict.lead}</h3>
                    <button
                      type="button"
                      onClick={() => console.log('Reassign officer action')}
                      className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-[#eff6ff] px-4 py-2 text-sm font-semibold text-[#00236f] hover:bg-[#dbeafe]"
                    >
                      <span className="material-symbols-outlined text-sm">manage_accounts</span>
                      Reassign Officer
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Centers</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">{selectedDistrict.units}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Coverage</p>
                    <p className="mt-2 text-2xl font-bold text-[#006a63]">{selectedDistrict.coverage || '94.2%'}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      <span>Staff Capacity</span>
                      <span className="font-semibold text-slate-900">{selectedDistrict.capacity || 88}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[88%] bg-[#006a63]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      <span>Logistics Availability</span>
                      <span className="font-semibold text-slate-900">{selectedDistrict.logistics || 62}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[62%] bg-[#d97706]" />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => console.log('Full district report action')}
                className="w-full rounded-[24px] bg-[#1e3a8a] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#162f61]"
              >
                <span className="material-symbols-outlined">assessment</span>
                Full District Report
              </button>
            </article>
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}

export default DistrictSetup
