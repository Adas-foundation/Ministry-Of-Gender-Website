import { useState } from 'react'

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9ff]/50 to-[#f8f9ff]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-[48px] leading-[56px] text-[#00236f] mb-4 font-[700] font-['Poppins']">How can we help you today?</h1>
          <p className="text-[18px] text-gray-600 mb-10 max-w-2xl mx-auto font-['Inter']">Find guides, legal information, and support services across Malawi. Your safety and privacy are our highest priority.</p>
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-400">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="w-full pl-14 pr-32 py-5 rounded-2xl border-none shadow-lg focus:ring-2 focus:ring-[#1e3a8a] bg-white text-[18px] font-['Inter']" 
              placeholder="Search for help, guides, or laws..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-2 bottom-2 px-8 bg-[#00236f] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors font-['Inter']">Search</button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4 md:px-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Protection Guides */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-300 hover:border-[#006a63] hover:shadow-md transition-all group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-[#99efe5] flex items-center justify-center text-[#006f67] mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">security</span>
            </div>
            <h3 className="text-[20px] font-[500] text-[#00236f] mb-3 font-['Poppins']">Protection Guides</h3>
            <p className="text-gray-600 mb-6 font-['Inter']">Actionable steps to ensure your immediate physical and digital safety in various situations.</p>
            <span className="text-[#006a63] font-semibold flex items-center gap-2 font-['Inter']">View Guides <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </div>
          {/* Legal Rights */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-300 hover:border-[#006a63] hover:shadow-md transition-all group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-[#99efe5] flex items-center justify-center text-[#006f67] mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">gavel</span>
            </div>
            <h3 className="text-[20px] font-[500] text-[#00236f] mb-3 font-['Poppins']">Legal Rights</h3>
            <p className="text-gray-600 mb-6 font-['Inter']">Understand your protections under Malawian law and how to pursue legal justice safely.</p>
            <span className="text-[#006a63] font-semibold flex items-center gap-2 font-['Inter']">Read Documents <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </div>
          {/* Mental Health Support */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-300 hover:border-[#006a63] hover:shadow-md transition-all group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-[#99efe5] flex items-center justify-center text-[#006f67] mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <h3 className="text-[20px] font-[500] text-[#00236f] mb-3 font-['Poppins']">Mental Health Support</h3>
            <p className="text-gray-600 mb-6 font-['Inter']">Confidential resources for counseling, trauma recovery, and emotional wellbeing.</p>
            <span className="text-[#006a63] font-semibold flex items-center gap-2 font-['Inter']">Find Help <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </div>
          {/* Child Protection */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-300 hover:border-[#006a63] hover:shadow-md transition-all group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-[#99efe5] flex items-center justify-center text-[#006f67] mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">child_care</span>
            </div>
            <h3 className="text-[20px] font-[500] text-[#00236f] mb-3 font-['Poppins']">Child Protection</h3>
            <p className="text-gray-600 mb-6 font-['Inter']">Specific resources for safeguarding children and reporting minors in danger.</p>
            <span className="text-[#006a63] font-semibold flex items-center gap-2 font-['Inter']">Protect a Child <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </div>
          {/* Women's Rights */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-300 hover:border-[#006a63] hover:shadow-md transition-all group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-[#99efe5] flex items-center justify-center text-[#006f67] mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">woman</span>
            </div>
            <h3 className="text-[20px] font-[500] text-[#00236f] mb-3 font-['Poppins']">Women's Rights</h3>
            <p className="text-gray-600 mb-6 font-['Inter']">Empowerment resources and advocacy for Gender-Based Violence survivors.</p>
            <span className="text-[#006a63] font-semibold flex items-center gap-2 font-['Inter']">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </div>
          {/* Community Support */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-300 hover:border-[#006a63] hover:shadow-md transition-all group cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-[#99efe5] flex items-center justify-center text-[#006f67] mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-[20px] font-[500] text-[#00236f] mb-3 font-['Poppins']">Community Support</h3>
            <p className="text-gray-600 mb-6 font-['Inter']">Local NGOs and community-led initiatives providing shelter and aid in your district.</p>
            <span className="text-[#006a63] font-semibold flex items-center gap-2 font-['Inter']">Local Contacts <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </div>
        </div>
      </section>

      {/* Featured Content: Safety First */}
      <section className="bg-[#00236f] py-20 text-white">
        <div className="px-4 md:px-10 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-[32px] leading-[40px] mb-6 text-[#b6c4ff] font-['Poppins']">Safety First: Preparation Kit</h2>
            <p className="text-[18px] mb-8 text-white/90 font-['Inter']">Our downloadable resources are designed to be used offline. Keep these guides on your device for immediate access when internet connectivity is limited.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors cursor-pointer border border-white/10">
                <span className="material-symbols-outlined text-3xl text-[#b6c4ff]">picture_as_pdf</span>
                <div className="flex-grow">
                  <p className="font-semibold text-[#b6c4ff]">Your Legal Rights Guide</p>
                  <p className="text-sm opacity-70 font-['Inter']">PDF (2.4 MB) • Updated May 2024</p>
                </div>
                <span className="material-symbols-outlined">download</span>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors cursor-pointer border border-white/10">
                <span className="material-symbols-outlined text-3xl text-[#b6c4ff]">picture_as_pdf</span>
                <div className="flex-grow">
                  <p className="font-semibold text-[#b6c4ff]">Emergency Safety Plan Template</p>
                  <p className="text-sm opacity-70 font-['Inter']">PDF (1.1 MB) • Fillable Form</p>
                </div>
                <span className="material-symbols-outlined">download</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                className="w-full h-auto" 
                alt="Community leaders and government officials meeting" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHNUXstGnkunVWJC7pPLrL40CfdxV9sY0fO_dCNq-VjL_j2zOHwCLDpMNtoctMOteA-zQUQ_nhJGye3WVgzehfdAyj0Bcp4RbuNPj9klKLn6lZSnJL67NwPKLoClsu_hIFthll-_ATbKsDq7J4Lb3vn9n-Qn-TYIlCrHXiZD97sN5jVL7C9qIlgcIMWL-BFeprSV7hlBKp2XPhyjKXQiIkqcSeN-gf7Iyps-v_WzuxpxmWEBySD4lHy-9edKRjJdLtLOWdJILF9A"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#006a63] text-white p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-[20px] font-[500] mb-1 italic font-['Poppins']">"Privacy is our promise."</p>
              <p className="text-sm opacity-80 font-['Inter']">All resources can be accessed without creating an account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-10 max-w-4xl mx-auto">
        <h2 className="text-[32px] leading-[40px] text-center text-[#00236f] mb-12 font-['Poppins']">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white rounded-xl border border-gray-300 p-2 overflow-hidden" open>
            <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
              <span className="font-semibold text-[20px] text-gray-800 font-['Inter']">Is my report truly anonymous?</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="p-4 pt-0 text-gray-600 leading-relaxed font-['Inter']">
              Yes. SafeReport Malawi uses encrypted protocols. You are not required to provide your name or contact information to file a report. We do not track IP addresses for anonymous submissions.
            </div>
          </details>
          <details className="group bg-white rounded-xl border border-gray-300 p-2 overflow-hidden">
            <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
              <span className="font-semibold text-[20px] text-gray-800 font-['Inter']">What happens after I submit a report?</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="p-4 pt-0 text-gray-600 leading-relaxed font-['Inter']">
              Your report is instantly routed to a trained case officer at the Ministry. They assess the urgency and coordinate with local law enforcement or social services as needed. You can track progress using your unique Report ID.
            </div>
          </details>
          <details className="group bg-white rounded-xl border border-gray-300 p-2 overflow-hidden">
            <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
              <span className="font-semibold text-[20px] text-gray-800 font-['Inter']">How is my data secured?</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="p-4 pt-0 text-gray-600 leading-relaxed font-['Inter']">
              We use bank-level encryption (AES-256) for all data at rest and in transit. Access to sensitive case information is strictly audited and limited to authorized personnel only.
            </div>
          </details>
        </div>
      </section>

      {/* Emergency Numbers & Contact Section */}
      <section className="bg-[#eff4ff] py-16 px-4 md:px-10">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-[32px] leading-[40px] text-[#00236f] mb-8 font-['Poppins']">Quick Support Helplines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-[#00236f]/10 flex flex-col items-center">
              <span className="material-symbols-outlined text-5xl text-[#ba1a1a] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>phone_callback</span>
              <p className="text-sm font-semibold text-[#006a63] uppercase tracking-widest mb-2 font-['Inter']">Child Helpline Malawi</p>
              <a className="text-5xl font-bold text-[#00236f] hover:text-[#006a63] transition-colors font-['Poppins']" href="tel:116">116</a>
              <p className="mt-4 text-gray-600 font-['Inter']">Toll-free, 24/7 support for all children and youth issues.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-[#00236f]/10 flex flex-col items-center">
              <span className="material-symbols-outlined text-5xl text-[#ba1a1a] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
              <p className="text-sm font-semibold text-[#006a63] uppercase tracking-widest mb-2 font-['Inter']">GBV Support Line</p>
              <a className="text-5xl font-bold text-[#00236f] hover:text-[#006a63] transition-colors font-['Poppins']" href="tel:555">555</a>
              <p className="mt-4 text-gray-600 font-['Inter']">Confidential support for survivors of gender-based violence.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resources
