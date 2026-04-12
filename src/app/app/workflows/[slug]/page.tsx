import { notFound } from "next/navigation";
import ProductShell from "@/components/product/ProductShell";
import { getWorkflowBySlug } from "@/lib/demo-data";

export default async function WorkflowDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    notFound();
  }

  return (
    <ProductShell>
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">
                Workflow detail
              </div>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
                {workflow.name}
              </h1>
              <div className="mt-3 text-sm text-white/55">
                {workflow.system} · {workflow.language} · {workflow.owner}
              </div>
            </div>
            <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs text-amber-100">
              Risk score {workflow.riskScore}
            </div>
          </div>

          <p className="mt-6 text-sm leading-8 text-white/70">{workflow.description}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-white/40">Coverage gap</div>
              <div className="mt-2 text-3xl font-semibold text-white">
                {workflow.testCoverageGap}%
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-white/40">Modules</div>
              <div className="mt-2 text-3xl font-semibold text-white">{workflow.modules.length}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-white/40">Downstream</div>
              <div className="mt-2 text-3xl font-semibold text-white">
                {workflow.downstream.length}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-medium text-white">Modules in flow</div>
              <div className="mt-4 space-y-3">
                {workflow.modules.map((module) => (
                  <div
                    key={module}
                    className="rounded-2xl border border-white/10 bg-black/20 p-3 text-sm text-white/72"
                  >
                    {module}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-medium text-white">Key findings</div>
              <div className="mt-4 space-y-3">
                {workflow.findings.map((finding) => (
                  <div
                    key={finding}
                    className="rounded-2xl border border-white/10 bg-black/20 p-3 text-sm leading-7 text-white/72"
                  >
                    {finding}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-6">
          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">System graph</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              Upstream and downstream map
            </h2>

            <div className="mt-6 grid gap-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <div className="text-sm font-medium text-white">Upstream dependencies</div>
                <div className="mt-4 space-y-3">
                  {workflow.upstream.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <div className="text-sm font-medium text-white">Downstream consumers</div>
                <div className="mt-4 space-y-3">
                  {workflow.downstream.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">
              Recommended actions
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              Safer next steps
            </h2>

            <div className="mt-6 space-y-4">
              {workflow.recommendedActions.map((action) => (
                <div
                  key={action}
                  className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/72"
                >
                  {action}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </ProductShell>
  );
}
