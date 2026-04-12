import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-black/20">
      <div className="page-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] text-xs font-semibold tracking-[0.2em] text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.16),transparent_38%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.12),transparent_35%)]" />
              <span className="relative">LB</span>
            </div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              LegacyBridge
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/60">
            AI infrastructure for legacy code intelligence, safer modernization, operational continuity,
            and pilot-driven enterprise transformation.
          </p>
        </div>

        <div>
          <div className="text-sm font-medium text-white">Product</div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            <Link href="/platform">Platform</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/pilot">Pilot</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-white">Company</div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            <Link href="/about">About</Link>
            <Link href="/security">Security</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/demo">Demo</Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-white">Access</div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            <a href="mailto:founder@legacybridge.ai">founder@legacybridge.ai</a>
            <span>Enterprise pilots available</span>
            <Link href="/login">Workspace access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
