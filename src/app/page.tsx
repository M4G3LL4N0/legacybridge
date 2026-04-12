import Link from "next/link";
import Section from "@/components/ui/Section";

const pillars = [
  {
    title: "Understand legacy systems",
    body: "Turn COBOL, RPG, Fortran, Ada, MUMPS, JCL, and brownfield enterprise code into searchable, explainable system intelligence.",
  },
  {
    title: "Ship safer changes",
    body: "Map dependencies, generate regression tests, score change risk, and reduce fear around fragile legacy workflows.",
  },
  {
    title: "Bridge old expertise to new AI",
    body: "Capture tribal knowledge, onboard modern engineers faster, and build a living modernization layer around code that still runs the world.",
  },
];

const features = [
  "Legacy code explainers",
  "Business-rule extraction",
  "Dependency and batch-job graphing",
  "AI-assisted safe fixes",
  "Regression test generation",
  "Modernization path recommendations",
  "Tribal-knowledge capture",
  "New-engineer onboarding academy",
];

const stats = [
  { value: "40+ yrs", label: "of trapped logic made legible" },
  { value: "1 layer", label: "to unify code, docs, rules, and risk" },
  { value: "0 blind rewrites", label: "required to create immediate value" },
];

const outcomes = [
  "Reduce dependency on retiring experts",
  "Create safer pathways for change requests",
  "Make undocumented workflows understandable",
  "Accelerate onboarding for modern engineers",
  "De-risk modernization before large spend",
  "Preserve logic before migrations begin",
];

const trustItems = [
  "Built for private enterprise deployment",
  "Designed for brittle brownfield systems",
  "Structured for pilot-led adoption",
  "Executive-readable outputs and workflow risk framing",
];

const roiItems = [
  {
    title: "Faster system understanding",
    body: "Compress the time required to explain a fragile workflow from weeks of interviews into a much faster, searchable knowledge surface.",
  },
  {
    title: "Safer change programs",
    body: "Generate test packs and dependency visibility before touching branch logic that nobody fully understands.",
  },
  {
    title: "More leverage from existing teams",
    body: "Help modern engineers contribute to legacy-heavy environments without waiting on a shrinking pool of specialists.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:pb-24 lg:pt-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-100">
              Critical software. Newly understandable.
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              AI for the code
              <span className="block text-white/65">that still runs the world.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              LegacyBridge transforms COBOL, RPG, Fortran, Ada, MUMPS, JCL, and other
              mission-critical systems into searchable knowledge, safer changes, and
              modernization clarity without blind rewrites.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
              >
                Request enterprise demo
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Open workspace
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md"
                >
                  <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/58">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/12 bg-white/7 p-4 shadow-[0_25px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="rounded-[1.65rem] border border-white/10 bg-[#08111a] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-blue-100/70">
                      System Intelligence Layer
                    </div>
                    <div className="mt-1 text-lg font-medium text-white">
                      Claims Processing Core
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                    Risk mapped
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                      Natural language query
                    </div>
                    <div className="mt-3 text-sm leading-7 text-white/78">
                      Which modules calculate late-payment penalties and update downstream
                      customer notices?
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                          Extracted answer
                        </div>
                        <div className="mt-3 text-sm leading-7 text-white/78">
                          4 COBOL programs, 2 JCL jobs, and 1 nightly batch process are involved.
                          Penalty logic is duplicated in 2 modules. One path bypasses updated
                          notice templates for legacy account classes.
                        </div>
                      </div>
                      <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] text-amber-100">
                        Change warning
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                        Test coverage gap
                      </div>
                      <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                        31%
                      </div>
                      <div className="mt-2 text-sm text-white/58">
                        of logic paths currently unprotected
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                        Recommended path
                      </div>
                      <div className="mt-3 text-sm leading-7 text-white/78">
                        Generate characterization tests, wrap penalty service, then refactor
                        duplicate branch logic.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-blue-300/20 blur-3xl lg:block" />
            <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full bg-amber-200/16 blur-3xl lg:block" />
          </div>
        </div>
      </section>

      <Section
        id="platform"
        eyebrow="Platform"
        title="From trapped logic to operating intelligence."
        description="LegacyBridge creates a living system graph around old codebases so teams can understand dependencies, preserve expert knowledge, generate safer tests, and modernize with evidence instead of guesswork."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="text-lg font-medium text-white">{pillar.title}</div>
              <p className="mt-4 text-sm leading-7 text-white/65">{pillar.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y border-white/8 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
        <Section
          eyebrow="Features"
          title="Built for brownfield reality."
          description="Not another generic coding assistant. LegacyBridge is designed for brittle, under-documented, mission-critical systems where context matters more than code generation theater."
          className="py-0"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/78"
              >
                {feature}
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section
        eyebrow="Outcomes"
        title="Value before modernization spend."
        description="Create immediate business value long before a multi-year migration program begins."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-white/72"
            >
              {outcome}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="ROI framing"
        title="Why teams buy before they rewrite."
        description="LegacyBridge creates value by reducing uncertainty, compressing discovery time, and helping teams act more safely around systems they cannot casually replace."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {roiItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="text-lg font-medium text-white">{item.title}</div>
              <div className="mt-4 text-sm leading-7 text-white/68">{item.body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Trust posture"
        title="Structured like an enterprise pilot, not a toy demo."
        description="Use this section as premium placeholder proof while future logos, case studies, and customer evidence are added."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-[1.35rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/72"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Enterprise Logo", "Pilot Customer", "Transformation Partner", "Industry Reference"].map((placeholder) => (
            <div
              key={placeholder}
              className="flex h-24 items-center justify-center rounded-3xl border border-dashed border-white/12 bg-white/[0.03] text-xs uppercase tracking-[0.22em] text-white/35"
            >
              {placeholder}
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-md sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.25em] text-blue-100/60">Get started</div>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Make your legacy system legible.
              </h3>
              <p className="mt-5 text-base leading-8 text-white/70">
                Start with a pilot. Ingest one critical workflow, map its dependencies,
                surface hidden business rules, and show where safer modernization starts.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
              >
                Request demo
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Open workspace
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
