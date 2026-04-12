import PageIntro from "@/components/site/PageIntro";
import SectionCta from "@/components/site/SectionCta";

const docs = [
  {
    title: "Platform overview",
    body: "What LegacyBridge does, where it fits, and how the system intelligence layer works.",
  },
  {
    title: "Pilot guide",
    body: "How to frame the first workflow, first workspace, and first readout.",
  },
  {
    title: "Security posture",
    body: "How to discuss deployment, access, trust, and controlled enterprise usage.",
  },
  {
    title: "Buyer framing",
    body: "How architecture, platform, modernization, and executive stakeholders evaluate LegacyBridge.",
  },
  {
    title: "Operational rollout",
    body: "How to move from one pilot workflow into broader system coverage.",
  },
  {
    title: "Workflow scoring",
    body: "How to decide which legacy workflow is the right first wedge.",
  },
];

export default function DocsPage() {
  return (
    <main className="premium-page-shell">
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="Docs"
          title="A documentation-style layer for buyers, operators, and evaluators."
          description="This surface gives LegacyBridge a stronger knowledge footprint and makes the company feel more complete."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {docs.map((doc, index) => (
            <div
              key={doc.title}
              className={`premium-surface premium-surface-hover rounded-[1.9rem] p-6 ${
                index % 2 === 0
                  ? "bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(56,189,248,0.03))]"
                  : "bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(16,185,129,0.03))]"
              }`}
            >
              <div className="text-lg font-medium text-white">{doc.title}</div>
              <div className="mt-4 text-sm leading-7 text-white/68">{doc.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell pb-24">
        <SectionCta
          eyebrow="Need a starting point"
          title="The pilot guide is the strongest first document."
          body="If the buyer understands the pilot structure, the rest of the product story becomes easier to absorb."
          primaryHref="/pilot"
          primaryLabel="Review pilot"
          secondaryHref="/demo"
          secondaryLabel="Request demo"
        />
      </section>
    </main>
  );
}
