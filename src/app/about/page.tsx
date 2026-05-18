import Reveal from "@/components/site/Reveal";
import { SubpageVisual } from "@/components/SubpageVisual";
import PageIntro from "@/components/site/PageIntro";
import SectionCta from "@/components/site/SectionCta";

export default function AboutPage() {
  return (
    <main className="premium-page-shell">
      <SubpageVisual variant="about" />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <PageIntro
          eyebrow="About"
          title="LegacyBridge exists because critical old systems still carry real economic weight."
          description="The future is not only about generating new software. It is also about making the software that still runs important organizations understandable again."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="premium-surface premium-surface-hover rounded-[1.9rem] p-7">
              <div className="text-xl font-medium text-white">Thesis</div>
              <div className="mt-4 space-y-4 text-sm leading-7 text-white/68">
                <p>
                  The most critical software in the world is often the least legible. It contains business rules,
                  operational assumptions, and workflow dependencies that few teams can confidently explain end to end.
                </p>
                <p>
                  LegacyBridge is built to close that gap by turning code, jobs, documents, artifacts, and tribal
                  knowledge into a clearer system intelligence layer.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="premium-surface premium-surface-hover rounded-[1.9rem] p-7">
              <div className="text-xl font-medium text-white">Direction</div>
              <div className="mt-4 space-y-4 text-sm leading-7 text-white/68">
                <p>
                  LegacyBridge starts with explainability, graphing, rule extraction, and pilot-led discovery.
                </p>
                <p>
                  Over time it expands into testing, safer change workflows, modernization planning, and enterprise
                  system intelligence for environments nobody can casually replace.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Reveal>
          <SectionCta
            eyebrow="Why now"
            title="AI changed the economics of understanding old systems."
            body="The opportunity is not only faster new-code generation. It is also making legacy software far more legible, governable, and strategically useful."
            primaryHref="/demo"
            primaryLabel="Request walkthrough"
            secondaryHref="/platform"
            secondaryLabel="See platform"
          />
        </Reveal>
      </section>
    </main>
  );
}
