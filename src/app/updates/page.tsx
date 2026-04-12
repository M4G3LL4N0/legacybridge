import PageIntro from "@/components/site/PageIntro";

const updates = [
  {
    title: "LegacyBridge positioning refined for enterprise pilots",
    date: "Current",
    body: "Updated site and product framing now center more clearly on pilot-led adoption, cross-source workflow intelligence, and safer modernization sequencing.",
  },
  {
    title: "Public site expanded with trust and resources layers",
    date: "Current",
    body: "Added pilot, security, contact, resources, use-cases, FAQ, and updates surfaces to make the company story feel more complete.",
  },
  {
    title: "Workspace upgraded with richer product narrative",
    date: "Current",
    body: "Improved notifications, workflow gallery, artifact previews, onboarding visuals, and route-level polish across the app experience.",
  },
];

export default function UpdatesPage() {
  return (
    <main className="premium-page-shell">
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="Updates"
          title="Progress, positioning, and product evolution."
          description="A simple public changelog-style page that shows the product and company are moving forward."
        />

        <div className="mt-12 space-y-6">
          {updates.map((update) => (
            <div key={update.title} className="premium-surface premium-surface-hover rounded-[1.9rem] p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="text-xl font-medium text-white">{update.title}</div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/68">
                  {update.date}
                </div>
              </div>
              <div className="mt-4 text-sm leading-7 text-white/68">{update.body}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
