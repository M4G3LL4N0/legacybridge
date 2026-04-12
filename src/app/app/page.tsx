import Link from "next/link";
import ProductShell from "@/components/product/ProductShell";
import { findings, systems, workflows } from "@/lib/demo-data";

function severityClasses(severity: string) {
  if (severity === "Critical") return "border-red-300/20 bg-red-300/10 text-red-100";
  if (severity === "High") return "border-amber-300/20 bg-amber-300/10 text-amber-100";
  if (severity === "Moderate") return "border-blue-300/20 bg-blue-300/10 text-blue-100";
  return "border-white/10 bg-white/5 text-white/70";
}

export default function ProductAppPage() {
  return (
    <ProductShell>
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Systems indexed", value: "24" },
              { label: "High-risk workflows", value: "8" },
              { label: "Critical findings", value: "3" },
              { label: "Test coverage gap avg", value: "29%" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-white/45">{item.label}</div>
                <div className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">
                  Natural language query
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                  Ask the system what the old code actually does
                </h2>
              </div>
              <div className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-4 py-2 text-xs text-emerald-100">
                Query resolved
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[#08111a] p-5">
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
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">Indexed systems</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                Legacy system portfolio
              </h2>
            </div>

            <div className="mt-6 grid gap-4 xl:grid-cols-2">
              {systems.map((system) => (
                <article
                  key={system.id}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
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
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">Priority findings</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              What needs attention now
            </h2>

            <div className="mt-6 space-y-4">
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
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">Workflow explorer</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              Drill into high-risk flows
            </h2>

            <div className="mt-6 space-y-4">
              {workflows.map((workflow) => (
                <Link
                  key={workflow.slug}
                  href={`/app/workflows/${workflow.slug}`}
                  className="block rounded-[1.35rem] border border-white/10 bg-black/20 p-4 transition hover:border-blue-300/20 hover:bg-white/[0.06]"
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
          </section>
        </div>
      </div>
    </ProductShell>
  );
}
