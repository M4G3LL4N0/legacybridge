import PageIntro from "@/components/site/PageIntro";
import { SubpageVisual } from "@/components/SubpageVisual";
import SectionCta from "@/components/site/SectionCta";

const blocks = [
  {
    title: "Cross-source ingestion",
    body: "LegacyBridge is framed to combine source code, jobs, artifacts, documents, and expert knowledge into one system layer.",
  },
  {
    title: "Workflow-first modeling",
    body: "The product is designed around workflow understanding rather than isolated-file understanding because enterprise change decisions are made at workflow level.",
  },
  {
    title: "Signal surfaces",
    body: "Queries, dependency graphs, rule extraction, test previews, and executive readouts all serve the same goal: clearer action under uncertainty.",
  },
  {
    title: "Pilot-to-enterprise path",
    body: "The architecture story supports focused first deployment, then broader source and workflow expansion as trust grows.",
  },
  {
    title: "Controlled access posture",
    body: "The platform narrative supports role-scoped usage and controlled access in higher-trust environments.",
  },
  {
    title: "Modernization sequencing support",
    body: "The architecture story is not about replacing systems overnight. It is about enabling better sequencing before larger transformation work accelerates.",
  },
];

export default function ArchitecturePage() {
  return (
    <main className="premium-page-shell">
      <SubpageVisual variant="default" />
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="Architecture"
          title="The product architecture is designed for system understanding before large-scale change."
          description="LegacyBridge is positioned as an intelligence layer above legacy systems, not as a simplistic generation layer detached from real enterprise workflows."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blocks.map((block) => (
            <div key={block.title} className="premium-surface premium-surface-hover rounded-[1.9rem] p-6">
              <div className="text-lg font-medium text-white">{block.title}</div>
              <div className="mt-4 text-sm leading-7 text-white/68">{block.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell pb-24">
        <SectionCta
          eyebrow="Architecture discussion"
          title="Use architecture to reinforce trust, not complexity theater."
          body="The strongest technical framing shows how LegacyBridge creates signal, supports control, and reduces uncertainty around high-value workflows."
          primaryHref="/security"
          primaryLabel="Review security"
          secondaryHref="/enterprise"
          secondaryLabel="See enterprise"
        />
      </section>
    </main>
  );
}
