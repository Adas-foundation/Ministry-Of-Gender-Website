export default function PrivacySettings() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-transparent hover:border-primary/10 transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined text-3xl">policy</span>
        </div>
        <div>
          <h3 className="font-headline-md">Privacy &amp; Compliance</h3>
          <p className="text-on-surface-variant">Data governance and legal compliance settings.</p>
        </div>
      </div>

      <p className="text-sm">Placeholder content — implement retention, encryption, and consent settings here.</p>
    </section>
  )
}
