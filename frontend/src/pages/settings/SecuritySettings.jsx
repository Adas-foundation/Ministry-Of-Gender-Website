export default function SecuritySettings() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-transparent hover:border-primary/10 transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-error-container/10 flex items-center justify-center text-error">
          <span className="material-symbols-outlined text-3xl">security</span>
        </div>
        <div>
          <h3 className="font-headline-md">Security &amp; Access</h3>
          <p className="text-on-surface-variant">Manage authentication, MFA, and network restrictions.</p>
        </div>
      </div>

      <p className="text-sm">Placeholder content — implement 2FA, session policies, and IP whitelisting here.</p>
    </section>
  )
}
