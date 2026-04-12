import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/site/Reveal";

const tiers = [
  {
    name: "Pilot",
    price: "Custom",
    body: "Start with one critical workflow, one workspace, and a focused enterprise discovery engagement.",
    items: [
      "One pilot workspace",
      "Workflow mapping",
      "Initial rule extraction",
      "Generated test-pack preview",
      "Executive summary readout",
    ],
  },
  {
    name: "Team",
    price: "Custom",
    body: "Expand from one workflow into broader legacy system coverage for architecture and platform teams.",
    items: [
      "Multiple workflows",
      "Cross-source knowledge graph",
      "Artifact explorer",
      "Workflow risk scoring",
      "Broader onboarding support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    body: "Private deployment, enterprise controls, larger system coverage, and deeper modernization programs.",
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
    <main>
      <Section
        eyebrow="Pricing"
        title="Enterprise pricing built around pilot-led adoption."
        description="LegacyBridge is positioned for enterprise discovery, system understanding, and safer modernization planning rather than commodity seat-based developer tooling."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.05}>
              <article className="rounded-[1.9rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md">
                <div className="text-sm uppercase tracking-[0.22em] text-blue-100/55">{tier.name}</div>
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

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/demo">Request pricing discussion</ButtonLink>
          <ButtonLink href="/pilot" variant="secondary">
            Review pilot flow
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
