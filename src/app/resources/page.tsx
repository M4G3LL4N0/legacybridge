import Reveal from "@/components/site/Reveal";
import { SubpageVisual } from "@/components/SubpageVisual";
import PageIntro from "@/components/site/PageIntro";
import SectionCta from "@/components/site/SectionCta";
import ResourcesShelfGraphic from "@/components/graphics/ResourcesShelfGraphic";

export default function ResourcesPage() {
  return (
    <main className="premium-page-shell">
      <SubpageVisual variant="default" />
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="Resources"
          title="The materials that help LegacyBridge get bought and deployed."
          description="This is the place for buyer-facing, operator-facing, and pilot-facing materials that support real enterprise conversations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Buying materials",
              body: "Documents and internal briefs that help architecture, platform, and leadership teams understand the wedge.",
            },
            {
              title: "Pilot materials",
              body: "Guides that help frame the first workflow, first workspace, and first signal-generating engagement.",
            },
            {
              title: "Operational materials",
              body: "Resources that help teams think about rollout, trust posture, and the move from pilot to broader system coverage.",
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
          <ResourcesShelfGraphic />
        </Reveal>
      </section>

      <section className="page-shell pb-24 pt-12">
        <Reveal>
          <SectionCta
            eyebrow="Need a starting point"
            title="Use the pilot guide as the first resource."
            body="The fastest way to make LegacyBridge concrete is to frame one workflow, one buyer group, and one desired readout."
            primaryHref="/pilot"
            primaryLabel="Review pilot guide"
            secondaryHref="/contact"
            secondaryLabel="Contact LegacyBridge"
          />
        </Reveal>
      </section>
    </main>
  );
}
