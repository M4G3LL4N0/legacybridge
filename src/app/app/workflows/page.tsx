import Link from "next/link";
import ProductShell from "@/components/product/ProductShell";
import { workflows } from "@/lib/demo-data";

export default function WorkflowsPage() {
  return (
    <ProductShell>
      <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">Workflows</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
              Explore priority legacy workflows
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
              Drill into system flows, modules, upstream dependencies, downstream consumers, and
              recommended modernization steps.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            Demo catalog
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {workflows.map((workflow) => (
            <Link
              key={workflow.slug}
              href={`/app/workflows/${workflow.slug}`}
              className="block rounded-[1.5rem] border border-white/10 bg-black/20 p-5 transition hover:border-blue-300/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-medium text-white">{workflow.name}</div>
                  <div className="mt-2 text-sm text-white/55">
                    {workflow.system} · {workflow.language} · {workflow.owner}
                  </div>
                </div>
                <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] text-amber-100">
                  Risk {workflow.riskScore}
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/68">{workflow.description}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/40">
                    Test coverage gap
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    {workflow.testCoverageGap}%
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/40">
                    Modules
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    {workflow.modules.length}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </ProductShell>
  );
}
