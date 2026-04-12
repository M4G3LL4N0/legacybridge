import ProductShell from "@/components/product/ProductShell";
import Panel from "@/components/product/Panel";
import ArtifactPreviewCard from "@/components/product/ArtifactPreviewCard";
import { artifacts } from "@/lib/demo-data";

export default function ArtifactsPage() {
  return (
    <ProductShell>
      <Panel
        eyebrow="Artifacts"
        title="Indexed materials, generated packs, and system-linked knowledge"
        rightSlot={
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            {artifacts.length} demo artifacts
          </div>
        }
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {artifacts.map((artifact) => (
            <ArtifactPreviewCard
              key={artifact.id}
              title={artifact.name}
              type={`${artifact.type} · ${artifact.system}`}
              status={artifact.status}
              body={artifact.summary}
            />
          ))}
        </div>
      </Panel>
    </ProductShell>
  );
}
