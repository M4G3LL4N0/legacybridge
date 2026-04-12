import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Demo" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#050816]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/6 text-sm font-semibold tracking-[0.2em] text-white shadow-[0_0_45px_rgba(59,130,246,0.16)]">
            LB
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              LegacyBridge
            </div>
            <div className="text-xs text-white/45">AI for legacy code intelligence</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78 transition hover:bg-white/10 md:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-4 py-2 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.16)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
          >
            Request demo
          </Link>
        </div>
      </div>
    </header>
  );
}
