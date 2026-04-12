import Reveal from "@/components/site/Reveal";
import ProductPreview from "@/components/site/ProductPreview";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";

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

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 sm:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:px-12 lg:pb-24 lg:pt-20">
          <Reveal className="max-w-3xl">
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
              <ButtonLink href="/demo">Request enterprise demo</ButtonLink>
              <ButtonLink href="/login" variant="secondary">
                Open workspace
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.06}>
                  <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-white/58">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ProductPreview />
          </Reveal>
        </div>
      </section>

      <Section
        id="platform"
        eyebrow="Platform"
        title="From trapped logic to operating intelligence."
        description="LegacyBridge creates a living system graph around old codebases so teams can understand dependencies, preserve expert knowledge, generate safer tests, and modernize with evidence instead of guesswork."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.05}>
              <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="text-lg font-medium text-white">{pillar.title}</div>
                <p className="mt-4 text-sm leading-7 text-white/65">{pillar.body}</p>
              </article>
            </Reveal>
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
            {features.map((feature, index) => (
              <Reveal key={feature} delay={index * 0.03}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/78">
                  {feature}
                </div>
              </Reveal>
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
          {outcomes.map((outcome, index) => (
            <Reveal key={outcome} delay={index * 0.03}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-white/72">
                {outcome}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="ROI framing"
        title="Why teams buy before they rewrite."
        description="LegacyBridge creates value by reducing uncertainty, compressing discovery time, and helping teams act more safely around systems they cannot casually replace."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {roiItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="text-lg font-medium text-white">{item.title}</div>
                <div className="mt-4 text-sm leading-7 text-white/68">{item.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Trust posture"
        title="Structured like an enterprise pilot, not a toy demo."
        description="Use this section as premium placeholder proof while future logos, case studies, and customer evidence are added."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/72">
                {item}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Enterprise Logo", "Pilot Customer", "Transformation Partner", "Industry Reference"].map((placeholder, index) => (
            <Reveal key={placeholder} delay={index * 0.04}>
              <div className="flex h-24 items-center justify-center rounded-3xl border border-dashed border-white/12 bg-white/[0.03] text-xs uppercase tracking-[0.22em] text-white/35">
                {placeholder}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-12">
        <Reveal>
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
                <ButtonLink href="/demo">Request demo</ButtonLink>
                <ButtonLink href="/login" variant="secondary">
                  Open workspace
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
