const lines = [
  "IF ACCOUNT-CLASS = 'LEGACY' THEN",
  "   MOVE OLD-NOTICE-CODE TO NOTICE-TEMPLATE",
  "ELSE",
  "   PERFORM RESOLVE-NOTICE-TEMPLATE",
  "END-IF",
  "",
  "COMPUTE PENALTY-AMOUNT = BALANCE * PENALTY-RATE",
  "IF DAYS-LATE > 30 THEN",
  "   ADD EXTRA-FEE TO PENALTY-AMOUNT",
  "END-IF",
  "",
  "PERFORM UPDATE-BALANCE-LEDGER",
];

export default function CodeViewerCard() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#08111a]">
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">Code view</div>
          <div className="mt-1 text-sm font-medium text-white">PENALTYCALC01.cbl</div>
        </div>
        <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] text-amber-100">
          Duplicate branch detected
        </div>
      </div>

      <div className="space-y-1 px-5 py-5 font-mono text-sm leading-7 text-white/78">
        {lines.map((line, index) => (
          <div key={`${index}-${line}`} className="grid grid-cols-[48px_1fr] gap-4">
            <div className="text-right text-white/28">{index + 121}</div>
            <div>{line || " "}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
