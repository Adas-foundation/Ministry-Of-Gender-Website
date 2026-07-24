import { Link } from 'react-router-dom';

const Home = () => {
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
              <Link
                to="/report-incident"
                className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-blue-800 transition-all"
              >
                Report Incident
              </Link>
              <button className="border border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                Learn More
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

      {/* Statistics Section */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-blue-700 text-4xl mb-4">description</span>
            <div className="text-3xl font-bold text-gray-900">14,250+</div>
            <div className="text-base text-gray-600">Reports Received</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-green-600 text-4xl mb-4">handshake</span>
            <div className="text-3xl font-bold text-gray-900">9,800+</div>
            <div className="text-base text-gray-600">Cases Assisted</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-yellow-600 text-4xl mb-4">location_city</span>
            <div className="text-3xl font-bold text-gray-900">28</div>
            <div className="text-base text-gray-600">District Offices</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-red-600 text-4xl mb-4">bolt</span>
            <div className="text-3xl font-bold text-gray-900">&lt; 15m</div>
            <div className="text-base text-gray-600">Avg. Response Time</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Safety Infrastructure</h2>
          <p className="text-lg text-gray-600">Every tool you need to seek help and provide information is available right here, designed for Malawian citizens.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
              <span className="material-symbols-outlined text-blue-700 text-3xl">visibility_off</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Anonymous Reporting</h3>
            <p className="text-base text-gray-600">Your identity remains hidden. Submit reports without revealing your name or location unless you choose to.</p>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-red-600 text-3xl">emergency</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Emergency SOS</h3>
            <p className="text-base text-gray-600">Immediate connection to local emergency responders and psychological first aid in critical situations.</p>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
              <span className="material-symbols-outlined text-blue-700 text-3xl">upload_file</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Evidence Upload</h3>
            <p className="text-base text-gray-600">Securely attach photos, videos, or voice recordings to support your case with encrypted cloud storage.</p>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
              <span className="material-symbols-outlined text-blue-700 text-3xl">location_on</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">GPS Location</h3>
            <p className="text-base text-gray-600">Optional real-time location sharing to help authorities reach you faster in remote or unfamiliar areas.</p>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
              <span className="material-symbols-outlined text-blue-700 text-3xl">task_alt</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Reference Tracking</h3>
            <p className="text-base text-gray-600">Get a unique reference code to check on the status of your report at any time via SMS or the web portal.</p>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
              <span className="material-symbols-outlined text-blue-700 text-3xl">hub</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">District Routing</h3>
            <p className="text-base text-gray-600">Reports are automatically routed to the appropriate district office for faster response and case management.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
