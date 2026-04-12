import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.10),transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-100">
            Enterprise access
          </div>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl">
            Enter the intelligence layer
            <span className="block text-white/65">for legacy systems.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
            LegacyBridge helps enterprises understand, stabilize, and modernize critical
            old systems without blind rewrites.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Explain", "Code, jobs, rules, and hidden logic"],
              ["Protect", "Generate tests before risky change"],
              ["Modernize", "Wrap and evolve systems safely"],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md">
                <div className="text-lg font-medium text-white">{title}</div>
                <div className="mt-2 text-sm leading-6 text-white/60">{body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/12 bg-white/7 p-4 shadow-[0_25px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="rounded-[1.65rem] border border-white/10 bg-[#08111a] p-7">
            <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">Workspace login</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
              Access your pilot
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/55">
                Work email
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/55">
                Password
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/app/onboarding"
                className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
              >
                Sign in to workspace
              </Link>
              <Link
                href="/pilot"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Request pilot access
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-white/40">
                Access posture
              </div>
              <div className="mt-2 text-sm leading-7 text-white/68">
                Role-scoped enterprise access, private deployment paths, and system-specific workspaces.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
