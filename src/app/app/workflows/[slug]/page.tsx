import Link from "next/link";
import { notFound } from "next/navigation";
import ProductShell from "@/components/product/ProductShell";
import Panel from "@/components/product/Panel";
import GraphCanvasCard from "@/components/product/GraphCanvasCard";
import CodeViewerCard from "@/components/product/CodeViewerCard";
import RuleExtractionCard from "@/components/product/RuleExtractionCard";
import TestPackPreview from "@/components/product/TestPackPreview";
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
      <div className="space-y-6">
        <Panel
          eyebrow="Workflow detail"
          title={workflow.name}
          rightSlot={
            <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs text-amber-100">
              Risk score {workflow.riskScore}
            </div>
          }
        >
          <div className="text-sm text-white/55">
            {workflow.system} · {workflow.language} · {workflow.owner}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-8 text-white/70">{workflow.description}</p>

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
        </Panel>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <GraphCanvasCard />
          <RuleExtractionCard />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <CodeViewerCard />
          <TestPackPreview />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Panel eyebrow="Flow internals" title="Modules and findings">
            <div className="grid gap-6 lg:grid-cols-2">
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
          </Panel>

          <Panel eyebrow="System graph" title="Upstream and downstream map">
            <div className="grid gap-5">
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
          </Panel>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_auto]">
          <Panel eyebrow="Recommended actions" title="Safer next steps">
            <div className="space-y-4">
              {workflow.recommendedActions.map((action) => (
                <div
                  key={action}
                  className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/72"
                >
                  {action}
                </div>
              ))}
            </div>
          </Panel>

          <div className="flex items-start">
            <Link
              href="/app/workflows"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              Back to workflows
            </Link>
          </div>
        </div>
      </div>
    </ProductShell>
  );
}
