export default function Integrations() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-transparent hover:border-primary/10 transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-3xl">hub</span>
        </div>
        <div>
          <h3 className="font-headline-md">Integrations</h3>
          <p className="text-on-surface-variant">Connect external services and emergency partners.</p>
        </div>
      </div>

      <p className="text-sm">Placeholder content — implement connectors and integration status here.</p>
    </section>
  )
}
