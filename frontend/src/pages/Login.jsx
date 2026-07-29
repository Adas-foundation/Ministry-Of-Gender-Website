import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f8f9ff]">
      {/* Left Side: Visual Anchor & Branding */}
      <section className="relative hidden md:flex md:w-1/2 lg:w-3/5 bg-[#1e3a8a] overflow-hidden items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#1e3a8a 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', opacity: 0.05 }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#00236f] via-[#1e3a8a] to-[#006a63] opacity-30"></div>
        </div>
        
        {/* Content Over Visuals */}
        <div className="relative z-10 p-10 max-w-xl text-white">
          <div className="mb-8">
            <img 
              alt="Malawi Government Seal" 
              className="h-24 w-auto mb-4 drop-shadow-lg" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDki8aAv-XLN2kUR3bF2q1pl191097fA7sC47WWQvMbrZFTdO4PucHRqySrq9LmD1dD70RZj8wrxVadguQsfclg2S_Bz5t-FyDVyVsRsD8GCegtzLLPE3jgu7nMSAl_OpodhGt7qikGuZoii-vEBFn6nOPne2XkeZwmPFy59hyvmf1Du9gbOfwGkJud5gRNfYE5mBm0sIuOKgq7NpdOIBza6mbrGK-BnKFcryNzh8iuDGcJek5vH3pUZU5kIwMMztjBhJ1xgq7Zkg"
            />
            <h1 className="text-[48px] leading-[56px] font-bold font-['Poppins'] mb-2 leading-tight">Ministry of Gender</h1>
            <p className="text-[24px] leading-[32px] font-semibold font-['Poppins'] text-[#b6c4ff] opacity-90">SafeReport Admin Portal</p>
          </div>
          <div className="space-y-4 text-[18px] leading-[28px] font-['Inter'] opacity-80 border-l-4 border-[#80d5cb] pl-4">
            <p>Ensuring the protection and well-being of every citizen through efficient incident management and data-driven policy.</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#80d5cb]">verified_user</span>
              <span className="text-[14px] leading-[20px] font-medium font-['Inter'] tracking-wider uppercase">Secure Government Infrastructure</span>
            </div>
          </div>
        </div>
        
        {/* High Quality Backdrop Image */}
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 opacity-20 pointer-events-none translate-x-1/4 translate-y-1/4">
          <div className="w-full h-full bg-no-repeat bg-contain bg-bottom" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEtO7LSneuvZoSTjA-YVzhEnV-hbF0afHBdScC8lgPW7yN4Zn_kh6kSSJeRUZAYqDhDpuaSdy-YsX32LcdXu6KdyFbSyUZ9Z9DIk6BHc_qrKGuSyj5Li981VtlDDHqzoOSx5EXyV8_pXWITiAb02CB_JK5YJavR-2FUGDM-hi3KGs9aA1tqOpLZdYq_Beegy-aiU8QwZ36VcE7uIrdJaXx2_xExOX_Lxef90gEFXpUijFwC1p9rEK-0D7ehN6yY6TeIDqLbpq1pQ')", backgroundSize: 'contain' }}></div>
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="flex-1 flex flex-col justify-center items-center p-4 md:p-10 bg-[#f8f9ff]">
        {/* Mobile Header Only */}
        <div className="md:hidden w-full max-w-md mb-8 text-center">
          <img 
            alt="Malawi Government Seal" 
            className="h-16 mx-auto mb-2" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDki8aAv-XLN2kUR3bF2q1pl191097fA7sC47WWQvMbrZFTdO4PucHRqySrq9LmD1dD70RZj8wrxVadguQsfclg2S_Bz5t-FyDVyVsRsD8GCegtzLLPE3jgu7nMSAl_OpodhGt7qikGuZoii-vEBFn6nOPne2XkeZwmPFy59hyvmf1Du9gbOfwGkJud5gRNfYE5mBm0sIuOKgq7NpdOIBza6mbrGK-BnKFcryNzh8iuDGcJek5vH3pUZU5kIwMMztjBhJ1xgq7Zkg"
          />
          <h2 className="text-[24px] leading-[32px] font-semibold font-['Poppins'] text-[#00236f]">SafeReport Admin</h2>
        </div>

        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-[#c5c5d3]/30">
            <div className="mb-8">
              <h2 className="text-[32px] leading-[40px] font-semibold font-['Poppins'] text-[#121c2a] mb-2">Admin Login</h2>
              <p className="text-[16px] leading-[24px] font-['Inter'] text-[#444651]">Access the centralized reporting dashboard.</p>
            </div>

            <form className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-[14px] leading-[20px] font-medium font-['Inter'] text-[#444651]" htmlFor="email">Official Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757682]">mail</span>
                  <input 
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#757682] focus:border-[#00236f] focus:ring-2 focus:ring-[#00236f]/20 transition-all outline-none bg-[#f8f9ff]" 
                    id="email" 
                    placeholder="name@gender.gov.mw" 
                    required 
                    type="email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-[14px] leading-[20px] font-medium font-['Inter'] text-[#444651]" htmlFor="password">Password</label>
                  <a className="text-[12px] leading-[16px] font-semibold font-['Inter'] text-[#00236f] hover:underline transition-colors" href="#">Forgot Password?</a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757682]">lock</span>
                  <input 
                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-[#757682] focus:border-[#00236f] focus:ring-2 focus:ring-[#00236f]/20 transition-all outline-none bg-[#f8f9ff]" 
                    id="password" 
                    placeholder="••••••••" 
                    required 
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#757682] hover:text-[#121c2a] transition-colors" 
                    onClick={togglePassword} 
                    type="button"
                  >
                    <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input className="w-4 h-4 rounded text-[#00236f] border-[#757682] focus:ring-[#00236f] transition-all" id="remember" type="checkbox"/>
                <label className="text-[14px] leading-[20px] font-medium font-['Inter'] text-[#444651] cursor-pointer select-none" htmlFor="remember">Remember this device for 30 days</label>
              </div>

              {/* Login Button */}
              <button 
                className="w-full bg-[#00236f] text-white py-4 rounded-lg text-[20px] leading-[28px] font-medium font-['Poppins'] hover:bg-[#1e3a8a] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00236f]/20 mt-4" 
                type="submit"
              >
                <span>Login to Dashboard</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>

            {/* Help Link */}
            <div className="mt-8 pt-4 border-t border-[#c5c5d3]/30 text-center">
              <p className="text-[12px] leading-[16px] font-semibold font-['Inter'] text-[#444651]">
                Need technical assistance? <a className="text-[#00236f] font-bold hover:underline transition-colors" href="#">Contact IT Support</a>
              </p>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="mt-8 text-center">
            <p className="text-[12px] leading-[16px] font-semibold font-['Inter'] text-[#757682]">
              © 2024 Ministry of Gender, Community Development and Social Welfare.
              <br/>Republic of Malawi.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
