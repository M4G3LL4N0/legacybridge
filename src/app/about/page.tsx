import Section from "@/components/ui/Section";

export default function AboutPage() {
  return (
    <main>
      <Section
        eyebrow="About"
        title="LegacyBridge exists because critical old systems are still massively valuable."
        description="The future is not only about generating new code. It is also about making the old code that still powers industries understandable, safer, and strategically usable again."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md">
            <div className="text-xl font-medium text-white">Thesis</div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/68">
              <p>
                The most critical software in the world is often the least understood.
                LegacyBridge is built to close that gap.
              </p>
              <p>
                We believe AI should not just accelerate greenfield development. It should
                also unlock brownfield reality: legacy systems, encoded business rules,
                retiring expertise, and fragile infrastructure that still carries real economic weight.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md">
            <div className="text-xl font-medium text-white">Direction</div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/68">
              <p>
                LegacyBridge starts with explainability, system graphing, and pilot-led
                discovery. Over time it expands into testing, safer change workflows,
                modernization orchestration, and domain-specific enterprise intelligence.
              </p>
              <p>
                The long-term goal is to become the intelligence layer for codebases nobody
                can afford to misunderstand.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
