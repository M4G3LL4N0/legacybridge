import Link from "next/link";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/site/Reveal";
import WorkflowLatticeGraphic from "@/components/graphics/WorkflowLatticeGraphic";
import ProductShowcaseGraphic from "@/components/graphics/ProductShowcaseGraphic";

const modules = [
  {
    title: "Explain",
    body: "Translate legacy code, files, jobs, and modules into plain-English explanations engineers and leaders can use.",
  },
  {
    title: "Map",
    body: "Build a dependency graph across programs, jobs, business rules, data flows, copybooks, and operational pathways.",
  },
  {
    title: "Test",
    body: "Generate characterization tests and regression protections before risky edits or migration activity begins.",
  },
  {
    title: "Preserve",
    body: "Capture tribal knowledge from senior engineers and bind it directly to live system artifacts and workflows.",
  },
  {
    title: "Recommend",
    body: "Score risk and suggest safer next steps: leave in place, wrap with APIs, modularize, or selectively modernize.",
  },
  {
    title: "Onboard",
    body: "Train new engineers on the company’s actual system rather than generic textbook examples.",
  },
];

export default function PlatformPage() {
  return (
    <main className="premium-page-shell">
      <Section
        eyebrow="Platform"
        title="A system intelligence layer for old code."
        description="LegacyBridge sits above brittle legacy systems and makes them understandable, safer to change, and more realistic to modernize."
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

      <Section
        eyebrow="Workflow"
        title="How a pilot engagement works."
        description="The first version of the product is built around rapid, high-signal discovery."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Ingest one critical workflow and its source materials",
            "Build a first-pass dependency and rule graph",
            "Surface hidden logic, test gaps, and fragile branches",
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
                  Start with one system nobody wants to touch.
                </h3>
                <p className="mt-5 text-base leading-8 text-white/70">
                  That is usually where the risk is highest and the value of clarity is strongest.
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
