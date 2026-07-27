import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32" style={{ background: 'radial-gradient(circle at top right, #e6eeff 0%, #f8f9ff 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e3a8a] text-white text-[14px] font-['Inter']">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              Official Government Portal
            </div>
            <h1 className="text-[48px] leading-[56px] font-[700] text-[#00236f] font-['Poppins']">
              Protecting Every Citizen Through <span className="text-[#006a63]">Safe Digital Reporting</span>
            </h1>
            <p className="text-[18px] leading-[28px] text-gray-600 max-w-2xl font-['Inter']">
              A secure, confidential, and compassionate platform for reporting gender-based violence and social issues. Your safety is our priority, and your voice triggers institutional action.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/report"
                className="bg-[#00236f] text-white px-8 py-4 rounded-xl text-[20px] font-[500] shadow-lg hover:opacity-90 active:scale-95 transition-all flex items-center gap-3 font-['Poppins']"
              >
                <span className="material-symbols-outlined">campaign</span>
                Report Incident
              </Link>
              <Link 
                to="/track"
                className="bg-[#d9e3f6] text-[#00236f] px-8 py-4 rounded-xl text-[20px] font-[500] border border-gray-300 hover:opacity-90 active:scale-95 transition-all flex items-center gap-3 font-['Poppins']"
              >
                <span className="material-symbols-outlined">search</span>
                Track Report
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                className="w-full aspect-[4/5] object-cover" 
                alt="A professional and warm illustration of a diverse group of Malawian citizens engaging with a kind social worker" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGU81etA-rdz9J3I2FuFM1WoAwdDIdJg6mId-b5sUpydPfFdG6hmGNgSGohgBLaB0hjwRAx41aBY4diP4b22PvHQvfYZO9H0E5gZg60Q1Cl14iX9qXJXhH_21I1hE2x0NZsZDXdsjfLtrYYRhskCnZrDLPtcAqQ6oYnqtqhSBoAEUdZDOciZc1LZt68T3InCEmj0Xye86d9zv8r5zLWXm1148-7TME5ADfsjr_mu8LdjQwRKrgJmQLawxH1uAc6kPU0dD2dKbjyQ"
              />
            </div>
            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -left-12 bg-white/80 backdrop-blur-sm border border-white/50 p-6 rounded-2xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#99efe5] rounded-full">
                  <span className="material-symbols-outlined text-[#006f67]">done_all</span>
                </div>
                <div>
                  <p className="text-[12px] text-gray-600 uppercase tracking-tighter font-['Inter']">Case Resolution Rate</p>
                  <p className="text-[24px] font-[600] text-[#00236f] font-['Poppins']">94.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-300 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[#00236f] text-4xl mb-4">analytics</span>
              <p className="text-[48px] font-[700] text-[#00236f] font-['Poppins']">12k+</p>
              <p className="text-[14px] text-gray-600 uppercase font-['Inter']">Cases Reported</p>
            </div>
            <div className="bg-white border border-gray-300 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[#006a63] text-4xl mb-4">check_circle</span>
              <p className="text-[48px] font-[700] text-[#00236f] font-['Poppins']">8.5k</p>
              <p className="text-[14px] text-gray-600 uppercase font-['Inter']">Cases Resolved</p>
            </div>
            <div className="bg-white border border-gray-300 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[#f6be39] text-4xl mb-4">location_on</span>
              <p className="text-[48px] font-[700] text-[#00236f] font-['Poppins']">28</p>
              <p className="text-[14px] text-gray-600 uppercase font-['Inter']">District Offices</p>
            </div>
            <div className="bg-white border border-gray-300 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[#ba1a1a] text-4xl mb-4">electric_bolt</span>
              <p className="text-[48px] font-[700] text-[#00236f] font-['Poppins']">24/7</p>
              <p className="text-[14px] text-gray-600 uppercase font-['Inter']">Emergency Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#eff4ff]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-[32px] leading-[40px] font-[600] text-[#00236f] mb-4 font-['Poppins']">Simple Steps to Justice</h2>
            <p className="text-gray-600 max-w-xl mx-auto font-['Inter']">Our streamlined process ensures that every report is handled with the highest degree of professionalism and speed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -z-10 translate-y-[-10px]"></div>
            <div className="bg-white p-8 rounded-2xl border border-gray-300 text-center space-y-4">
              <div className="w-12 h-12 bg-[#00236f] text-white rounded-full flex items-center justify-center font-bold mx-auto">1</div>
              <h3 className="text-[20px] font-[500] text-[#00236f] font-['Poppins']">Report</h3>
              <p className="text-gray-600 text-[16px] font-['Inter']">Fill out our secure form with incident details. You can choose to remain anonymous.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-300 text-center space-y-4">
              <div className="w-12 h-12 bg-[#00236f] text-white rounded-full flex items-center justify-center font-bold mx-auto">2</div>
              <h3 className="text-[20px] font-[500] text-[#00236f] font-['Poppins']">Reference #</h3>
              <p className="text-gray-600 text-[16px] font-['Inter']">Instantly receive a unique tracking ID to monitor your case progress securely.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-300 text-center space-y-4">
              <div className="w-12 h-12 bg-[#00236f] text-white rounded-full flex items-center justify-center font-bold mx-auto">3</div>
              <h3 className="text-[20px] font-[500] text-[#00236f] font-['Poppins']">Assigned</h3>
              <p className="text-gray-600 text-[16px] font-['Inter']">A dedicated Social Welfare Officer is assigned to evaluate and act on your case.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-300 text-center space-y-4">
              <div className="w-12 h-12 bg-[#00236f] text-white rounded-full flex items-center justify-center font-bold mx-auto">4</div>
              <h3 className="text-[20px] font-[500] text-[#00236f] font-['Poppins']">Support</h3>
              <p className="text-gray-600 text-[16px] font-['Inter']">Receive medical, legal, or psychological support through our partner network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[32px] leading-[40px] font-[600] text-[#00236f] mb-4 font-['Poppins']">Comprehensive Support Services</h2>
              <p className="text-gray-600 font-['Inter']">The Ministry offers a wide array of specialized services to ensure the holistic safety and recovery of all citizens.</p>
            </div>
            <button className="text-[#00236f] font-bold flex items-center gap-2 hover:underline">
              View All Services
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px]">
            {/* Anonymous Reporting */}
            <div className="md:col-span-4 md:row-span-2 bg-[#1e3a8a] text-white p-8 rounded-3xl flex flex-col justify-between shadow-lg">
              <span className="material-symbols-outlined text-5xl">person_off</span>
              <div>
                <h3 className="text-[24px] font-[600] mb-2 font-['Poppins']">Anonymous Reporting</h3>
                <p className="opacity-90 text-[16px] font-['Inter']">Your identity is protected by state-of-the-art encryption. Report without fear of disclosure.</p>
              </div>
            </div>
            {/* Emergency SOS */}
            <div className="md:col-span-4 md:row-span-1 bg-[#ffdad6] text-[#93000a] p-6 rounded-3xl flex items-center gap-6">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_share</span>
              <div>
                <h4 className="text-[20px] font-[500] font-bold">Emergency SOS</h4>
                <p className="text-sm opacity-80">Immediate police and medical dispatch to your GPS location.</p>
              </div>
            </div>
            {/* Case Tracking */}
            <div className="md:col-span-4 md:row-span-2 bg-white border border-gray-300 p-8 rounded-3xl flex flex-col justify-between shadow-sm">
              <span className="material-symbols-outlined text-[#006a63] text-5xl">my_location</span>
              <div>
                <h3 className="text-[24px] font-[600] text-[#00236f] mb-2 font-['Poppins']">Live Case Tracking</h3>
                <p className="text-gray-600 font-['Inter']">Get real-time updates as your report moves through official channels toward resolution.</p>
              </div>
            </div>
            {/* Legal Support */}
            <div className="md:col-span-4 md:row-span-1 bg-[#99efe5] text-[#006f67] p-6 rounded-3xl flex items-center gap-6">
              <span className="material-symbols-outlined text-4xl">gavel</span>
              <div>
                <h4 className="text-[20px] font-[500] font-bold">Legal Aid</h4>
                <p className="text-sm opacity-80">Free legal representation for survivors of gender-based violence.</p>
              </div>
            </div>
            {/* Child Protection */}
            <div className="md:col-span-3 md:row-span-1 bg-[#533c00] text-[#261a00] p-6 rounded-3xl flex flex-col justify-center gap-2">
              <span className="material-symbols-outlined">child_care</span>
              <h4 className="text-[20px] font-[500] font-bold leading-tight">Child Protection</h4>
            </div>
            {/* Counselling */}
            <div className="md:col-span-3 md:row-span-1 bg-white border border-gray-300 p-6 rounded-3xl flex flex-col justify-center gap-2">
              <span className="material-symbols-outlined text-[#00236f]">psychology</span>
              <h4 className="text-[20px] font-[500] font-bold leading-tight text-[#00236f]">Psychological Support</h4>
            </div>
            {/* Emergency Shelter */}
            <div className="md:col-span-6 md:row-span-1 bg-[#dee9fc] p-6 rounded-3xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#00236f]">holiday_village</span>
                <h4 className="text-[20px] font-[500] font-bold text-[#00236f]">Emergency Safe Houses</h4>
              </div>
              <button className="bg-[#00236f] text-white px-4 py-2 rounded-xl text-sm font-bold">Find Location</button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-y border-gray-300">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
          <p className="text-[12px] text-gray-600 uppercase tracking-[0.2em] mb-12 font-['Inter']">Institutional Partners & Stakeholders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            <img className="h-12 w-auto" alt="Malawi Police Service" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg5b1J-KGxRIDQ6waCbqWzye5oMY0tmcJXtW85HPDg_TJvqKqOJCXx375JyRXnEMQWnjoDsKcheFNVKw6GQgjYty36YqVsmmACSeuM3LT_mhIoI6Aw6zsBvPSYwt5_BBYwXJzV2xKpqDOi1gWhg0SNjOiYdIkIpOIadvUU8x1adylzXA4ibwpQd6T8RCD4pAtCP2ZxsdY02kInwrznDCPxb7ZozY1iYSUexfI8LO8H7lPb3JM1Vm6mXxFfhmitW9PCGd9-XTJIJg"/>
            <img className="h-10 w-auto" alt="UN Women" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_AMSD5jlydptfHQp9RRsdgj2Wxcq4pdfxxEFUCNi93NYckhM4TT5VhLv9bs6jpzAURVNrw-0tsFiOD6MCajRBrPZmkhX3MknJy2oUFL4G-gS4_PWlhIi-coag0y2Rm2JmbFIhEF7hXvLR4_VNZHYz3j8Grc_w4ovSqvFhANWHvuR_aA1eDobpOq8j8hXSwRBFKb-MD90mc0Dzz52w86q6L9Kry5sdOSe1OjAbqGvUsdTxlrXBXAe0wCH21xsO886tvkXYvL83Q"/>
            <img className="h-12 w-auto" alt="Ministry of Justice" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP6yMJxCCet5cM00JiZGMEVUPrW2vIme-JhCcZyW_39ORSS3G5wLV8lZfJmIbeW7RwPDQ2uRIAdEM7oNqd1xDidYFMxauvTWyUv5NR7-ox8kM2AkT0gMXpe9D_F0pcaLfYBJBswgmO4q_AIW35w755_ekZlLI1a-oOmedzAdefZrzVS_2SGzrGP3P7MfqVHqtZJkDjNYQvWv7Q5x-cEDvRF80MZ9L_UakBeceny44i7qnzIffaSwVTPdDQnc6YClbAzFlqOLiSiw"/>
            <img className="h-8 w-auto" alt="UNICEF" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB7_cGVhoj8cemrXRCu-NnIDHwf4ARoyCgkFYny_eTZ8eryA42cvQ5KPtMz2R8kd9G_Lgo8t9AVjbJnXWWev_iPcfE9PuZjv3f8nXBwOOSn_bUDjS44dotuDLaO2_Kq75tQVfSdz90ndc_juBP-zTzVheXZ_dvsnkELutTikM8txoFpuq0hFN0Djp8XUXXX1BufXjobW2gMKgE65LmXvJMGQVuk4x0QMTgLlrxq_OeH7kVAArgTIS2Ya-tXTjjJEwvNabVPkkFdA"/>
            <img className="h-12 w-auto" alt="Ministry of Health" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXW1IMB4YzTSQMpqvb2byKjJrBL96RH8R0qxzqbbnfDQifJvgQTcOqOvyztuLouSGiJMgRSZ9N-RtblgjTxF6V70BfndLU1AaAYXRmwfoE9oCNElA8Z87sw3YOMCgKNO4aLA5HirkM5G6M61uN-zmvw0DdbAX-hhIBzo7ahCN0-NtvSjBQ8EkidC8J-bDZL4pC0U6DkRqUxbR6ulpWc7vyC6rEKgtyRYRIcYdblQPqKiuhSHp34idtKlw-esT1hK2HUBL9LGkuug"/>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="bg-[#00236f] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center text-white shadow-2xl">
            {/* Background texture/pattern simulation */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h2 className="text-[48px] leading-[56px] font-[700] font-['Poppins']">Do Not Stay in Silence.<br/>We are Here to Help.</h2>
              <p className="text-[18px] leading-[28px] opacity-80 font-['Inter']">SafeReport is available 24/7 across all districts of Malawi. Your report is the first step toward a safer life and a stronger nation.</p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Link 
                  to="/report"
                  className="bg-white text-[#00236f] px-10 py-5 rounded-2xl text-[20px] font-[500] shadow-xl hover:opacity-90 active:scale-95 transition-all font-['Poppins']"
                >
                  Start Secure Report Now
                </Link>
                <button className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-[20px] font-[500] hover:bg-white/10 active:scale-95 transition-all font-['Poppins']">
                  Call Helpline: 116
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
