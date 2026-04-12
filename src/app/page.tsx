import Reveal from "@/components/site/Reveal";
import ProductPreview from "@/components/site/ProductPreview";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import SystemStrataGraphic from "@/components/graphics/SystemStrataGraphic";
import LegacyGraphGraphic from "@/components/graphics/LegacyGraphGraphic";
import ModernizationRunwayGraphic from "@/components/graphics/ModernizationRunwayGraphic";
import SignalCardGraphic from "@/components/graphics/SignalCardGraphic";

const pillars = [
  {
    title: "System intelligence",
    body: "Turn opaque legacy code, jobs, rules, and operational artifacts into a searchable system understanding layer.",
  },
  {
    title: "Safer change",
    body: "Map dependencies, score workflow risk, and generate characterization tests before fragile branches are touched.",
  },
  {
    title: "Modernization leverage",
    body: "Bridge old expertise to modern teams without forcing blind rewrites or losing embedded business logic.",
  },
];

const surfaces = [
  "Natural-language workflow queries",
  "Business-rule extraction",
  "Cross-source dependency graphing",
  "Generated characterization packs",
  "Knowledge capture from operators",
  "Executive-readout surfaces",
  "Workflow risk scoring",
  "Pilot-to-private deployment path",
];

const signals = [
  "Reduce dependency on retiring experts",
  "Shorten legacy workflow discovery time",
  "Create safer modernization sequencing",
  "Make undocumented branches visible",
  "Expand what modern engineers can contribute",
  "Preserve logic before migration spend begins",
];

const trustItems = [
  "Private enterprise deployment posture",
  "Built for brownfield operational reality",
  "Pilot-led adoption instead of blind rollout",
  "Outputs readable by both executives and engineers",
];

export default function HomePage() {
  return (
    <main className="premium-page-shell">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="premium-grid absolute inset-0 opacity-20" />
        <div className="signal-mist signal-mist-a" />
        <div className="signal-mist signal-mist-b" />
        <div className="beam-fade beam-fade-a" />
        <div className="beam-fade beam-fade-b" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-18 sm:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:pb-28 lg:pt-24">
          <Reveal className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100">
              Enterprise legacy intelligence
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.93] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.5rem]">
              Make old systems
              <span className="block text-white/62">finally understandable.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              LegacyBridge turns brittle legacy software into a living system intelligence layer
              so teams can understand risk, surface hidden rules, preserve expertise, and modernize
              with far more control.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/demo">Request enterprise demo</ButtonLink>
              <ButtonLink href="/login" variant="secondary">
                Open workspace
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { value: "Critical", label: "systems handled with care" },
                { value: "Cross-source", label: "code + docs + ops understanding" },
                { value: "Pilot-first", label: "adoption path for enterprises" },
              ].map((item, index) => (
                <Reveal key={item.label} delay={index * 0.05}>
                  <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md glow-edge">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {item.value}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-white/56">{item.label}</div>
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
        eyebrow="Platform"
        title="A command layer above fragile legacy reality."
        description="LegacyBridge is built for organizations that cannot casually replace the software underneath their operations, but cannot afford to keep it opaque either."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.05}>
              <article className="premium-surface rounded-[1.9rem] p-6">
                <div className="text-lg font-medium text-white">{pillar.title}</div>
                <p className="mt-4 text-sm leading-7 text-white/66">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-10 lg:px-12">
        <Reveal>
          <SystemStrataGraphic />
        </Reveal>
      </section>

      <section className="section-divider">
        <Section
          eyebrow="Core surfaces"
          title="Designed for system understanding, not generic code generation."
          description="The product experience is structured around explainability, dependency visibility, knowledge preservation, and safer decision-making."
          className="py-0"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {surfaces.map((surface, index) => (
              <Reveal key={surface} delay={index * 0.03}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/76">
                  {surface}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <LegacyGraphGraphic />
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={0.04}>
              <SignalCardGraphic
                title="Hidden branch visibility"
                body="Surface the operational branches, routing paths, and downstream effects that teams rarely see until change fails."
                tone="cyan"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <SignalCardGraphic
                title="Knowledge continuity"
                body="Capture what senior operators know before that understanding disappears into ticket history and memory."
                tone="violet"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Operational outcomes"
        title="Value before rewrite spend."
        description="LegacyBridge is most useful where critical systems are poorly documented, expertise is concentrated in too few people, and change feels dangerous."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {signals.map((signal, index) => (
            <Reveal key={signal} delay={index * 0.03}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-white/72">
                {signal}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-10 lg:px-12">
        <Reveal>
          <ModernizationRunwayGraphic />
        </Reveal>
      </section>

      <Section
        eyebrow="Trust posture"
        title="Premium enterprise feel without looking like another AI toy."
        description="This visual system is meant to communicate control, intelligence, and credibility around fragile infrastructure."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/72">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Reveal>
          <div className="premium-surface rounded-[2.2rem] p-8 sm:p-10 lg:p-12">
            <div className="signal-mist signal-mist-c" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-[0.25em] text-cyan-100/58">
                  Start with one critical workflow
                </div>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  Build clarity before you touch the system.
                </h3>
                <p className="mt-5 text-base leading-8 text-white/70">
                  Use a pilot to map dependencies, surface hidden rules, capture missing knowledge,
                  and identify the safest modernization path forward.
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
