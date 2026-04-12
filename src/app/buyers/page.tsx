import PageIntro from "@/components/site/PageIntro";
import SectionCta from "@/components/site/SectionCta";

const buyers = [
  {
    title: "Architecture leaders",
    body: "Need a clearer view of what critical systems actually do before sequencing modernization or integration efforts.",
  },
  {
    title: "Platform teams",
    body: "Need to reduce change risk, improve visibility, and help modern engineers work more safely around brownfield systems.",
  },
  {
    title: "Modernization owners",
    body: "Need to decide where to preserve, wrap, test, refactor, or leave systems alone before large spend begins.",
  },
  {
    title: "Engineering leadership",
    body: "Need less dependence on a shrinking group of experts and better ways to onboard teams into legacy-heavy environments.",
  },
  {
    title: "Executive stakeholders",
    body: "Need a strategic readout of risk, sequencing, and where the next dollar of modernization effort should go.",
  },
  {
    title: "Security and enterprise IT",
    body: "Need confidence that access posture, deployment shape, and trust assumptions are enterprise-compatible.",
  },
];

export default function BuyersPage() {
  return (
    <main className="premium-page-shell">
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="Buyers"
          title="LegacyBridge is sold into organizations where multiple stakeholders care for different reasons."
          description="The strongest sales path aligns technical, operational, and executive value around one critical workflow."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {buyers.map((buyer) => (
            <div key={buyer.title} className="premium-surface premium-surface-hover rounded-[1.9rem] p-6">
              <div className="text-lg font-medium text-white">{buyer.title}</div>
              <div className="mt-4 text-sm leading-7 text-white/68">{buyer.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell pb-24">
        <SectionCta
          eyebrow="Stakeholder alignment"
          title="The first sale gets easier when one workflow matters to multiple buyers."
          body="That creates the cleanest internal case for a pilot and the fastest path to broader organizational traction."
          primaryHref="/demo"
          primaryLabel="Request walkthrough"
          secondaryHref="/compare"
          secondaryLabel="See comparison"
        />
      </section>
    </main>
  );
}
