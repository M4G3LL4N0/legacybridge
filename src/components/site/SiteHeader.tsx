import Link from "next/link";
import MobileMenu from "@/components/site/MobileMenu";
import ButtonLink from "@/components/ui/ButtonLink";

const nav = [
  { href: "/platform", label: "Platform" },
  { href: "/industries", label: "Industries" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pilot", label: "Pilot" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/demo", label: "Demo" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#050916]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] text-sm font-semibold tracking-[0.2em] text-white shadow-[0_0_45px_rgba(56,189,248,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.16),transparent_38%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.12),transparent_35%)]" />
            <span className="relative">LB</span>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/76">
              LegacyBridge
            </div>
            <div className="text-xs text-white/42">AI for legacy code intelligence</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/68 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/login" variant="secondary" className="px-4 py-2">
            Open workspace
          </ButtonLink>
          <ButtonLink href="/demo" className="px-4 py-2">
            Request demo
          </ButtonLink>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
