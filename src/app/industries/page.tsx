import Section from "@/components/ui/Section";

const industries = [
  {
    title: "Banking & payments",
    body: "Legacy transaction engines, batch jobs, fee logic, customer notices, and account workflows are often too valuable and risky to rewrite blindly.",
  },
  {
    title: "Insurance",
    body: "Claims pipelines, policy rules, actuarial logic, and notice systems often carry years of embedded business behavior that teams can no longer fully explain.",
  },
  {
    title: "Healthcare",
    body: "Legacy workflows, operational integrations, and hard-to-replace systems require continuity, traceability, and safer understanding before change.",
  },
  {
    title: "Government",
    body: "Mission-critical public systems often depend on shrinking pools of experts and aging documentation while the demand for modernization keeps rising.",
  },
  {
    title: "Manufacturing & logistics",
    body: "ERP-adjacent processes, inventory flows, scheduling logic, and operational jobs often remain deeply entangled in older enterprise stacks.",
  },
  {
    title: "Scientific & technical computing",
    body: "Fortran-heavy and long-lived computational systems need explainability, testability, and controlled evolution rather than reckless replacement.",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <Section
        eyebrow="Industries"
        title="Best where replacement is expensive and understanding is scarce."
        description="LegacyBridge is strongest in organizations with valuable old logic, fragile workflows, and real pressure to modernize carefully."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md"
            >
              <div className="text-xl font-medium text-white">{industry.title}</div>
              <p className="mt-4 text-sm leading-7 text-white/65">{industry.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
