import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import ProductShell from "@/components/product/ProductShell";
import Panel from "@/components/product/Panel";
import { activity, findings, workflows } from "@/lib/demo-data";

const releaseGates = [
  {
    label: "Route validation",
    status: "Passing",
    detail: "Core public and workspace routes are included in the release check.",
  },
  {
    label: "Workflow risk",
    status: "Attention",
    detail: "Late Payment Penalty Flow remains the highest-risk demo workflow.",
  },
  {
    label: "Executive readout",
    status: "Ready",
    detail: "Pilot findings have a leadership-ready summary path.",
  },
];

export default function NotificationsPage() {
  const topWorkflow = workflows[0];

  return (
    <>
    <SubpageVisual variant="default" />
      <ProductShell>
      <div className="space-y-6">
        <Panel
          eyebrow="Notifications"
          title="Release signals and workspace alerts"
          rightSlot={
            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs text-cyan-100">
              {activity.length + findings.length} active signals
            </div>
          }
        >
          <div className="grid gap-4 md:grid-cols-3">
            {releaseGates.map((gate) => (
              <div
                key={gate.label}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-medium text-white">{gate.label}</div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                    {gate.status}
                  </div>
                </div>
                <div className="mt-3 text-sm leading-7 text-white/68">{gate.detail}</div>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <Panel
            eyebrow="Highest-priority alert"
            title="Notice routing bypass needs stabilization"
            rightSlot={
              <Link
                href={`/app/workflows/${topWorkflow.slug}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/78 transition hover:bg-white/10"
              >
                Open workflow
              </Link>
            }
          >
            <div className="rounded-[1.35rem] border border-amber-300/18 bg-amber-300/10 p-5">
              <div className="text-sm font-medium text-amber-100">{topWorkflow.name}</div>
              <div className="mt-3 text-sm leading-7 text-white/72">
                Legacy account classes still route through a deprecated notice path. Generate
                characterization tests before consolidating duplicate penalty logic.
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/40">Risk</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{topWorkflow.riskScore}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/40">Gap</div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    {topWorkflow.testCoverageGap}%
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/40">Modules</div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    {topWorkflow.modules.length}
                  </div>
                </div>
              </div>
            </div>
          </Panel>

          <Panel eyebrow="Recent events" title="What changed in the workspace">
            <div className="space-y-4">
              {activity.slice(0, 4).map((event) => (
                <div
                  key={event.id}
                  className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-white">{event.title}</div>
                      <div className="mt-2 text-sm leading-7 text-white/68">{event.description}</div>
                    </div>
                    <div className="text-right text-[11px] uppercase tracking-[0.22em] text-white/40">
                      {event.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <Panel eyebrow="Finding alerts" title="Open issues to review before modernization">
          <div className="grid gap-4 lg:grid-cols-2">
            {findings.map((finding) => (
              <div
                key={finding.id}
                className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-white">{finding.title}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/45">
                      {finding.system}
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                    {finding.severity}
                  </div>
                </div>
                <div className="mt-3 text-sm leading-7 text-white/68">{finding.summary}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </ProductShell>
  </>
  )
}
