export default function SystemBackup() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-transparent hover:border-primary/10 transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary">
          <span className="material-symbols-outlined text-3xl">backup</span>
        </div>
        <div>
          <h3 className="font-headline-md">System Backup</h3>
          <p className="text-on-surface-variant">Disaster recovery and backup scheduling.</p>
        </div>
      </div>

      <p className="text-sm">Placeholder content — implement backup configuration and restore points here.</p>
    </section>
  )
}
