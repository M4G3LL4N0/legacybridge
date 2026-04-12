import Reveal from "@/components/site/Reveal";
import ProductPreview from "@/components/site/ProductPreview";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import SystemStrataGraphic from "@/components/graphics/SystemStrataGraphic";
import LegacyGraphGraphic from "@/components/graphics/LegacyGraphGraphic";
import ModernizationRunwayGraphic from "@/components/graphics/ModernizationRunwayGraphic";
import SignalCardGraphic from "@/components/graphics/SignalCardGraphic";
import FaqSection from "@/components/site/FaqSection";
import CaseStudyPlaceholderSection from "@/components/site/CaseStudyPlaceholderSection";

const pillars = [
  {
    title: "System intelligence for legacy software",
    body: "LegacyBridge transforms code, jobs, rules, documents, and operational knowledge into a system-level intelligence layer teams can actually work from.",
  },
  {
    title: "Safer change before modernization",
    body: "Surface dependency risk, generate characterization coverage, and identify fragile branches before expensive modernization work starts.",
  },
  {
    title: "A bridge between old systems and new teams",
    body: "Preserve embedded business logic, reduce dependence on retiring experts, and help modern engineers contribute faster inside legacy-heavy environments.",
  },
];

const surfaces = [
  "Natural-language workflow understanding",
  "Cross-source dependency and lineage graphing",
  "Business-rule extraction and clustering",
  "Generated characterization pack previews",
  "Knowledge capture from operators and experts",
  "Executive summary readouts for leadership",
  "Workflow-level risk scoring and prioritization",
  "Pilot-to-private enterprise deployment path",
];

const signals = [
  "Reduce the time needed to understand one critical workflow",
  "Make fragile branches visible before they break change programs",
  "Preserve logic that normally lives only in people and tickets",
  "Create safer sequencing for modernization work",
  "Expand what modern engineering teams can contribute",
  "Lower uncertainty before large rewrite or migration spend",
];

const trustItems = [
  "Designed for private enterprise deployment paths",
  "Built for brownfield operational reality, not greenfield demos",
  "Pilot-first adoption model for high-trust enterprise entry",
  "Outputs built for both technical teams and executive stakeholders",
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
              The intelligence layer
              <span className="block text-white/62">for software nobody can casually replace.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              LegacyBridge helps enterprises understand, stabilize, and modernize critical old systems
              by turning code, jobs, rules, artifacts, and tribal knowledge into one operating layer.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/demo">Request enterprise walkthrough</ButtonLink>
              <ButtonLink href="/login" variant="secondary">
                Enter the workspace
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { value: "Workflow-first", label: "prove value on one critical path" },
                { value: "Cross-source", label: "code + docs + jobs + knowledge" },
                { value: "Enterprise-ready", label: "designed for high-trust deployment" },
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
        description="LegacyBridge is for organizations that depend on critical old systems but can no longer afford to keep them opaque."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.05}>
              <article className="premium-surface premium-surface-hover rounded-[1.9rem] p-6">
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
          title="Built for understanding first, not blind automation."
          description="The product is structured around explainability, visibility, preservation, and safer action inside brownfield environments."
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
                body="See the operational branches, routing paths, and downstream dependencies that usually stay invisible until change fails."
                tone="cyan"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <SignalCardGraphic
                title="Knowledge continuity"
                body="Capture what senior operators know before business-critical system understanding disappears into memory or ticket history."
                tone="violet"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Operational outcomes"
        title="Create leverage before rewrite spend."
        description="LegacyBridge is strongest where the system matters, the documentation is weak, and change feels expensive or dangerous."
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
        eyebrow="Pilot package"
        title="The right first sale is one workflow, not a giant rollout."
        description="The fastest way to build trust is to make one fragile workflow legible, useful, and strategically actionable."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "What gets ingested",
              body: "One critical workflow, its relevant source materials, operational context, and the artifacts needed to create an accurate signal layer.",
            },
            {
              title: "What gets surfaced",
              body: "Dependencies, hidden rules, branch risk, expert assumptions, coverage gaps, and the safest path forward before broader change begins.",
            },
            {
              title: "What leadership gets",
              body: "A credible modernization readout that clarifies where the system is fragile, what should be protected, and where to act first.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="premium-surface premium-surface-hover rounded-[1.9rem] p-6">
                <div className="text-lg font-medium text-white">{item.title}</div>
                <div className="mt-4 text-sm leading-7 text-white/68">{item.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CaseStudyPlaceholderSection />

      <Section
        eyebrow="Trust posture"
        title="Made to feel credible in enterprise rooms."
        description="The visual system, product framing, and pilot structure are all designed to signal control, seriousness, and strategic value."
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

      <FaqSection />

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
                  Build understanding before you change the system.
                </h3>
                <p className="mt-5 text-base leading-8 text-white/70">
                  Use a focused pilot to turn one opaque workflow into a clearer, safer, and more strategic modernization starting point.
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
