/**
 * Resources.jsx
 *
 * Restyled to use your actual design-system tokens from the @theme block
 * (bg-primary, text-on-surface, bg-surface-container-lowest, border-border-subtle,
 * bg-emergency-red, etc.) — blue / white / black, not the earlier green palette.
 */

const Resources = () => {
  const categories = [
    { icon: 'shield_person', label: 'Safety Planning', count: '4 guides', rule: 'var(--color-primary)' },
    { icon: 'balance', label: 'Legal Rights', count: '6 resources', rule: 'var(--color-tertiary)' },
    { icon: 'local_police', label: 'Reporting', count: '3 guides', rule: 'var(--color-on-surface-variant)' },
    { icon: 'support_agent', label: 'Support Services', count: '5 resources', rule: 'var(--color-success-mint)' },
    { icon: 'menu_book', label: 'Handbooks', count: '2 handbooks', rule: 'var(--color-emergency-red)' },
    { icon: 'play_circle', label: 'Video Tutorials', count: '8 videos', rule: 'var(--color-primary)' },
  ];

  const featured = [
    {
      title: 'Emergency Response Plan',
      desc: 'Immediate steps to take in a crisis situation. Includes emergency contacts and safety protocols.',
      tag: 'URGENT',
      tagBg: 'bg-danger-bg',
      tagText: 'text-emergency-red',
      rule: 'var(--color-emergency-red)',
      icon: 'emergency',
    },
    {
      title: 'Complete Legal Rights Guide',
      desc: 'Comprehensive overview of your rights under Malawian law, including the Domestic Violence Act.',
      tag: 'POPULAR',
      tagBg: 'bg-primary-fixed',
      tagText: 'text-primary',
      rule: 'var(--color-primary)',
      icon: 'gavel',
    },
  ];

  const downloads = [
    { name: 'Safety Planning Worksheet', file: 'PDF', size: '1.2 MB' },
    { name: 'Domestic Violence Act Summary', file: 'PDF', size: '3.5 MB' },
    { name: 'Emergency Contacts Card', file: 'PDF', size: '0.8 MB' },
    { name: 'Reporting Process Guide', file: 'PDF', size: '2.1 MB' },
    { name: 'Child Protection Guidelines', file: 'PDF', size: '4.2 MB' },
    { name: 'Counseling Services Directory', file: 'PDF', size: '1.5 MB' },
  ];

  const emergencyContacts = [
    { label: 'Police', num: '997', icon: 'local_police' },
    { label: 'Child Helpline', num: '116', icon: 'child_care' },
    { label: 'GBV Crisis Line', num: '555', icon: 'support_agent' },
  ];

  const quickLinks = [
    { label: 'Report an Incident', icon: 'edit_note' },
    { label: 'Track Your Report', icon: 'search' },
    { label: 'Find a District Office', icon: 'location_on' },
    { label: 'Safety Tips', icon: 'shield_person' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="max-w-[1280px] mx-auto px-6 py-8 md:py-10">

        {/* Hero */}
        <div className="relative mb-10 rounded-2xl border border-gray-200 bg-white overflow-hidden">
          {/* soft decorative wash, brand-blue only */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-100/60 blur-2xl" />
          <div className="absolute -bottom-28 -left-16 w-64 h-64 rounded-full bg-blue-100/40 blur-2xl" />

          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center px-8 py-10 md:px-12 md:py-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
                <span className="material-symbols-outlined text-[15px]">verified_user</span>
                Confidential · Free · Chichewa &amp; English
              </div>
              <h1 className="text-5xl font-bold leading-[1.05] mb-4">
                <span className="block text-gray-900">Protection Resources</span>
                <span className="block text-blue-700">&amp; Legal Aid</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Access information on legal rights, safety planning, and community
                support systems for survivors of gender-based violence in Malawi.
              </p>
            </div>

            {/* decorative icon panel — signature element, brand tokens only */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 rounded-full bg-blue-100" />
                <div className="absolute inset-6 rounded-full bg-white border border-blue-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-700 text-[92px]">shield_person</span>
                </div>
                <div className="absolute -top-2 -right-2 w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-yellow-600 text-[26px]">balance</span>
                </div>
                <div className="absolute -bottom-3 -left-4 w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-[26px]">support_agent</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency contacts */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-red-600 text-[18px]">emergency</span>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-red-600">Emergency Contacts</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {emergencyContacts.map((c, i) => (
              <a
                key={i}
                href={`tel:${c.num}`}
                className="group flex items-center gap-4 bg-red-50 border border-red-200 rounded-xl px-5 py-4 hover:border-red-300 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-red-600 text-[22px]">{c.icon}</span>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">{c.label}</p>
                  <p className="text-xl font-bold text-red-600 leading-tight">{c.num}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Quick links */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-3">Quick Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                className="group flex flex-col gap-3 bg-white border border-gray-200 rounded-xl px-4 py-4 hover:border-blue-700 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-blue-700 text-[19px]">{link.icon}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Browse by category */}
        <section className="mb-14">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-2xl font-semibold text-gray-900">
              Browse by Category
            </h2>
            <p className="text-sm text-gray-600">Organized by topic</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="group bg-white rounded-lg pl-4 pr-3 py-4 border-l-4 border-t border-r border-b border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                style={{ borderLeftColor: cat.rule }}
              >
                <span className="material-symbols-outlined text-[22px] mb-3 block" style={{ color: cat.rule }}>
                  {cat.icon}
                </span>
                <h3 className="text-[0.9rem] font-semibold mb-0.5 text-gray-900">{cat.label}</h3>
                <p className="text-xs text-gray-600">{cat.count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured resources */}
        <section className="mb-14">
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Featured Resources
              </h2>
              <p className="text-sm text-gray-600 mt-0.5">Most accessed guides and materials</p>
            </div>
            <span className="text-blue-700 text-sm font-semibold cursor-pointer hover:underline flex-shrink-0">
              View all
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border-l-4 border-t border-r border-b border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                style={{ borderLeftColor: item.rule }}
              >
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[26px] mt-0.5" style={{ color: item.rule }}>
                    {item.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className={`text-[0.65rem] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded-sm mb-2 inline-block ${item.tagBg} ${item.tagText}`}>
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-semibold mb-1.5 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Downloads */}
        <section className="mb-14">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-gray-900">
              Downloads
            </h2>
            <p className="text-sm text-gray-600 mt-0.5">Downloadable guides, worksheets, and reference materials</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
            {downloads.map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 transition-colors cursor-pointer group">
                <span className="material-symbols-outlined text-red-600 text-xl flex-shrink-0">description</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate text-gray-900">{item.name}</p>
                </div>
                <p className="text-xs text-gray-600 font-mono flex-shrink-0">{item.file} · {item.size}</p>
                <span className="material-symbols-outlined text-gray-600 group-hover:text-blue-700 text-lg flex-shrink-0 transition-colors">
                  download
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Need Help band */}
        <section className="rounded-lg px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border border-blue-200 bg-blue-50">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-blue-700 text-2xl mt-0.5">support</span>
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-1">
                Need Help?
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                Our support team is available 24/7. Call{' '}
                <span className="font-semibold text-blue-700">555</span> for immediate assistance.
              </p>
            </div>
          </div>
          <a
            href="tel:555"
            className="flex-shrink-0 text-sm font-semibold px-5 py-2.5 rounded-md bg-blue-700 text-white hover:opacity-90 transition-opacity"
          >
            Call 555 Now
          </a>
        </section>
      </main>
    </div>
  );
};

export default Resources;