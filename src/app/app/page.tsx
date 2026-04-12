import Link from "next/link";
import ProductShell from "@/components/product/ProductShell";
import ProductStatCard from "@/components/product/ProductStatCard";
import Panel from "@/components/product/Panel";
import {
  activity,
  artifacts,
  findings,
  planBoard,
  systems,
  workflows,
} from "@/lib/demo-data";

function severityClasses(severity: string) {
  if (severity === "Critical") return "border-red-300/20 bg-red-300/10 text-red-100";
  if (severity === "High") return "border-amber-300/20 bg-amber-300/10 text-amber-100";
  if (severity === "Moderate") return "border-cyan-300/20 bg-cyan-300/10 text-cyan-100";
  return "border-white/10 bg-white/5 text-white/70";
}

function categoryClasses(category: string) {
  if (category === "Query") return "border-cyan-300/20 bg-cyan-300/10 text-cyan-100";
  if (category === "Graph") return "border-blue-300/20 bg-blue-300/10 text-blue-100";
  if (category === "Test") return "border-emerald-300/20 bg-emerald-300/10 text-emerald-100";
  if (category === "Knowledge") return "border-violet-300/20 bg-violet-300/10 text-violet-100";
  return "border-amber-300/20 bg-amber-300/10 text-amber-100";
}

function stageClasses(stage: string) {
  if (stage === "Stabilize") return "border-red-300/20 bg-red-300/10 text-red-100";
  if (stage === "Wrap") return "border-cyan-300/20 bg-cyan-300/10 text-cyan-100";
  if (stage === "Refactor") return "border-violet-300/20 bg-violet-300/10 text-violet-100";
  return "border-emerald-300/20 bg-emerald-300/10 text-emerald-100";
}

export default function ProductAppPage() {
  return (
    <ProductShell>
      <div className="space-y-6">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <ProductStatCard label="Systems indexed" value="24" sublabel="Across core business functions" />
          <ProductStatCard label="High-risk workflows" value="8" sublabel="Prioritized for analysis" />
          <ProductStatCard label="Critical findings" value="3" sublabel="Require leadership attention" />
          <ProductStatCard label="Coverage gap avg" value="29%" sublabel="Before generated test packs" />
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Panel
            eyebrow="Command center"
            title="Ask the system what the old code actually does"
            rightSlot={
              <div className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-4 py-2 text-xs text-emerald-100">
                Query resolved
              </div>
            }
          >
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07111d] glow-edge">
              <div className="premium-grid p-5">
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-7 text-white/78">
                  Which modules calculate late-payment penalties and update downstream customer notices?
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/45">Resolved insight</div>
                    <div className="mt-3 text-sm leading-7 text-white/76">
                      4 COBOL programs and 2 JCL jobs contribute to the penalty flow. One downstream
                      branch still bypasses the updated notice renderer for legacy account classes.
                      Duplicate penalty logic appears in two separate modules, increasing change risk.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/45">Recommended next step</div>
                    <div className="mt-3 text-sm leading-7 text-white/76">
                      Generate characterization tests for both branches, wrap notice selection behind a
                      service boundary, then consolidate duplicate business logic.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>

          <Panel
            eyebrow="Deployment posture"
            title="Enterprise-readiness surface"
            rightSlot={
              <Link
                href="/app/settings"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/78 transition hover:bg-white/10"
              >
                Open settings
              </Link>
            }
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Isolation", "Private VPC capable"],
                ["Data mode", "Code + docs + ops notes"],
                ["Access model", "Role-scoped workspace"],
                ["Deployment path", "Pilot to private environment"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="text-xs uppercase tracking-[0.22em] text-white/40">{label}</div>
                  <div className="mt-2 text-sm font-medium text-white">{value}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Panel
            eyebrow="Indexed systems"
            title="Legacy system portfolio"
            rightSlot={
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                4 visible in demo
              </div>
            }
          >
            <div className="grid gap-4 xl:grid-cols-2">
              {systems.map((system) => (
                <article
                  key={system.id}
                  className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-medium text-white">{system.name}</div>
                      <div className="mt-2 text-sm text-white/55">
                        {system.language} · {system.owner}
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {system.criticality}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/40">Risk score</div>
                      <div className="mt-2 text-2xl font-semibold text-white">{system.riskScore}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/40">Workflows</div>
                      <div className="mt-2 text-2xl font-semibold text-white">{system.workflows}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/40">Updated</div>
                      <div className="mt-2 text-sm font-medium text-white">{system.lastUpdated}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Priority findings" title="What needs attention now">
            <div className="space-y-4">
              {findings.map((finding) => (
                <div
                  key={finding.id}
                  className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-white">{finding.title}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/45">
                        {finding.system}
                      </div>
                    </div>
                    <div
                      className={`rounded-full border px-3 py-1 text-[11px] ${severityClasses(
                        finding.severity
                      )}`}
                    >
                      {finding.severity}
                    </div>
                  </div>
                  <div className="mt-3 text-sm leading-7 text-white/68">{finding.summary}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Panel
            eyebrow="Artifact explorer"
            title="Generated and indexed materials"
            rightSlot={
              <Link
                href="/app/artifacts"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/78 transition hover:bg-white/10"
              >
                View all artifacts
              </Link>
            }
          >
            <div className="space-y-4">
              {artifacts.slice(0, 4).map((artifact) => (
                <div
                  key={artifact.id}
                  className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-white">{artifact.name}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/45">
                        {artifact.type} · {artifact.system}
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                      {artifact.status}
                    </div>
                  </div>
                  <div className="mt-3 text-sm leading-7 text-white/68">{artifact.summary}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Activity timeline" title="Recent intelligence events">
            <div className="space-y-4">
              {activity.map((event) => (
                <div
                  key={event.id}
                  className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-white">{event.title}</div>
                      <div className="mt-2 text-sm leading-7 text-white/68">{event.description}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className={`rounded-full border px-3 py-1 text-[11px] ${categoryClasses(event.category)}`}>
                        {event.category}
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                        {event.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Panel
            eyebrow="Modernization board"
            title="Plan work without triggering a blind rewrite"
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {planBoard.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4"
                >
                  <div className={`inline-flex rounded-full border px-3 py-1 text-[11px] ${stageClasses(item.stage)}`}>
                    {item.stage}
                  </div>
                  <div className="mt-4 text-sm font-medium text-white">{item.title}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/45">
                    {item.owner}
                  </div>
                  <div className="mt-3 text-sm leading-7 text-white/68">{item.impact}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel
            eyebrow="Workflow explorer"
            title="Drill into high-risk flows"
            rightSlot={
              <Link
                href="/app/workflows"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/78 transition hover:bg-white/10"
              >
                Open workflow catalog
              </Link>
            }
          >
            <div className="space-y-4">
              {workflows.map((workflow) => (
                <Link
                  key={workflow.slug}
                  href={`/app/workflows/${workflow.slug}`}
                  className="block rounded-[1.35rem] border border-white/10 bg-black/20 p-4 transition hover:border-cyan-300/20 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-white">{workflow.name}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/45">
                        {workflow.system} · {workflow.language}
                      </div>
                    </div>
                    <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] text-amber-100">
                      Risk {workflow.riskScore}
                    </div>
                  </div>
                  <div className="mt-3 text-sm leading-7 text-white/68">{workflow.description}</div>
                </Link>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </ProductShell>
  );
}
