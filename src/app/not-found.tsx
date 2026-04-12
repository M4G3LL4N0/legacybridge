import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="premium-page-shell relative min-h-screen overflow-hidden">
      <div className="premium-grid absolute inset-0 opacity-20" />
      <div className="signal-mist signal-mist-a" />
      <div className="signal-mist signal-mist-b" />
      <div className="beam-fade beam-fade-a" />
      <div className="beam-fade beam-fade-b" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="premium-surface mx-auto w-full max-w-3xl rounded-[2.2rem] p-10 text-center sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] text-lg font-semibold tracking-[0.2em] text-white shadow-[0_0_45px_rgba(56,189,248,0.10)]">
            LB
          </div>

          <div className="mt-8 text-xs uppercase tracking-[0.26em] text-cyan-100/55">
            Route not found
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            The signal ends here.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68">
            The page you requested does not exist in this LegacyBridge workspace. Return to the public site
            or jump back into the product environment.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(16,185,129,0.16))] px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(56,189,248,0.14)] transition hover:border-cyan-200/35 hover:bg-[linear-gradient(135deg,rgba(56,189,248,0.24),rgba(16,185,129,0.22))]"
            >
              Return home
            </Link>
            <Link
              href="/app"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              Open workspace
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
