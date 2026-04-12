import Section from "@/components/ui/Section";
import Reveal from "@/components/site/Reveal";
import IndustryFitGraphic from "@/components/graphics/IndustryFitGraphic";

const industries = [
  {
    title: "Banking & payments",
    body: "Transaction engines, fee logic, customer notices, and account workflows are often too valuable and risky to rewrite blindly.",
  },
  {
    title: "Insurance",
    body: "Claims pipelines, policy rules, actuarial logic, and notice systems often carry years of embedded business behavior.",
  },
  {
    title: "Healthcare",
    body: "Legacy workflows and operational integrations require continuity, traceability, and safer understanding before change.",
  },
  {
    title: "Government",
    body: "Mission-critical public systems often depend on shrinking pools of experts and aging documentation.",
  },
  {
    title: "Manufacturing & logistics",
    body: "Scheduling logic, inventory pathways, and ERP-adjacent operational systems stay deeply entangled in older stacks.",
  },
  {
    title: "Scientific & technical computing",
    body: "Fortran-heavy and long-lived computational systems need explainability, testability, and controlled evolution.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="premium-page-shell">
      <Section
        eyebrow="Industries"
        title="Best where replacement is expensive and understanding is scarce."
        description="LegacyBridge is strongest in organizations with valuable old logic, fragile workflows, and real pressure to modernize carefully."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.04}>
              <article className="premium-surface rounded-[1.9rem] p-7">
                <div className="text-xl font-medium text-white">{industry.title}</div>
                <p className="mt-4 text-sm leading-7 text-white/66">{industry.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Reveal>
          <IndustryFitGraphic />
        </Reveal>
      </section>
    </main>
  );
}
