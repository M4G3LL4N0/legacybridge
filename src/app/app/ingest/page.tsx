import Link from "next/link";
import ProductShell from "@/components/product/ProductShell";
import Panel from "@/components/product/Panel";

const jobs = [
  ["Repository parse", "Complete", "Core claims repository indexed and segmented by module family."],
  ["Batch lineage scan", "Running", "JCL flows, control dependencies, and nightly job relations are being mapped."],
  ["Rule extraction", "Running", "Business rules are being inferred from code, docs, and linked artifacts."],
  ["Test pack synthesis", "Queued", "Characterization scenarios will be generated after graph completion."],
];

export default function IngestPage() {
  return (
    <ProductShell>
      <div className="space-y-6">
        <Panel
          eyebrow="Ingest"
          title="Index the system before you touch it"
          rightSlot={
            <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs text-amber-100">
              Scan in progress
            </div>
          }
        >
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              ["Modules indexed", "418"],
              ["Jobs mapped", "37"],
              ["Rules surfaced", "96"],
              ["Artifacts linked", "28"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/40">{label}</div>
                <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Panel eyebrow="Job queue" title="Indexing tasks">
            <div className="space-y-4">
              {jobs.map(([title, status, body]) => (
                <div
                  key={title}
                  className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-white">{title}</div>
                      <div className="mt-2 text-sm leading-7 text-white/68">{body}</div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                      {status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="After ingest" title="What becomes available">
            <div className="space-y-4">
              {[
                "System graph and dependency map",
                "Natural-language query resolution",
                "Business rule extraction",
                "Workflow risk scoring",
                "Generated characterization tests",
                "Executive summary artifacts",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/72"
                >
                  {item}
                </div>
              ))}
              <div className="pt-2">
                <Link
                  href="/app/sources"
                  className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
                >
                  Review indexed sources
                </Link>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </ProductShell>
  );
}
