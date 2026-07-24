import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/report-incident', label: 'Report Incident' },
    { path: '/track-report', label: 'Track Report' },
    { path: '/resources', label: 'Resources' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-surface-container-lowest border-b border-border-subtle shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 py-3.5 flex justify-between items-center">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            className="h-9 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4cEXAy93x5R6NuqKVNvlEJ7p29UIlTldTyc-FJWVy8oi64uCg-bvX4RdXmEgHhmk4dFJfE5huyM_kXH3ioM-hJR0YIJLXsak6Zo9lPNo99-2KFwTvarCLS2IfeC4ofDuB7wKp5jHWkD0qSxAlo_3_YDGkvXKu0PSwZL1mfHm7DdeQddV1uJJVg-4E-uv0F8sQIedQZ23G0mbvTxOoWQwv-f-rRdNEzZVSCEcxrSiGCJOxMyNv9JWkNjO8lj4VERceMXlXxPDRxCg"
            alt="Malawi Crest"
          />
          <span className="font-headline-h4 text-headline-h4 font-bold text-on-surface">SafeReport</span>
        </div>

        {/* Primary nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body-normal text-body-normal transition-colors pb-1 ${
                location.pathname === item.path
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
         
          <button
            className="material-symbols-outlined text-on-surface-variant hover:text-primary p-2 hover:bg-surface-container-low rounded-full transition-colors text-[20px]"
            aria-label="Change language"
          >
            language
          </button>

          <Link
            to="/login"
            className="bg-surface-faint text-on-surface font-label-btn text-label-btn px-4 py-2 rounded-lg border border-border-subtle hover:bg-surface-container-high transition-all"
          >
            Login
          </Link>

          <Link
            to="/emergency-sos"
            className="bg-emergency-red text-on-primary font-label-btn text-label-btn px-4 py-2 rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              emergency_home
            </span>
            Emergency SOS
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;