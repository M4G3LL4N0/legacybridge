import ProductShell from "@/components/product/ProductShell";
import Panel from "@/components/product/Panel";

const sources = [
  {
    name: "claims-core-repo",
    type: "Repository",
    state: "Indexed",
    body: "COBOL modules, copybooks, and JCL assets attached to claims processing pilot.",
  },
  {
    name: "claims-batch-runbook",
    type: "Runbook",
    state: "Indexed",
    body: "Operational documentation linked to nightly job sequence and exception handling.",
  },
  {
    name: "notice-routing-spreadsheet",
    type: "Reference artifact",
    state: "Review",
    body: "Manual mapping used by operations team to track template paths and edge cases.",
  },
  {
    name: "senior-operator-walkthrough",
    type: "Knowledge capture",
    state: "Draft",
    body: "Recorded assumptions and exception notes awaiting artifact binding and approval.",
  },
];

export default function SourcesPage() {
  return (
    <ProductShell>
      <div className="space-y-6">
        <Panel
          eyebrow="Sources"
          title="Everything attached to the workspace"
          rightSlot={
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              4 visible sources
            </div>
          }
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {sources.map((source) => (
              <div
                key={source.name}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-medium text-white">{source.name}</div>
                    <div className="mt-2 text-sm text-white/55">
                      {source.type}
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                    {source.state}
                  </div>
                </div>
                <div className="mt-4 text-sm leading-7 text-white/68">{source.body}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel eyebrow="Why it matters" title="Legacy understanding is cross-source">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Source code reveals implementation",
              "Runbooks reveal operational intent",
              "Reference files reveal human workarounds",
              "Expert walkthroughs reveal hidden assumptions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </ProductShell>
  );
}
