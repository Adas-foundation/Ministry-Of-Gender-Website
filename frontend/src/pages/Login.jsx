import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// ---------------------------------------------------------------------------
// Palette (used as arbitrary-value Tailwind classes throughout):
//   ink      #14231C   deep emerald-black, the "night" the dawn rises from
//   pine     #2F6B4F   primary — Ministry green, growth & protection
//   pineDark #234F3B   hover / pressed state for pine
//   dawn     #90a8ff   warm amber accent — used sparingly, for the sunrise
//   paper    #F6F2EA   warm off-white background
//   card     #FFFDF9   form card surface
//   inkText  #1C1C1A   body text
//   mutedText#6B6459   secondary text
//   line     #E4DCCB   hairline borders
//
// Type: 'Fraunces' (display serif, headline personality) + 'Inter' (UI/body).
// Add these to index.html if not already present:
//   <link rel="preconnect" href="https://fonts.googleapis.com">
//   <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
// ---------------------------------------------------------------------------

const serif = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" }
const sans = { fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconLock(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" strokeLinecap="round" />
      <circle cx="12" cy="15.2" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconEye({ off, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.8" />
      {off && <path d="M4 20 20 4" strokeLinecap="round" />}
    </svg>
  )
}
function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 3.5 4.5 6.3v5.4c0 4.6 3.2 8.3 7.5 9.8 4.3-1.5 7.5-5.2 7.5-9.8V6.3L12 3.5Z" strokeLinejoin="round" />
      <path d="m8.7 12.3 2.2 2.2 4.4-4.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconBadge(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="9" r="5.2" />
      <path d="m8.3 13.2-1.6 7.3 5.3-2.9 5.3 2.9-1.6-7.3" strokeLinejoin="round" />
    </svg>
  )
}
function IconHistory(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" strokeLinecap="round" />
      <path d="M3.2 4.5v4.3h4.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8v4.4l3 1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconArrow(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconAlert(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5.5M12 16.2v.1" strokeLinecap="round" />
    </svg>
  )
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.message || 'Invalid email or password')
      }

      const data = await response.json()
      const token = data.access_token || data.accessToken
      const user = data.user || {}

      localStorage.setItem('safereport_token', token)
      localStorage.setItem('safereport_user', JSON.stringify(user))

      const roleName = (typeof user.role === 'string' ? user.role : user.role?.roleName || '').toLowerCase()
      const isStaff =
        roleName === 'admin' ||
        roleName === 'platform_admin' ||
        roleName === 'tenant_admin' ||
        roleName === 'officer' ||
        roleName === 'case_officer' ||
        roleName === 'case_manager'

      navigate(isStaff ? '/dashboard' : '/')
    } catch (err) {
      console.error('Authentication error', err)
      setError(err.message || 'Login failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-[#EAF0FB]" style={sans}>
      {/* Left: brand panel, the "night before dawn" */}
      <section className="relative hidden md:flex md:w-[44%] items-center justify-center overflow-hidden bg-[#00236F]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#1D4ED8]/30 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-[#90a8ff]/20 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          {[46, 37, 28, 20, 13].map((r, i) => (
            <circle key={r} cx="6" cy="100" r={r} fill="none" stroke="#90a8ff" strokeOpacity={0.14 + i * 0.02} strokeWidth="0.4" />
          ))}
          <circle cx="6" cy="100" r="9" fill="#90a8ff" opacity="0.9" />
        </svg>

        <div className="relative z-10 px-14 py-16 max-w-md">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-11 w-11 rounded-full border border-[#90a8ff]/50 flex items-center justify-center">
              <IconShield className="h-5 w-5 text-[#90a8ff]" />
            </div>
            <div style={sans} className="text-[11px] tracking-[0.2em] uppercase text-[#EFE8D8]/70 leading-relaxed">
              Republic of Malawi
              <br />
              Ministry of Gender
            </div>
          </div>

          <h1 style={serif} className="text-[2.75rem] leading-[1.08] font-medium text-[#F6F2EA] mb-5">
            A safe place
            <br />
            to do the work.
          </h1>
          <p style={{ ...serif, fontStyle: 'italic' }} className="text-lg text-[#90a8ff] mb-10 max-w-sm">
            SafeReport Admin — where every case is handled with care and accountability.
          </p>

          <ul className="space-y-4">
            {[
              [IconLock, 'Access controls on every case record'],
              [IconBadge, 'Restricted to authorised personnel only'],
              [IconHistory, 'Every login and change is logged'],
            ].map(([Icon, text]) => (
              <li key={text} className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-full bg-[#1D4ED8]/40 border border-[#90a8ff]/30 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-[#90a8ff]" />
                </span>
                <span className="text-[#EFE8D8]/85 text-[15px]" style={sans}>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Right: form */}
      <section className="relative flex-1 flex flex-col justify-center items-center px-6 py-14 md:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#1D4ED8]/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#90a8ff]/10 blur-3xl" />
        </div>

        {/* mobile brand mark */}
        <div className="md:hidden w-full max-w-sm mb-10 text-center relative">
          <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-[#00236F] flex items-center justify-center shadow-lg">
            <IconShield className="h-5 w-5 text-[#90a8ff]" />
          </div>
          <h2 style={serif} className="text-2xl font-medium text-[#00236F]">
            SafeReport Admin
          </h2>
          <p className="text-xs text-[#6B6459] tracking-wide mt-1">Ministry of Gender · Republic of Malawi</p>
        </div>

        <div className="relative w-full max-w-md">
          <div className="hidden md:flex items-center justify-between mb-6">
            <p className="text-xs tracking-[0.2em] uppercase text-[#6B6459]">SafeReport</p>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#6B6459]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1D4ED8]" />
              Secure portal
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-[#EFE6D6] p-8 md:p-10">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-[#00236F] flex items-center justify-center">
                  <IconShield className="h-5 w-5 text-[#90a8ff]" />
                </div>
                <span className="text-xs tracking-[0.18em] uppercase text-[#6B6459]">Staff access</span>
              </div>
              <h2 style={serif} className="text-3xl font-medium text-[#1C1C1A] mb-2">
                Sign in
              </h2>
              <p className="text-[15px] text-[#6B6459]">Access the centralised case reporting dashboard.</p>
            </div>

            {error && (
              <div role="alert" className="mb-6 flex items-start gap-2.5 px-4 py-3 rounded-lg bg-[#FBEAE9] border border-[#E7C2BE] text-[#8A2E26] text-sm">
                <IconAlert className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Admin login form">
            <div>
              <label htmlFor="email" className="block text-xs font-medium tracking-wide uppercase text-[#6B6459] mb-2">
                Official email address
              </label>
              <div className="relative">
                <IconMail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#9C9384]" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  placeholder="name@gender.gov.mw"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E4DCCB] bg-[#FFFDF9] text-[#1C1C1A] placeholder:text-[#B4AB9A] focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/12 shadow-sm outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-xs font-medium tracking-wide uppercase text-[#6B6459]">
                  Password
                </label>
                <a href="#" className="text-xs font-medium text-[#1D4ED8] hover:text-[#90a8ff] transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <IconLock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#9C9384]" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-11 py-3 rounded-xl border border-[#E4DCCB] bg-[#FFFDF9] text-[#1C1C1A] placeholder:text-[#B4AB9A] focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/12 shadow-sm outline-none transition-all"
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9C9384] hover:text-[#1C1C1A] transition-colors"
                >
                  <IconEye off={showPassword} className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

            <label htmlFor="remember" className="flex items-center justify-between gap-3 cursor-pointer select-none pt-1">
              <span className="text-sm text-[#6B6459]">Remember this device for 30 days</span>
              <span className="relative inline-flex h-5 w-9 shrink-0 items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="peer sr-only"
                />
                <span className="absolute inset-0 rounded-full bg-[#E4DCCB] peer-checked:bg-[#1D4ED8] transition-colors" />
                <span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4" />
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00236F] text-[#F6F2EA] py-3.5 rounded-xl font-medium text-[15px] hover:bg-[#1D4ED8] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2 shadow-md shadow-[#00236F]/30 disabled:opacity-60 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-[#F6F2EA]/40 border-t-[#F6F2EA] animate-spin" />
                  <span>Signing in…</span>
                </>
              ) : (
                <>
                  <span>Sign in to dashboard</span>
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            </form>

            <p className="mt-8 text-center text-sm text-[#6B6459]">
              Need technical assistance?{' '}
              <a href="#" className="font-medium text-[#1D4ED8] hover:text-[#90a8ff] transition-colors">
                Contact IT support
              </a>
            </p>
          </div>
        </div>

        <p className="relative mt-6 text-center text-[11px] leading-relaxed text-[#9C9384]">
          © 2026 Ministry of Gender, Community Development and Social Welfare.
          <br />
          Republic of Malawi.
        </p>
      </section>
    </main>
  )
}