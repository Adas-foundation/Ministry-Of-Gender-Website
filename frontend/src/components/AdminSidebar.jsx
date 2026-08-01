import { NavLink, Link, useNavigate } from 'react-router-dom'

export default function AdminSidebar() {
  const navigate = useNavigate()
  const navItem = (to, label, icon) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out ${
          isActive ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant hover:bg-surface-container-highest'
        }`
      }
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span className="font-label-md text-label-md">{label}</span>
    </NavLink>
  )

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface shadow-md flex flex-col p-stack-md z-40 transition-all duration-200 ease-in-out">
      <div className="mb-stack-lg">
        <h1 className="font-title-lg text-title-lg text-primary font-bold">Admin Portal</h1>
        <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">SafeReport Malawi</p>
      </div>

      <Link
        to="/case-management/create"
        className="mb-stack-lg bg-primary text-on-primary py-3 px-4 rounded-lg font-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        <span className="material-symbols-outlined text-[20px]">add_circle</span>
        Create New Case
      </Link>

      <nav className="flex-grow space-y-1 overflow-y-auto">
        {navItem('/dashboard', 'Dashboard', 'dashboard')}
        {navItem('/case-management', 'Case Management', 'folder_shared')}
        {navItem('/analytics', 'Analytics', 'analytics')}
        {navItem('/user-management', 'User Management', 'group')}
        {navItem('/district-setup', 'District Setup', 'map')}
      </nav>

      <div className="mt-auto pt-stack-md border-t border-outline-variant">
        <NavLink to="/settings" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all duration-200 ease-in-out">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-md text-label-md">Settings</span>
        </NavLink>
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem('safereport_user')
            localStorage.removeItem('safereport_token')
            navigate('/login')
          }}
          className="w-full text-left flex items-center gap-3 px-4 py-3 text-error hover:bg-error-container/20 rounded-lg transition-all duration-200 ease-in-out"
          aria-label="Logout and return to login"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="font-label-md text-label-md">Logout</span>
        </button>
      </div>
    </aside>
  )
}
