import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import ProductShell from "@/components/product/ProductShell";
import Panel from "@/components/product/Panel";

const connectors = [
  {
    name: "Git repository",
    status: "Ready",
    description: "Connect source trees for COBOL, RPG, Fortran, MUMPS, scripts, and migration targets.",
  },
  {
    name: "Document archive",
    status: "Ready",
    description: "Index system documentation, runbooks, design notes, tickets, and operational references.",
  },
  {
    name: "Batch metadata",
    status: "Ready",
    description: "Attach job schedules, dependency tables, control cards, and execution maps.",
  },
  {
    name: "Expert knowledge capture",
    status: "Optional",
    description: "Bind operator notes, walkthroughs, and tribal knowledge directly to system artifacts.",
  },
];

export default function ConnectorsPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <ProductShell>
      <div className="space-y-6">
        <Panel
          eyebrow="Connectors"
          title="Attach the sources that explain the real system"
          rightSlot={
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              4 connector types
            </div>
          }
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {connectors.map((connector) => (
              <div
                key={connector.name}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-medium text-white">{connector.name}</div>
                    <div className="mt-3 text-sm leading-7 text-white/68">{connector.description}</div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                    {connector.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <Panel eyebrow="Connection wizard" title="Initial source setup">
            <div className="space-y-4">
              {[
                "Choose repository or upload entry point",
                "Select language families present in the system",
                "Attach docs and batch metadata",
                "Start first indexing run",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/72"
                >
                  {step}
                </div>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Next action" title="Run the first ingest">
            <div className="space-y-4">
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/68">
                Once sources are connected, LegacyBridge can begin indexing modules, rules, jobs, artifacts, and hidden dependencies.
              </div>
              <Link
                href="/app/ingest"
                className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
              >
                Open ingest control
              </Link>
            </div>
          </Panel>
        </div>
      </div>
    </ProductShell>
  </>
  )
}
