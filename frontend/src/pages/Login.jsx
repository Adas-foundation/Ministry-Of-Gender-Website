import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

      const roleName = typeof user.role === 'string' ? user.role : user.role?.roleName || ''
      const isStaff =
        roleName === 'admin' ||
        roleName === 'platform_admin' ||
        roleName === 'tenant_admin' ||
        roleName === 'officer' ||
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
    <main className="min-h-screen flex flex-col md:flex-row bg-surface text-on-surface font-body-md">
      {/* Left Side: Visual Anchor & Branding (hidden on small screens) */}
      <section className="relative hidden md:flex md:w-1/2 lg:w-3/5 bg-primary-container overflow-hidden items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="bg-pattern absolute inset-0"></div>
          <div className="absolute inset-0 bg-linear-to-br from-primary via-primary-container to-secondary opacity-30"></div>
        </div>
        <div className="relative z-10 p-margin-desktop max-w-xl text-on-primary">
          <div className="mb-stack-lg">
            <img
              alt="Malawi Government Seal"
              className="h-24 w-auto mb-stack-md drop-shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDki8aAv-XLN2kUR3bF2q1pl191097fA7sC47WWQvMbrZFTdO4PucHRqySrq9LmD1dD70RZj8wrxVadguQsfclg2S_Bz5t-FyDVyVsRsD8GCegtzLLPE3jgu7nMSAl_OpodhGt7qikGuZoii-vEBFn6nOPne2XkeZwmPFy59hyvmf1Du9gbOfwGkJud5gRNfYE5mBm0sIuOKgq7NpdOIBza6mbrGK-BnKFcryNzh8iuDGcJek5vH3pUZU5kIwMMztjBhJ1xgq7Zkg"
            />
            <h1 className="font-display-lg text-display-lg mb-base leading-tight">Ministry of Gender</h1>
            <p className="font-headline-md text-headline-md text-primary-fixed-dim opacity-90">SafeReport Admin Portal</p>
          </div>

          <div className="space-y-stack-md font-body-lg text-body-lg opacity-80 border-l-4 border-secondary-fixed pl-stack-md">
            <p>Ensuring the protection and well-being of every citizen through efficient incident management and data-driven policy.</p>
            <div className="flex items-center gap-base">
              <span className="material-symbols-outlined text-secondary-fixed">verified_user</span>
              <span className="font-label-md text-label-md tracking-wider uppercase">Secure Government Infrastructure</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 opacity-20 pointer-events-none translate-x-1/4 translate-y-1/4">
          <div
            className="w-full h-full bg-no-repeat bg-contain bg-bottom"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEtO7LSneuvZoSTjA-YVzhEnV-hbF0afHBdScC8lgPW7yN4Zn_kh6kSSJeRUZAYqDhDpuaSdy-YsX32LcdXu6KdyFbSyUZ9Z9DIk6BHc_qrKGuSyj5Li981VtlDDHqzoOSx5EXyV8_pXWITiAb02CB_JK5YJavR-2FUGDM-hi3KGs9aA1tqOpLZdYq_Beegy-aiU8QwZ36VcE7uIrdJaXx2_xExOX_Lxef90gEFXpUijFwC1p9rEK-0D7ehN6yY6TeIDqLbpq1pQ')",
            }}
          />
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="flex-1 flex flex-col justify-center items-center p-margin-mobile md:p-margin-desktop bg-surface">
        <div className="md:hidden w-full max-w-md mb-stack-lg text-center">
          <img
            alt="Malawi Government Seal"
            className="h-16 mx-auto mb-base"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDki8aAv-XLN2kUR3bF2q1pl191097fA7sC47WWQvMbrZFTdO4PucHRqySrq9LmD1dD70RZj8wrxVadguQsfclg2S_Bz5t-FyDVyVsRsD8GCegtzLLPE3jgu7nMSAl_OpodhGt7qikGuZoii-vEBFn6nOPne2XkeZwmPFy59hyvmf1Du9gbOfwGkJud5gRNfYE5mBm0sIuOKgq7NpdOIBza6mbrGK-BnKFcryNzh8iuDGcJek5vH3pUZU5kIwMMztjBhJ1xgq7Zkg"
          />
          <h2 className="font-headline-md text-headline-md text-primary">SafeReport Admin</h2>
        </div>

        <div className="w-full max-w-md">
          <div className="bg-surface-container-lowest p-stack-lg rounded-xl login-card-shadow border border-outline-variant/30">
            <div className="mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-base">Admin Login</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Access the centralized reporting dashboard.</p>
            </div>

            {error && (
              <div className="mb-stack-md p-3 bg-red-50 border border-red-200 rounded-lg text-body-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-stack-md" aria-label="Admin login form">
              {/* Email Field */}
              <div className="space-y-base">
                <label className="block font-label-md text-label-md text-on-surface-variant" htmlFor="email">
                  Official Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">mail</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    aria-label="Official Email Address"
                    required
                    placeholder="name@gender.gov.mw"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-surface"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-base">
                <div className="flex justify-between items-center">
                  <label className="block font-label-md text-label-md text-on-surface-variant" htmlFor="password">
                    Password
                  </label>
                  <a className="font-label-sm text-label-sm text-primary hover:underline transition-colors" href="#">Forgot Password?</a>
                </div>

                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    aria-label="Password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-surface"
                  />

                  <button
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                  >
                    <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-base">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded text-primary border-outline focus:ring-primary transition-all"
                />
                <label className="font-label-md text-label-md text-on-surface-variant cursor-pointer select-none" htmlFor="remember">
                  Remember this device for 30 days
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-on-primary py-4 rounded-lg font-title-lg text-title-lg hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-base shadow-lg shadow-primary/20 mt-stack-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Logging in...' : 'Login to Dashboard'}</span>
                {!isSubmitting && <span className="material-symbols-outlined">arrow_forward</span>}
              </button>
            </form>

            {/* Help Link */}
            <div className="mt-stack-lg pt-stack-md border-t border-outline-variant/30 text-center">
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Need technical assistance?{' '}
                <a className="text-primary font-bold hover:underline transition-colors" href="#">Contact IT Support</a>
              </p>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="mt-stack-lg text-center">
            <p className="font-label-sm text-label-sm text-outline">
              © 2026 Ministry of Gender, Community Development and Social Welfare.
              <br />Republic of Malawi.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}