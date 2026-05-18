import Section from "@/components/ui/Section";
import { SubpageVisual } from "@/components/SubpageVisual";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/site/Reveal";
import PricingValueGraphic from "@/components/graphics/PricingValueGraphic";
import FaqSection from "@/components/site/FaqSection";

const tiers = [
  {
    name: "Pilot",
    price: "Custom",
    body: "The strongest entry point. One critical workflow, one workspace, and one high-signal readout that proves value fast.",
    items: [
      "One pilot workspace",
      "Critical workflow mapping",
      "Initial rule extraction",
      "Generated test-pack preview",
      "Executive summary readout",
    ],
  },
  {
    name: "Team",
    price: "Custom",
    body: "Expand from one workflow into broader system visibility for architecture, modernization, and platform teams.",
    items: [
      "Multiple workflows",
      "Cross-source intelligence graph",
      "Artifact explorer",
      "Workflow risk scoring",
      "Broader team onboarding support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    body: "Private deployment, enterprise controls, larger system coverage, and deeper modernization sequencing support.",
    items: [
      "Private deployment path",
      "Role-scoped workspace access",
      "Broader system indexing",
      "Modernization planning support",
      "Executive and technical reporting",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="premium-page-shell">
      <SubpageVisual variant="pricing" />
      <Section
        eyebrow="Pricing"
        title="Enterprise pricing built around strategic leverage."
        description="LegacyBridge is priced around workflow clarity, risk reduction, and modernization readiness rather than commodity seat-based tooling."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.05}>
              <article className="premium-surface premium-surface-hover rounded-[1.9rem] p-7">
                <div className="text-sm uppercase tracking-[0.22em] text-cyan-100/55">{tier.name}</div>
                <div className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">{tier.price}</div>
                <div className="mt-4 text-sm leading-7 text-white/68">{tier.body}</div>

                <div className="mt-6 space-y-3">
                  {tier.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 p-3 text-sm text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-10 lg:px-12">
        <Reveal>
          <PricingValueGraphic />
        </Reveal>
      </section>

      <Section
        eyebrow="Why pricing is custom"
        title="The right scope depends on the system, not a seat slider."
        description="The engagement depends on workflow criticality, source complexity, deployment posture, and how quickly the customer needs a credible readout."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            "Some teams need one workflow mapped quickly to establish trust.",
            "Some need broader source coverage across docs, jobs, and operational artifacts.",
            "Some need private deployment and deeper modernization sequencing support.",
          ].map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="premium-surface premium-surface-hover rounded-[1.8rem] p-6 text-sm leading-7 text-white/72">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FaqSection />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/demo">Request pricing discussion</ButtonLink>
          <ButtonLink href="/pilot" variant="secondary">
            Review pilot flow
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
