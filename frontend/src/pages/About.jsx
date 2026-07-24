const About = () => {
  return (
    <main className="max-w-[1280px] mx-auto px-6">
      {/* Hero Section */}
      <section className="py-12 mb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <span className="material-symbols-outlined text-[18px]">gavel</span>
              <span className="text-xs font-bold">Government of Malawi Initiative</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Securing the Future of <span className="text-blue-700">Every Malawian.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              SafeReport is the national digital platform dedicated to protecting vulnerable populations from gender-based violence, abuse, and exploitation through secure reporting and rapid case management.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-blue-800 transition-all">
                Our Mission
              </button>
              <button className="border border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                Watch Overview
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                className="w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRccnlqN5JPajdrsJrm4B8TrYCo8hJZee1qswEuTWIieqcvmVp6hWXn6DFQteUm5GUhGCW4_fh3Hc7RUsHbUniePMc2_7VUDsJ0i1jLDdilmcYvJp9ToOt_mAUqw6FjKiFliZcrEzo7WBh0vX8fjKWNjUT9C_IhzBy9A2swHLONDVmHWq6wnSX-oyDcHGQl9B-fwFfN2W-gYUquAbi-Vlq4lG7luMtF81nA7GqnWpnIHFTLrXP3gh4HU_mbvzU8TTrmBhS59ZI70w"
                alt="Ministry of Gender Office"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
              <div className="bg-green-100 p-4 rounded-full">
                <span className="material-symbols-outlined text-green-600 text-[32px]">verified_user</span>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">24/7 Monitoring</p>
                <p className="text-xs text-gray-600">Real-time Response Coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Legal Framework */}
      <section className="py-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Our Mission */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="bg-blue-700 p-3 rounded-lg w-fit mb-4">
                <span className="material-symbols-outlined text-white">psychology_alt</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Mandate</h2>
              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                Under the Ministry of Gender, Community Development and Social Welfare, our primary mandate is to foster an environment where every citizen lives free from fear. SafeReport centralizes the reporting of GBV, child abuse, and human trafficking cases, ensuring they are handled with the urgency and sensitivity they deserve.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-gray-100 rounded-xl">
                <span className="text-4xl font-bold text-blue-700">100%</span>
                <p className="text-xs text-gray-600">Confidential Tracking</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-xl">
                <span className="text-4xl font-bold text-blue-700">28</span>
                <p className="text-xs text-gray-600">District Support Offices</p>
              </div>
            </div>
          </div>

          {/* Legal Framework */}
          <div className="bg-gray-800 text-white p-8 rounded-3xl">
            <div className="bg-blue-600 p-3 rounded-lg w-fit mb-4">
              <span className="material-symbols-outlined text-white">gavel</span>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Legal Framework</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-300 mt-1">check_circle</span>
                <p className="text-base">Prevention of Domestic Violence Act (2006)</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-300 mt-1">check_circle</span>
                <p className="text-base">Child Care, Protection and Justice Act (2010)</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-300 mt-1">check_circle</span>
                <p className="text-base">Gender Equality Act (2013)</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-300 mt-1">check_circle</span>
                <p className="text-base">Trafficking in Persons Act (2015)</p>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm opacity-80 italic">"Empowering citizens through legal accountability and community-led protection systems."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Commitment */}
      <section className="py-12 mb-12">
        <div className="bg-gray-200 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-200">
          <div className="md:w-1/3">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
              <span className="material-symbols-outlined text-blue-700 text-[48px]">security</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy is Non-Negotiable</h2>
            <p className="text-lg text-gray-600 mb-4">SafeReport utilizes enterprise-grade encryption and strict data access protocols. All reports can be made anonymously, and your information is only shared with specialized responders specifically assigned to your case.</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-green-800 bg-green-100 px-4 py-2 rounded-lg">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="text-xs font-bold">Encrypted End-to-End</span>
              </div>
              <div className="flex items-center gap-2 text-green-800 bg-green-100 px-4 py-2 rounded-lg">
                <span className="material-symbols-outlined text-[18px]">visibility_off</span>
                <span className="text-xs font-bold">Anonymous Submission</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ministry Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Driving policy and protection through dedicated leadership and collaborative governance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Leader 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 group hover:shadow-xl transition-all">
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq9G7Rn6MpRCMWyo2aVo7B87jscy4mEJU1CQ3cnGf9qap8I1-D7yrz0axyMog2PD72Uj9hJwvLbkU08scACxWQ6GXwGNIWjsmODUudgHD86tLcEadJfsUKDujLBwmubczynwdDCfS6y9UxEcxdVNq9w3EHIkAZ3WP1XBZim4DMZDv6XZeG-gZqNYdsFCs-yq7yJvJwRQCfkbNgJl7sARiX8_r4OP6rnI3kQWcCfKM1Hp2Zdw8Gp8O3yumb3LRwm1iLlE55zklqT7k"
                alt="Hon. Jean Sendeza"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900">Hon. Jean Sendeza, MP</h4>
              <p className="text-blue-700 font-bold mb-4">Minister of Gender</p>
              <p className="text-sm text-gray-600">Leading the national strategy for social welfare and gender equality across all 28 districts.</p>
            </div>
          </div>

          {/* Leader 2 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 group hover:shadow-xl transition-all">
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4WyD7KQD__Q_xYCuyMKLBxFnC1f7tqW6eTe4Y0a2x8dhGK010au2E8d1ySNzzBr4zrL8yzFs3qwOYmB5oJ0eA0KGtO3S1fJ3_EH21NlLDil6wFPseQJ1AoGSlORYyWQXDFC1IXM9NUHIHDRtQRdCad_O5ljgQtCqFXjMYQ3HyeCEjFqutmsySY50ndmMqccbEmPXPhRbWU2fZ7KNrltp9OcvjVgIqArZZXq9f_sDKCdrv4WfMk9mCB2m9qewjVAg19LdiAo_MWhM"
                alt="Dr. Isaac Katopola"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900">Dr. Isaac Katopola</h4>
              <p className="text-blue-700 font-bold mb-4">Principal Secretary</p>
              <p className="text-sm text-gray-600">Overseeing the operational execution of community development and social protection programs.</p>
            </div>
          </div>

          {/* Leader 3 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 group hover:shadow-xl transition-all">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-700/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-700 text-[64px]">group</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900">Directorate Team</h4>
              <p className="text-blue-700 font-bold mb-4">Social Welfare Services</p>
              <p className="text-sm text-gray-600">Specialized divisions managing child protection, gender-based violence, and human rights monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 mb-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">Integrated Response Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-[48px] text-gray-900">local_police</span>
            <span className="text-xs font-bold">Malawi Police Service</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-[48px] text-gray-900">medical_services</span>
            <span className="text-xs font-bold">Ministry of Health</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-[48px] text-gray-900">balance</span>
            <span className="text-xs font-bold">Ministry of Justice</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-[48px] text-gray-900">handshake</span>
            <span className="text-xs font-bold">UNICEF Malawi</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
