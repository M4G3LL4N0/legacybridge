import Link from "next/link";

export default function AppTopbar() {
  return (
    <div className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] backdrop-blur-xl">
      <div className="flex flex-col gap-4 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-100/52">
            LegacyBridge Workspace
          </div>
          <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
            Mission-critical system intelligence
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-4 py-2 text-xs text-emerald-100">
            Pilot active
          </div>
          <div className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-2 text-xs text-cyan-100">
            Risk graph synced
          </div>
          <Link
            href="/app/notifications"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/78 transition hover:bg-white/10"
          >
            Notifications
          </Link>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-2 py-2">
            <div className="px-2 text-[11px] uppercase tracking-[0.22em] text-white/44">
              Tenant
            </div>
            <div className="rounded-full border border-cyan-300/14 bg-cyan-300/10 px-3 py-1 text-[11px] text-white">
              Claims Modernization Pilot
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] text-[11px] font-semibold text-white">
              JD
            </div>
            <div className="pr-2 text-[11px] uppercase tracking-[0.18em] text-white/56">
              Architecture
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
