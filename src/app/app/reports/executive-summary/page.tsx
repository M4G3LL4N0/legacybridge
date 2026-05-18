import ProductShell from "@/components/product/ProductShell";
import { SubpageVisual } from "@/components/SubpageVisual";
import Panel from "@/components/product/Panel";

export default function ExecutiveSummaryPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <ProductShell>
      <div className="space-y-6">
        <Panel
          eyebrow="Executive summary"
          title="Claims Processing Core pilot readout"
          rightSlot={
            <div className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-4 py-2 text-xs text-emerald-100">
              Board-ready summary
            </div>
          }
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Workflows mapped", "12"],
              ["Critical findings", "3"],
              ["Duplicate logic branches", "2"],
              ["Coverage gap", "31%"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-white/40">{label}</div>
                <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <Panel eyebrow="What we found" title="Key operational realities">
            <div className="space-y-4 text-sm leading-7 text-white/70">
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
                Critical penalty logic is duplicated across separate branches, increasing drift risk.
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
                One legacy account-class path bypasses the updated notice renderer.
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
                Current test protections are insufficient for safe branch consolidation.
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
                Business logic is partially encoded in tribal operator knowledge, not just code.
              </div>
            </div>
          </Panel>

          <Panel eyebrow="Recommended action" title="Lowest-risk path forward">
            <div className="space-y-4 text-sm leading-7 text-white/70">
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
                Generate characterization tests before any branch refactor.
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
                Wrap notice selection behind a monitored service boundary.
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
                Consolidate duplicate logic only after regression protections are verified.
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
                Capture senior expert explanations directly into the system graph.
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </ProductShell>
  </>
  )
}
