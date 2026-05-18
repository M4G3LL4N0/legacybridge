import ButtonLink from "@/components/ui/ButtonLink";
import { SubpageVisual } from "@/components/SubpageVisual";
import Reveal from "@/components/site/Reveal";
import DemoNarrativeGraphic from "@/components/graphics/DemoNarrativeGraphic";
import DemoWorkspaceGraphic from "@/components/graphics/DemoWorkspaceGraphic";
import PageIntro from "@/components/site/PageIntro";
import SectionCta from "@/components/site/SectionCta";
import { LegacyBridgeQuerySim } from "@/components/LegacyBridgeQuerySim";

export default function DemoPage() {
  return (
    <main className="premium-page-shell">
      <SubpageVisual variant="demo" />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <PageIntro
          eyebrow="Demo"
          title="Request a LegacyBridge enterprise walkthrough."
          description="The best first demo proves that one fragile workflow can become understandable, actionable, and strategically safer within a focused pilot."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="premium-surface rounded-[1.9rem] p-7">
              <div className="text-xl font-medium text-white">What a strong walkthrough should show</div>
              <div className="mt-6 space-y-4">
                {[
                  "How LegacyBridge builds a cross-source system intelligence layer",
                  "How natural-language questions resolve into workflow understanding",
                  "How rules, dependencies, and hidden branches are surfaced",
                  "How generated test packs support safer next steps",
                  "How a pilot leads into broader enterprise deployment",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/72 transition hover:border-cyan-300/18 hover:bg-white/[0.05]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="premium-surface rounded-[1.9rem] p-7">
              <div className="text-xl font-medium text-white">Request flow</div>
              <div className="mt-6 space-y-4">
                <label className="form-shell block">
                  <input placeholder="Work email" />
                </label>
                <label className="form-shell block">
                  <input placeholder="Company" />
                </label>
                <label className="form-shell block">
                  <input placeholder="Primary legacy system" />
                </label>
                <label className="form-shell block">
                  <textarea rows={4} placeholder="Current modernization challenge" />
                </label>
                <label className="form-shell block">
                  <input placeholder="Preferred timeline" />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <ButtonLink href="/login">Request walkthrough</ButtonLink>
                <ButtonLink href="/login" variant="secondary">
                  View workspace
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-10 lg:px-12">
        <Reveal>
          <LegacyBridgeQuerySim />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-10 lg:px-12">
        <Reveal>
          <DemoWorkspaceGraphic />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <Reveal>
          <DemoNarrativeGraphic />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Reveal>
          <SectionCta
            eyebrow="Next move"
            title="Use the walkthrough to qualify the first pilot."
            body="A strong first conversation should identify one critical workflow, one buyer group, and one credible path to value."
            primaryHref="/pricing"
            primaryLabel="Review pricing"
            secondaryHref="/platform"
            secondaryLabel="Explore platform"
          />
        </Reveal>
      </section>
    </main>
  );
}
