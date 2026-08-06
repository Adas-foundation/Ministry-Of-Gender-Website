export default function GeneralSettings() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-transparent hover:border-primary/10 transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-3xl">tune</span>
        </div>
        <div>
          <h3 className="font-headline-md">General Settings</h3>
          <p className="text-on-surface-variant">Configure core platform identity and regional defaults.</p>
        </div>
      </div>

      <p className="text-sm">Placeholder content — implement platform identity, locale, and contact settings here.</p>
    </section>
  )
}
