import Reveal from "@/components/site/Reveal";
import WorkflowLatticeGraphic from "@/components/graphics/WorkflowLatticeGraphic";
import ProductShowcaseGraphic from "@/components/graphics/ProductShowcaseGraphic";
import PlatformCommandGraphic from "@/components/graphics/PlatformCommandGraphic";
import PageIntro from "@/components/site/PageIntro";
import SectionCta from "@/components/site/SectionCta";

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
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <PageIntro
          eyebrow="Platform"
          title="A system intelligence layer for old code."
          description="LegacyBridge is built to make high-value legacy systems more understandable, more governable, and safer to evolve."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Reveal key={module.title} delay={index * 0.04}>
              <article className="premium-surface premium-surface-hover rounded-[1.9rem] p-6">
                <div className="text-lg font-medium text-white">{module.title}</div>
                <p className="mt-4 text-sm leading-7 text-white/66">{module.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

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

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.25em] text-cyan-100/60">Pilot motion</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            The first win is signal, not sprawl.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            The strongest first outcome is a clearer understanding of one critical workflow and a better decision about what to do next.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Reveal>
          <SectionCta
            eyebrow="Next move"
            title="Start where the system is least understood."
            body="That is usually where the value of visibility, testing, and better sequencing is highest."
            primaryHref="/demo"
            primaryLabel="Request demo"
            secondaryHref="/pilot"
            secondaryLabel="Review pilot"
          />
        </Reveal>
      </section>
    </main>
  );
}
