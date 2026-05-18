import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import ProductShell from "@/components/product/ProductShell";
import Panel from "@/components/product/Panel";

export default function OnboardingPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <ProductShell>
      <div className="space-y-6">
        <Panel
          eyebrow="Onboarding"
          title="Stand up your first LegacyBridge workspace"
          rightSlot={
            <div className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-4 py-2 text-xs text-emerald-100">
              4-step setup
            </div>
          }
        >
          <div className="grid gap-4 lg:grid-cols-4">
            {[
              ["01", "Define workspace", "Create your pilot environment and choose the first system to analyze."],
              ["02", "Connect sources", "Attach repositories, docs, batch metadata, and operational notes."],
              ["03", "Run ingest", "Index modules, jobs, dependencies, and trace business logic."],
              ["04", "Review findings", "Open the command center and start with the highest-risk workflow."],
            ].map(([step, title, body]) => (
              <div key={step} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">Step {step}</div>
                <div className="mt-3 text-lg font-medium text-white">{title}</div>
                <div className="mt-3 text-sm leading-7 text-white/68">{body}</div>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <Panel eyebrow="Workspace profile" title="Pilot configuration">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Workspace", "Claims modernization pilot"],
                ["Primary system", "Claims Processing Core"],
                ["Deployment mode", "Private enterprise workspace"],
                ["Access", "Architecture + platform team"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/40">{label}</div>
                  <div className="mt-2 text-sm font-medium text-white">{value}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Next step" title="Connect your source systems">
            <div className="space-y-4">
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/68">
                Start with one repository or one batch workflow. The goal is to create immediate signal, not boil the ocean.
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/app/connectors"
                  className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
                >
                  Open connectors
                </Link>
                <Link
                  href="/app/ingest"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  View ingest flow
                </Link>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </ProductShell>
  </>
  )
}
