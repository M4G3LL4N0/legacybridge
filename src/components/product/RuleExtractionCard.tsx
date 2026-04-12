const rules = [
  "Legacy account classes route to an older notice template path.",
  "Penalty amount is computed from outstanding balance and rate table.",
  "Accounts over 30 days late receive an additional fee branch.",
  "Downstream balance ledger updates occur before collections eligibility refresh.",
];

export default function RuleExtractionCard() {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">Rule extraction</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
        Business logic surfaced
      </h3>

      <div className="mt-6 space-y-4">
        {rules.map((rule) => (
          <div
            key={rule}
            className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/72"
          >
            {rule}
          </div>
        ))}
      </div>
    </div>
  );
}
