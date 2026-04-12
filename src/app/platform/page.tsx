import Link from "next/link";
import Section from "@/components/ui/Section";

const modules = [
  {
    title: "Explain",
    body: "Translate legacy code, files, jobs, and modules into plain-English explanations engineers and decision-makers can actually use.",
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
    body: "Train new engineers on the company’s actual legacy system rather than generic textbook examples.",
  },
];

export default function PlatformPage() {
  return (
    <main>
      <Section
        eyebrow="Platform"
        title="A system intelligence layer for old code."
        description="LegacyBridge is designed to sit above brittle legacy systems and make them understandable, safer to change, and more realistic to modernize."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {modules.map((module) => (
            <article
              key={module.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="text-lg font-medium text-white">{module.title}</div>
              <p className="mt-4 text-sm leading-7 text-white/65">{module.body}</p>
            </article>
          ))}
        </div>
      </Section>

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
            <div
              key={step}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-white/72"
            >
              <div className="mb-4 text-xs uppercase tracking-[0.25em] text-blue-100/60">
                Step 0{index + 1}
              </div>
              {step}
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-md sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.25em] text-blue-100/60">Next move</div>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Start with one system that nobody wants to touch.
              </h3>
              <p className="mt-5 text-base leading-8 text-white/70">
                That is usually where the value is most concentrated and the fear is most expensive.
              </p>
            </div>
            <Link
              href="/pilot"
              className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
            >
              Book pilot
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
