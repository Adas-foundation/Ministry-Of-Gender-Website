import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

const Analytics = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="ml-64 min-h-screen bg-[#f8f9ff] text-slate-900">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8">
        <header className="mb-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Admin Portal</p>
              <h1 className="text-3xl md:text-4xl font-semibold text-[#00236f]">Analytics Dashboard</h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                Real-time surveillance, social monitoring, and incident data across Malawi.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                <span className="material-symbols-outlined text-base">calendar_today</span>
                <span>Oct 2023 - Oct 2024</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50"
                  aria-label="View notifications"
                >
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1e3a8a] text-white font-semibold">
                  AM
                </div>
              </div>
            </div>
          </div>
        </header>

        <section aria-labelledby="analytics-kpis" className="grid gap-5 md:grid-cols-4 mb-8">
          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#1e3a8a]">
                <span className="material-symbols-outlined">timer</span>
              </span>
              <span className="rounded-full bg-[#d9f8f0] px-3 py-1 text-xs font-semibold text-[#047857]">-12%</span>
            </div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Avg Response Time</p>
            <p className="mt-3 text-3xl font-semibold text-[#00236f]">4.2 Hours</p>
          </article>

          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ecfdf5] text-[#047857]">
                <span className="material-symbols-outlined">check_circle</span>
              </span>
              <span className="rounded-full bg-[#d9f8f0] px-3 py-1 text-xs font-semibold text-[#047857]">+5.4%</span>
            </div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Resolution Rate</p>
            <p className="mt-3 text-3xl font-semibold text-[#00236f]">89.2%</p>
          </article>

          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fef3c7] text-[#a16207]">
                <span className="material-symbols-outlined">trending_up</span>
              </span>
              <span className="rounded-full bg-[#fee3a1] px-3 py-1 text-xs font-semibold text-[#92400e]">+18%</span>
            </div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Reporting Trends</p>
            <p className="mt-3 text-3xl font-semibold text-[#00236f]">1,482 New</p>
          </article>

          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dbeafe] text-[#1e3a8a]">
                <span className="material-symbols-outlined">record_voice_over</span>
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Active Now</span>
            </div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Cases Pending</p>
            <p className="mt-3 text-3xl font-semibold text-[#00236f]">342 Cases</p>
          </article>
        </section>

        <section className="grid gap-5 xl:grid-cols-[8fr_4fr] mb-8">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#00236f]">Annual Incident Trends</h2>
                <p className="text-sm text-slate-500">Monthly breakdown of reported cases (2023-2024).</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button type="button" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                  Filter
                </button>
                <button type="button" className="rounded-lg bg-[#00236f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e3a8a]">
                  Export
                </button>
              </div>
            </div>
            <div className="relative h-72 overflow-hidden rounded-[24px] bg-slate-100 p-4">
              <div
                className="absolute inset-0 rounded-[24px] border-2 border-dashed border-slate-300"
                role="img"
                aria-label="Placeholder for annual incident trends line chart"
              />
              <div className="relative h-full flex items-center justify-center text-slate-500">
                <span className="text-sm">Line chart placeholder — replace with Chart component</span>
              </div>
            </div>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#00236f]">District Intensity</h2>
              <p className="text-sm text-slate-500">Malawi heatmap snapshot.</p>
            </div>
            <div className="relative overflow-hidden rounded-[24px] bg-slate-100 p-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByICtgUAQu09fMG8Oye8bGa2K9KDa4QnDPfOAfReONyx9W5XAztFn0O2u5uzQiu67B1B4y2V2NghaTemfuObtWtK0S4jUXTiFMDN7Zbk59WtINehafsKOHDIG3CBOybo7g1IZVCVttLlssu_s4E_5PKJ_Hx8Rm81OQA6nO1wBaYyGQNS4egh0893H7se9i7SPQzolfOHTzNpbWzZpN6cTqXfkhhYcCWofEAxRBrFKLEE6i-i6YTIn43a-T7pVx715HM3v-scfK6Q"
                alt="Stylized Malawi map with heat intensity points"
                className="h-72 w-full object-cover rounded-[20px]"
              />
              <div className="pointer-events-none absolute top-4 left-4 rounded-2xl bg-white/90 px-3 py-2 text-xs text-slate-700 shadow-sm">
                <p className="font-semibold text-slate-900">Top district intensity</p>
                <p className="text-slate-500">Lilongwe: 428 cases</p>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              <div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Lilongwe (High)</span>
                  <span className="font-semibold text-[#ba1a1a]">428 cases</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[85%] bg-[#ba1a1a]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Blantyre</span>
                  <span className="font-semibold text-[#00236f]">315 cases</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[65%] bg-[#00236f]" />
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="grid gap-5 lg:grid-cols-2 mb-8">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[#00236f]">Case Categories</h2>
              <span className="material-symbols-outlined text-slate-400">more_horiz</span>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Gender Based Violence</span>
                  <span className="font-semibold text-[#00236f]">542 (36%)</span>
                </div>
                <div className="h-8 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[36%] bg-[#00236f]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Child Protection</span>
                  <span className="font-semibold text-[#006a63]">412 (28%)</span>
                </div>
                <div className="h-8 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[28%] bg-[#006a63]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Elderly Welfare</span>
                  <span className="font-semibold text-[#d97706]">215 (14%)</span>
                </div>
                <div className="h-8 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[14%] bg-[#d97706]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Human Trafficking</span>
                  <span className="font-semibold text-[#ba1a1a]">104 (7%)</span>
                </div>
                <div className="h-8 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[7%] bg-[#ba1a1a]" />
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[#00236f]">Top Performing Officers</h2>
              <button type="button" className="text-[#00236f] text-sm font-semibold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="py-4 font-semibold">Officer Name</th>
                    <th className="py-4 font-semibold">District</th>
                    <th className="py-4 font-semibold">Solved</th>
                    <th className="py-4 font-semibold">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#d9f8f0] text-[#047857] font-semibold">CN</span>
                      <span className="font-medium text-slate-900">Chikondi Ndlovu</span>
                    </td>
                    <td className="py-4 text-slate-700">Zomba</td>
                    <td className="py-4 font-semibold text-[#00236f]">124</td>
                    <td className="py-4 text-[#c2410c]">
                      <span className="flex text-[#d97706]">
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]">star_half</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#dbeafe] text-[#1e3a8a] font-semibold">TM</span>
                      <span className="font-medium text-slate-900">Tiwonge Mtika</span>
                    </td>
                    <td className="py-4 text-slate-700">Mzimba</td>
                    <td className="py-4 font-semibold text-[#00236f]">98</td>
                    <td className="py-4 text-[#c2410c]">
                      <span className="flex text-[#d97706]">
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]">star</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-600 font-semibold">PM</span>
                      <span className="font-medium text-slate-900">Precious Mwale</span>
                    </td>
                    <td className="py-4 text-slate-700">Lilongwe</td>
                    <td className="py-4 font-semibold text-[#00236f]">87</td>
                    <td className="py-4 text-[#c2410c]">
                      <span className="flex text-[#d97706]">
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[18px]">star</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </main>
    </div>
  )
}

export default Analytics
