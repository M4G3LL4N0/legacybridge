import PageIntro from "@/components/site/PageIntro";
import SectionCta from "@/components/site/SectionCta";

const levers = [
  {
    title: "Discovery compression",
    body: "Reduce how long it takes to understand one critical workflow well enough to act with confidence.",
  },
  {
    title: "Change-risk reduction",
    body: "Improve sequencing and generate safer next steps before teams touch fragile branches.",
  },
  {
    title: "Knowledge preservation",
    body: "Capture embedded logic before expertise leaves the organization or becomes too fragmented to recover easily.",
  },
  {
    title: "Modernization efficiency",
    body: "Spend larger transformation budgets with better clarity about where risk, value, and sequencing truly sit.",
  },
];

export default function RoiPage() {
  return (
    <main className="premium-page-shell">
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="ROI"
          title="LegacyBridge creates leverage by reducing uncertainty before expensive work begins."
          description="The return is not only faster answers. It is better sequencing, safer decisions, and less waste around systems that already carry economic weight."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {levers.map((lever, index) => (
            <div
              key={lever.title}
              className={`premium-surface premium-surface-hover rounded-[1.9rem] p-7 ${
                index % 2 === 0
                  ? "bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(56,189,248,0.03))]"
                  : "bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(16,185,129,0.03))]"
              }`}
            >
              <div className="text-xl font-medium text-white">{lever.title}</div>
              <div className="mt-4 text-sm leading-7 text-white/68">{lever.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell pb-24">
        <SectionCta
          eyebrow="ROI framing"
          title="The best ROI story starts with one costly uncertainty."
          body="Find the workflow that is hardest to explain, riskiest to touch, or most dependent on too few experts. That is usually the clearest wedge."
          primaryHref="/pilot"
          primaryLabel="Review pilot"
          secondaryHref="/pricing"
          secondaryLabel="See pricing"
        />
      </section>
    </main>
  );
}
