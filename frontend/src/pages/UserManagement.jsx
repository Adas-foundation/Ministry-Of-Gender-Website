import { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'

const initialFilters = {
  role: 'All Roles',
  district: 'All Districts',
  status: 'All Status',
}

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState(initialFilters)
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleFilterChange = (event) => {
    const { name, value } = event.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setFilters(initialFilters)
  }

  const handleAddUser = () => {
    // Placeholder action: open add user modal or navigate to add user screen
    console.log('Add new user action triggered')
  }

  const handleRowAction = (userId, action) => {
    // Placeholder action: edit/delete/more details
    console.log(`User ${userId} action: ${action}`)
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="ml-64 min-h-screen bg-[#f8f9ff] text-slate-900">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8">
        <header className="mb-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <nav className="mb-3 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <span>Admin Portal</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="font-semibold text-slate-900">User Management</span>
              </nav>
              <h1 className="text-3xl font-semibold text-[#00236f]">Officer & Staff Directory</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Manage credentials and access levels for registered government officials, social workers, and law enforcement officers.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative w-full sm:w-72">
                <label htmlFor="user-search" className="sr-only">Search users</label>
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input
                  id="user-search"
                  name="search"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 focus:border-[#00236f] focus:outline-none focus:ring-2 focus:ring-[#00236f]/10"
                  placeholder="Search by name or ID..."
                  aria-label="Search users by name or ID"
                />
              </div>
              <button
                type="button"
                onClick={handleAddUser}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00236f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1e3a8a]"
              >
                <span className="material-symbols-outlined">person_add</span>
                Add New User
              </button>
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-4 mb-8">
          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#00236f]">
                <span className="material-symbols-outlined">badge</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Total Staff</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">1,284</p>
              </div>
            </div>
          </article>

          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecfdf5] text-[#047857]">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Active Now</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">432</p>
              </div>
            </div>
          </article>

          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fef3c7] text-[#a16207]">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Pending Verification</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">18</p>
              </div>
            </div>
          </article>

          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fee2e2] text-[#b91c1c]">
                <span className="material-symbols-outlined">block</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Suspended</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">7</p>
              </div>
            </div>
          </article>
        </section>

        <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm mb-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <label htmlFor="filter-role" className="text-sm font-semibold text-slate-500">Role:</label>
                <select
                  id="filter-role"
                  name="role"
                  value={filters.role}
                  onChange={handleFilterChange}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#00236f] focus:ring-2 focus:ring-[#00236f]/10"
                >
                  <option>All Roles</option>
                  <option>Admin</option>
                  <option>Social Worker</option>
                  <option>Police</option>
                  <option>District Officer</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="filter-district" className="text-sm font-semibold text-slate-500">District:</label>
                <select
                  id="filter-district"
                  name="district"
                  value={filters.district}
                  onChange={handleFilterChange}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#00236f] focus:ring-2 focus:ring-[#00236f]/10"
                >
                  <option>All Districts</option>
                  <option>Lilongwe</option>
                  <option>Blantyre</option>
                  <option>Mzuzu</option>
                  <option>Zomba</option>
                  <option>Salima</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="filter-status" className="text-sm font-semibold text-slate-500">Status:</label>
                <select
                  id="filter-status"
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#00236f] focus:ring-2 focus:ring-[#00236f]/10"
                >
                  <option>All Status</option>
                  <option>Active</option>
                  <option>On Leave</option>
                  <option>Suspended</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-sm font-semibold text-[#00236f] hover:underline"
            >
              Clear All
            </button>
          </div>
        </section>

        <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Name & ID</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Role</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">District</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Last Login</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#eff6ff]">
                        <img
                          className="h-full w-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjOzN_b4b4PM8mf7hJBlYyv_nBRiHEPy4Fws4zaKLkg2VenkAYcGCQJNTYVHMfKg_PF3ihxP01Y_q1ZoGxs53LtaONrfDF2QV0bc__rssuQNSp-p68RZhOLwqnut16k1gdOxt7XMaTA4OpvO1lGgydKUvp-PkGWAfdaj4dU8vCAxsAa1LiCaRKR1RhdVJPOefL-1aV_nMZdftepBb6XwRDj0DhZEY-TleUu0vahP0zeXM1ap-YOftieqVeKxj0q4W0h1eXlgab-Q"
                          alt="Headshot of Chisomo Phiri"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Chisomo Phiri</p>
                        <p className="text-sm text-slate-500">ID: MW-SW-0421</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="material-symbols-outlined text-[18px] text-[#047857]">psychology</span>
                      <span>Social Worker</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">Lilongwe Central</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    <p>Oct 24, 2024</p>
                    <p className="text-sm text-slate-500">09:12 AM</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => handleRowAction('MW-SW-0421', 'details')}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      aria-label="View actions for Chisomo Phiri"
                    >
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#eff6ff]">
                        <img
                          className="h-full w-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHw6HqJtXmuTYMEp3x5RixE9TpL5hR3ZRfdA1pvTXz6_8pO87lMFUfX9tFKN9iiZrhkt35AVic1CXQQxlP1PgGg-UsfAzYn_IzDvFXyww31N_ueyxiy5CjftGxhi8th_GBVsMwuNhZ1d-jNzsaU3wvevahkjhDKKehJp7f7DdllaBVXD6GlX45QmO_5rbsKVoKC7Qcg3vCWffs_XTzLXoUc9QelrQ9jAjZfrBPeJQGG51a4XfyzY1BpUCG0eCW_6h64Eq6dgfA3A"
                          alt="Headshot of Inspector John Mwale"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Inspector John Mwale</p>
                        <p className="text-sm text-slate-500">ID: MW-POL-8832</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="material-symbols-outlined text-[18px] text-[#00236f]">policy</span>
                      <span>Police</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">Blantyre Urban</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                      <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
                      On Leave
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    <p>Oct 20, 2024</p>
                    <p className="text-sm text-slate-500">04:45 PM</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => handleRowAction('MW-POL-8832', 'details')}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      aria-label="View actions for Inspector John Mwale"
                    >
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#eff6ff]">
                        <img
                          className="h-full w-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmuuHGvc_tTjl9Ya8YDBF_TZdWpbuw2YXDV0dy0LQM27190nAU8jlFFHi0pG6UFbGaGaVr7R5JJTWXEJA89W2y3ukIu-bF8OCTRKEJJkdpPuu9oOnPviMWeNwRyXIeqY9-jPWFenAjKUfafuAW9GhAQg_y--4YuooAXMhpi_ZD43hhWbVDiSlXwCFZBGh_DoTmw-iQJG0OJ2cEz9J_9k1UskG7s3aVgubsFhYcCVlCZVGKQqs5Tq7Ec9OrziFBGQBLvosatcSyeQ"
                          alt="Headshot of Tiwonge Banda"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Tiwonge Banda</p>
                        <p className="text-sm text-slate-500">ID: MW-DO-1102</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="material-symbols-outlined text-[18px] text-[#006a63]">location_city</span>
                      <span>District Officer</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">Mzuzu North</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    <p>Today</p>
                    <p className="text-sm text-slate-500">08:00 AM</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => handleRowAction('MW-DO-1102', 'details')}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      aria-label="View actions for Tiwonge Banda"
                    >
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#eff6ff]">
                        <img
                          className="h-full w-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiqRni2I17-WduCidpWk-QCXWoeRe42oHzSo0MRQjPdiHAkFAAXDPNdVT2xg024-vmuJzWOVDQQ82lijWYXvuco18ByEkVfBZuwc9aoQTmn3-C8Yl16DGVPrB86oJhJAwjGdu-L4i5K2bEBTR36PUMeSm3AqP_45VOs-NAKctzxb0urdNujA6mvkSi2voq_r76GmDXeBisQisYaXHO1qDnEgcc0hFMZANyNV8nLqbNLgcKS2RKVOqH0oNdK2RzC_NyceP6q8CBdA"
                          alt="Headshot of Dr. Kondwani Kumwenda"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Dr. Kondwani Kumwenda</p>
                        <p className="text-sm text-slate-500">ID: MW-ADM-0005</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="material-symbols-outlined text-[18px] text-[#00236f]" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
                      <span>Admin</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">National HQ</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                      <span className="h-2 w-2 rounded-full bg-red-500" aria-hidden="true" />
                      Suspended
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    <p>Sep 12, 2024</p>
                    <p className="text-sm text-slate-500">02:30 PM</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => handleRowAction('MW-ADM-0005', 'details')}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      aria-label="View actions for Dr. Kondwani Kumwenda"
                    >
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 md:flex md:items-center md:justify-between">
            <p className="text-sm text-slate-600">Showing 1 to 10 of 1,284 officers</p>
            <div className="mt-3 flex flex-wrap items-center gap-2 md:mt-0">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`inline-flex h-10 min-w-[40px] items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold transition ${
                    currentPage === page
                      ? 'bg-[#00236f] text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  aria-label={`Go to page ${page}`}
                >
                  {page}
                </button>
              ))}
              <span className="text-sm text-slate-500">...</span>
              <button
                type="button"
                onClick={() => setCurrentPage(129)}
                className="inline-flex h-10 min-w-[40px] items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-100"
                aria-label="Go to last page"
              >
                129
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                aria-label="Next page"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      </main>
    </div>
  )
}

export default UserManagement
