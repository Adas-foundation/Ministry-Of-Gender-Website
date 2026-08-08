import { NavLink, Link, useNavigate } from 'react-router-dom'

export default function AdminSidebar() {
  const navigate = useNavigate()
  const navItem = (to, label, icon) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-200 ease-in-out ${
          isActive
            ? 'bg-[#0f4b8f] text-white font-semibold shadow-inner'
            : 'text-slate-300 hover:bg-[#0a3260] hover:text-white'
        }`
      }
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span className="font-semibold">{label}</span>
    </NavLink>
  )

  return (
    <aside className="h-screen w-56 fixed left-0 top-0 bg-[#041c40] text-slate-100 shadow-2xl flex flex-col p-6 z-40 transition-all duration-200 ease-in-out">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
        <p className="text-sm text-slate-300 opacity-80">SafeReport Malawi</p>
      </div>

      <Link
        to="/case-management/create"
        className="mb-8 bg-[#0d4a8a] text-white py-3 px-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0b3c70] transition-colors"
      >
        <span className="material-symbols-outlined text-[20px]">add_circle</span>
        Create New Case
      </Link>

      <nav className="flex-grow space-y-3 overflow-y-auto">
        {navItem('/dashboard', 'Dashboard', 'dashboard')}
        {navItem('/case-management', 'Case Management', 'folder_shared')}
        {navItem('/analytics', 'Analytics', 'analytics')}
        {navItem('/user-management', 'User Management', 'group')}
        {navItem('/district-setup', 'District Setup', 'map')}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-700/50">
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-300 hover:bg-[#0a3260] hover:text-white transition-all duration-200 ease-in-out"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="font-semibold">Settings</span>
        </NavLink>
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem('safereport_user')
            localStorage.removeItem('safereport_token')
            navigate('/login')
          }}
          className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-2xl text-amber-200 hover:bg-amber-300/10 transition-all duration-200 ease-in-out"
          aria-label="Logout and return to login"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="font-semibold">Logout</span>
        </button>
      </div>
    </aside>
  )
}
