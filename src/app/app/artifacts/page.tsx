import ProductShell from "@/components/product/ProductShell";
import Panel from "@/components/product/Panel";
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
        <div className="grid gap-4 lg:grid-cols-2">
          {artifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-medium text-white">{artifact.name}</div>
                  <div className="mt-2 text-sm text-white/55">
                    {artifact.type} · {artifact.system}
                  </div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                  {artifact.status}
                </div>
              </div>
              <div className="mt-4 text-sm leading-7 text-white/68">{artifact.summary}</div>
            </div>
          ))}
        </div>
      </Panel>
    </ProductShell>
  );
}
