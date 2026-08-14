export default function AuditLogs() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-transparent hover:border-primary/10 transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-surface p-2 flex items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined text-3xl">history</span>
        </div>
        <div>
          <h3 className="font-headline-md">Audit Logs</h3>
          <p className="text-on-surface-variant">Tracks administrative actions and system events.</p>
        </div>
      </div>

      <p className="text-sm">Placeholder content — implement audit log viewer and filters here.</p>
    </section>
  )
}
