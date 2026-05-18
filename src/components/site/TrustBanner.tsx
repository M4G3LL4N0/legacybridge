export default function TrustBanner() {
  return (
    <div
      role="region"
      aria-label="Trust notice"
      className="border-b border-white/8 bg-[#0a1224]/90 px-4 py-2 text-center text-[11px] leading-relaxed text-white/55 sm:text-xs"
    >
      <strong className="text-white/75">Analysis and planning aids.</strong> LegacyBridge outputs support modernization
      decisions — verify with engineering and compliance before production change.
    </div>
  );
}
