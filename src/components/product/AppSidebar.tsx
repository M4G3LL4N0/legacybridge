import Link from "next/link";

const nav = [
  { href: "/app", label: "Overview" },
  { href: "/app/workflows", label: "Workflows" },
  { href: "/app/artifacts", label: "Artifacts" },
  { href: "/app/settings", label: "Settings" },
  { href: "/platform", label: "Platform" },
  { href: "/industries", label: "Industries" },
  { href: "/pilot", label: "Pilot" },
];

export default function AppSidebar() {
  return (
    <aside className="w-full border-r border-white/8 bg-black/20 lg:w-[280px] lg:flex-shrink-0">
      <div className="flex h-full flex-col">
        <div className="border-b border-white/8 px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/6 text-sm font-semibold tracking-[0.2em] text-white shadow-[0_0_45px_rgba(59,130,246,0.16)]">
              LB
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                LegacyBridge
              </div>
              <div className="text-xs text-white/45">Product demo shell</div>
            </div>
          </Link>
        </div>

        <div className="px-4 py-4">
          <div className="mb-3 px-3 text-[11px] uppercase tracking-[0.25em] text-blue-100/55">
            Workspace
          </div>
          <div className="space-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-2xl border border-transparent px-3 py-3 text-sm text-white/72 transition hover:border-white/10 hover:bg-white/6 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-auto p-4">
          <div className="rounded-3xl border border-blue-300/18 bg-blue-300/10 p-4">
            <div className="text-xs uppercase tracking-[0.22em] text-blue-100/65">
              Pilot mode
            </div>
            <div className="mt-2 text-sm font-medium text-white">
              Claims Processing Core
            </div>
            <div className="mt-2 text-sm leading-6 text-white/62">
              Demo workspace showing explainability, workflow mapping, findings, test packs, and modernization guidance.
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
