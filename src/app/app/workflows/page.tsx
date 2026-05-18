import ProductShell from "@/components/product/ProductShell";
import { SubpageVisual } from "@/components/SubpageVisual";
import Panel from "@/components/product/Panel";
import WorkflowGalleryCard from "@/components/product/WorkflowGalleryCard";
import { workflows } from "@/lib/demo-data";

export default function WorkflowsPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <ProductShell>
      <Panel
        eyebrow="Workflows"
        title="Explore priority legacy workflows"
        rightSlot={
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            Demo catalog
          </div>
        }
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {workflows.map((workflow) => (
            <WorkflowGalleryCard
              key={workflow.slug}
              href={`/app/workflows/${workflow.slug}`}
              title={workflow.name}
              system={workflow.system}
              language={workflow.language}
              riskScore={workflow.riskScore}
              testCoverageGap={workflow.testCoverageGap}
              description={workflow.description}
            />
          ))}
        </div>
      </Panel>
    </ProductShell>
  </>
  )
}
