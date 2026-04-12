import Link from "next/link";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/site/Reveal";
import WorkflowLatticeGraphic from "@/components/graphics/WorkflowLatticeGraphic";
import ProductShowcaseGraphic from "@/components/graphics/ProductShowcaseGraphic";
import PlatformCommandGraphic from "@/components/graphics/PlatformCommandGraphic";

const modules = [
  {
    title: "Explain",
    body: "Translate files, jobs, modules, and system behavior into language engineering teams and leadership can work from.",
  },
  {
    title: "Map",
    body: "Build a graph across code, jobs, business rules, data flows, copybooks, artifacts, and operational dependencies.",
  },
  {
    title: "Test",
    body: "Generate characterization coverage and surface regression priorities before risky edits or modernization moves begin.",
  },
  {
    title: "Preserve",
    body: "Capture operator knowledge and bind it directly to live workflows and system objects.",
  },
  {
    title: "Recommend",
    body: "Score risk and suggest safer next steps: preserve, wrap, modularize, or selectively modernize.",
  },
  {
    title: "Onboard",
    body: "Help modern teams ramp into real brownfield systems faster instead of relying on fragmented knowledge transfer.",
  },
];

export default function PlatformPage() {
  return (
    <main className="premium-page-shell">
      <Section
        eyebrow="Platform"
        title="A system intelligence layer for old code."
        description="LegacyBridge is built to make high-value legacy systems more understandable, more governable, and safer to evolve."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Reveal key={module.title} delay={index * 0.04}>
              <article className="premium-surface premium-surface-hover rounded-[1.9rem] p-6">
                <div className="text-lg font-medium text-white">{module.title}</div>
                <p className="mt-4 text-sm leading-7 text-white/66">{module.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-10 lg:px-12">
        <Reveal>
          <WorkflowLatticeGraphic />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
        <Reveal>
          <ProductShowcaseGraphic />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-10 lg:px-12">
        <Reveal>
          <PlatformCommandGraphic />
        </Reveal>
      </section>

      <Section
        eyebrow="Pilot motion"
        title="The platform is designed to prove signal fast."
        description="The first win is not a massive rollout. It is a clearer understanding of one critical workflow and a better decision about what to do next."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Ingest one fragile workflow and its relevant system context",
            "Build a first-pass dependency and rule graph",
            "Surface hidden branches, test gaps, and operational risk",
            "Recommend a safer modernization starting point",
          ].map((step, index) => (
            <Reveal key={step} delay={index * 0.04}>
              <div className="premium-surface premium-surface-hover rounded-3xl p-6 text-sm leading-7 text-white/72">
                <div className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-100/58">
                  Step 0{index + 1}
                </div>
                {step}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Reveal>
          <div className="premium-surface rounded-[2.2rem] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-[0.25em] text-cyan-100/58">Next move</div>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Start where the system is least understood.
                </h3>
                <p className="mt-5 text-base leading-8 text-white/70">
                  That is usually where the value of visibility, testing, and better sequencing is highest.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <ButtonLink href="/demo">Request demo</ButtonLink>
                <Link
                  href="/pilot"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  Review pilot
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
