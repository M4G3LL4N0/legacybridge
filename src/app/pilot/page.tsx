import Reveal from "@/components/site/Reveal";
import { SubpageVisual } from "@/components/SubpageVisual";
import PageIntro from "@/components/site/PageIntro";
import SectionCta from "@/components/site/SectionCta";
import PilotMotionGraphic from "@/components/graphics/PilotMotionGraphic";

export default function PilotPage() {
  return (
    <main className="premium-page-shell">
      <SubpageVisual variant="default" />
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="Pilot"
          title="The right first sale is one workflow, one workspace, one readout."
          description="LegacyBridge is designed to enter through a focused pilot that proves signal fast around one fragile, high-value system path."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Why pilot first",
              body: "Because trust is earned faster by making one opaque workflow understandable than by promising full-system transformation upfront.",
            },
            {
              title: "What gets delivered",
              body: "A dependency view, rule and branch signal, characterization direction, and a clearer recommendation about what to do next.",
            },
            {
              title: "Who it serves",
              body: "Architecture leaders, modernization owners, platform teams, and executives responsible for systems nobody can casually replace.",
            },
          ].map((item) => (
            <div key={item.title} className="premium-surface premium-surface-hover rounded-[1.9rem] p-6">
              <div className="text-lg font-medium text-white">{item.title}</div>
              <div className="mt-4 text-sm leading-7 text-white/68">{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell py-4">
        <Reveal>
          <PilotMotionGraphic />
        </Reveal>
      </section>

      <section className="page-shell pb-24 pt-12">
        <Reveal>
          <SectionCta
            eyebrow="Pilot entry"
            title="Use the pilot to qualify the broader opportunity."
            body="Once one workflow becomes legible and strategically useful, the path to broader system coverage becomes much easier to justify."
            primaryHref="/demo"
            primaryLabel="Request pilot walkthrough"
            secondaryHref="/pricing"
            secondaryLabel="Review pricing"
          />
        </Reveal>
      </section>
    </main>
  );
}
