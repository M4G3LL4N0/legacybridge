import Reveal from "@/components/site/Reveal";
import { SubpageVisual } from "@/components/SubpageVisual";
import PageIntro from "@/components/site/PageIntro";
import SectionCta from "@/components/site/SectionCta";
import SecurityPostureGraphic from "@/components/graphics/SecurityPostureGraphic";

export default function SecurityPage() {
  return (
    <main className="premium-page-shell">
      <SubpageVisual variant="default" />
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="Security"
          title="Security posture matters more when the systems are truly critical."
          description="LegacyBridge is framed for enterprise environments where source visibility, role-scoped access, and controlled deployment matter from the first serious conversation."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Controlled access",
              body: "The workspace model is designed for role-scoped usage rather than open consumer-style product assumptions.",
            },
            {
              title: "Private deployment path",
              body: "The sales and product narrative intentionally support private-environment and enterprise deployment conversations.",
            },
            {
              title: "Enterprise trust posture",
              body: "The product is positioned around explainability, audit-linked surfaces, and high-trust pilot motion for sensitive environments.",
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
          <SecurityPostureGraphic />
        </Reveal>
      </section>

      <section className="page-shell pb-24 pt-12">
        <Reveal>
          <SectionCta
            eyebrow="Security conversation"
            title="Bring security posture into the pilot discussion early."
            body="In enterprise legacy environments, security and deployment posture are part of the buying process, not an afterthought."
            primaryHref="/contact"
            primaryLabel="Contact LegacyBridge"
            secondaryHref="/demo"
            secondaryLabel="Request walkthrough"
          />
        </Reveal>
      </section>
    </main>
  );
}
