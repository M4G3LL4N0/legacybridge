"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/app", label: "Overview" },
  { href: "/app/command-center", label: "Command Center" },
  { href: "/app/onboarding", label: "Onboarding" },
  { href: "/app/connectors", label: "Connectors" },
  { href: "/app/ingest", label: "Ingest" },
  { href: "/app/sources", label: "Sources" },
  { href: "/app/workflows", label: "Workflows" },
  { href: "/app/artifacts", label: "Artifacts" },
  { href: "/app/notifications", label: "Notifications" },
  { href: "/app/settings", label: "Settings" },
  { href: "/app/reports/executive-summary", label: "Executive Summary" },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-r border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] lg:w-[300px] lg:flex-shrink-0">
      <div className="flex h-full flex-col">
        <div className="border-b border-white/8 px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/6 text-sm font-semibold tracking-[0.2em] text-white shadow-[0_0_45px_rgba(56,189,248,0.10)]">
              LB
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/76">
                LegacyBridge
              </div>
              <div className="text-xs text-white/42">System intelligence workspace</div>
            </div>
          </Link>
        </div>

        <div className="px-4 py-5">
          <div className="mb-3 px-3 text-[11px] uppercase tracking-[0.25em] text-cyan-100/55">
            Workspace
          </div>

          <div className="space-y-2">
            {nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/app" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center rounded-2xl border px-3 py-3 text-sm transition ${
                    active
                      ? "border-cyan-300/20 bg-[linear-gradient(135deg,rgba(56,189,248,0.14),rgba(16,185,129,0.10))] text-white shadow-[0_0_28px_rgba(56,189,248,0.08)]"
                      : "border-transparent text-white/70 hover:border-white/10 hover:bg-white/6 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-auto p-4">
          <div className="overflow-hidden rounded-3xl border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(56,189,248,0.10),rgba(16,185,129,0.06))] p-4">
            <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/62">
              Active pilot
            </div>
            <div className="mt-2 text-sm font-medium text-white">
              Claims Processing Core
            </div>
            <div className="mt-3 space-y-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/72">
                418 modules indexed
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/72">
                96 rules surfaced
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/72">
                31% coverage gap
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
