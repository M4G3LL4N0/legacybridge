import PageIntro from "@/components/site/PageIntro";
import { SubpageVisual } from "@/components/SubpageVisual";
import SectionCta from "@/components/site/SectionCta";

const comparisons = [
  {
    title: "Generic coding assistant",
    left: [
      "Optimized for code generation",
      "Weak system-level context",
      "Limited brownfield workflow framing",
      "Not built around pilot-led enterprise trust",
    ],
    right: [
      "Built for system understanding first",
      "Cross-source workflow and dependency visibility",
      "Designed for fragile legacy environments",
      "Structured around enterprise pilot adoption",
    ],
  },
  {
    title: "Static documentation effort",
    left: [
      "Often stale quickly",
      "Hard to connect to live system behavior",
      "Usually disconnected from code and job reality",
      "Weak modernization sequencing value",
    ],
    right: [
      "Continuously tied to workflows and artifacts",
      "Maps actual system relationships",
      "Connects docs, code, jobs, and knowledge",
      "Helps teams decide safer next actions",
    ],
  },
  {
    title: "Blind rewrite motion",
    left: [
      "High cost before clarity",
      "Often underestimates embedded business logic",
      "Creates avoidable sequencing mistakes",
      "Can lose critical operational assumptions",
    ],
    right: [
      "Creates clarity before large spend",
      "Surfaces hidden logic first",
      "Improves sequencing and change safety",
      "Preserves knowledge before transformation begins",
    ],
  },
];

export default function ComparePage() {
  return (
    <main className="premium-page-shell">
      <SubpageVisual variant="default" />
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="Compare"
          title="LegacyBridge is not another generic AI coding tool."
          description="The product is designed around system intelligence, workflow understanding, and safer modernization inside brownfield environments where context matters more than novelty."
        />

        <div className="mt-12 space-y-6">
          {comparisons.map((comparison) => (
            <div
              key={comparison.title}
              className="premium-surface premium-surface-hover rounded-[2rem] p-7"
            >
              <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {comparison.title}
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                    Typical alternative
                  </div>
                  <div className="mt-4 space-y-3">
                    {comparison.left.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/68"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(56,189,248,0.10),rgba(16,185,129,0.05))] p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/58">
                    LegacyBridge
                  </div>
                  <div className="mt-4 space-y-3">
                    {comparison.right.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/20 p-3 text-sm text-white/80"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell pb-24">
        <SectionCta
          eyebrow="Best wedge"
          title="Use comparison to sharpen the buying conversation."
          body="The strongest positioning frames LegacyBridge as the intelligence layer that comes before dangerous change, not after it."
          primaryHref="/demo"
          primaryLabel="Request walkthrough"
          secondaryHref="/pilot"
          secondaryLabel="Review pilot"
        />
      </section>
    </main>
  );
}
