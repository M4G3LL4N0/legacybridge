import Reveal from "@/components/site/Reveal";
import PageIntro from "@/components/site/PageIntro";
import SectionCta from "@/components/site/SectionCta";
import UseCaseMatrixGraphic from "@/components/graphics/UseCaseMatrixGraphic";

export default function UseCasesPage() {
  return (
    <main className="premium-page-shell">
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="Use Cases"
          title="LegacyBridge is most useful where understanding gaps create real business risk."
          description="The product creates value by making critical workflows more legible, safer to change, and easier to sequence for modernization."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Before modernization",
              body: "Use LegacyBridge to understand what the system actually does before any serious migration or rewrite effort begins.",
            },
            {
              title: "Before risky change",
              body: "Use it to identify fragile branches, missing tests, and hidden downstream dependencies before teams touch production logic.",
            },
            {
              title: "Before knowledge walks out",
              body: "Use it to capture operator and expert assumptions before key system understanding disappears into memory gaps.",
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
          <UseCaseMatrixGraphic />
        </Reveal>
      </section>

      <section className="page-shell pb-24 pt-12">
        <Reveal>
          <SectionCta
            eyebrow="Best entry point"
            title="Start with the workflow that already feels too risky to misunderstand."
            body="That usually gives the clearest wedge for a successful pilot and broader internal adoption."
            primaryHref="/demo"
            primaryLabel="Request walkthrough"
            secondaryHref="/pilot"
            secondaryLabel="Review pilot"
          />
        </Reveal>
      </section>
    </main>
  );
}
