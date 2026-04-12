import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-12">
        <div className="max-w-md">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            LegacyBridge
          </div>
          <p className="mt-4 text-sm leading-7 text-white/60">
            AI infrastructure for legacy code intelligence, safer modernization, and
            operational continuity across mission-critical systems.
          </p>
        </div>

        <div>
          <div className="text-sm font-medium text-white">Navigation</div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            <Link href="/">Home</Link>
            <Link href="/platform">Platform</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/pilot">Pilot</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-white">Contact</div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            <a href="mailto:founder@legacybridge.ai">founder@legacybridge.ai</a>
            <span>Enterprise pilots available</span>
            <span>Private deployment paths coming next</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
