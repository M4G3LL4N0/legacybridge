import ProductShell from "@/components/product/ProductShell";
import Panel from "@/components/product/Panel";

export default function SettingsPage() {
  return (
    <ProductShell>
      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Panel eyebrow="Workspace" title="Pilot environment posture">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Tenant mode", "Single-enterprise pilot"],
              ["Data boundary", "Private workspace"],
              ["Retention posture", "Configurable"],
              ["Knowledge capture", "Enabled"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/40">{label}</div>
                <div className="mt-2 text-sm font-medium text-white">{value}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel eyebrow="Deployment" title="Enterprise deployment profile">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Hosting model", "Private VPC capable"],
              ["Identity", "SSO / role scoped"],
              ["Audit surface", "Activity-linked"],
              ["Inference path", "Customer-controlled"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/40">{label}</div>
                <div className="mt-2 text-sm font-medium text-white">{value}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </ProductShell>
  );
}
