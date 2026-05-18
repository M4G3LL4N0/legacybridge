import ProductShell from "@/components/product/ProductShell";
import { SubpageVisual } from "@/components/SubpageVisual";
import Panel from "@/components/product/Panel";
import GraphCanvasCard from "@/components/product/GraphCanvasCard";
import CodeViewerCard from "@/components/product/CodeViewerCard";
import RuleExtractionCard from "@/components/product/RuleExtractionCard";
import TestPackPreview from "@/components/product/TestPackPreview";

export default function CommandCenterPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <ProductShell>
      <div className="space-y-6">
        <Panel
          eyebrow="Command center"
          title="Interactive intelligence layer"
          rightSlot={
            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs text-cyan-100">
              Query + graph + rules
            </div>
          }
        >
          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07111d] glow-edge">
            <div className="premium-grid p-5">
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-7 text-white/78">
                Show me why legacy account classes bypass the updated notice renderer, which modules are responsible, and what test pack should be generated before refactoring.
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/45">Resolved answer</div>
                  <div className="mt-3 text-sm leading-7 text-white/76">
                    Legacy account classes map through an older template-selection branch in
                    <span className="text-white"> NOTICESEL04 </span>
                    after penalty computation. The bypass condition originates from shared class mapping
                    logic and is preserved in a duplicated branch. Generate characterization tests before
                    consolidating the behavior.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/45">Confidence and scope</div>
                  <div className="mt-3 space-y-3 text-sm text-white/72">
                    <div>Confidence: High</div>
                    <div>Modules touched: 5</div>
                    <div>Downstream systems affected: 3</div>
                    <div>Recommended path: Wrap → Test → Consolidate</div>
                  </div>
                </div>
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
      </div>
    </ProductShell>
  </>
  )
}
