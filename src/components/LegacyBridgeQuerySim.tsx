"use client";

import { useState } from "react";

const sampleQuestions = [
  "What happens if we change the nightly batch cutoff?",
  "Which workflows touch customer billing?",
  "Show hidden branches in claims adjudication",
];

type SimResult = {
  systems: string[];
  risk: string;
  tests: string[];
};

function mockAnswer(q: string): SimResult {
  const n = q.length % 3;
  return {
    systems: ["PolicyAdmin", "ClaimsCore", "BillingBridge"].slice(0, 2 + (n % 2)),
    risk: n === 0 ? "Medium — downstream settlement timing" : "Low — read-heavy path",
    tests: [
      "DEMO: Regression pack for batch boundary",
      "DEMO: Stakeholder sign-off on SLA window",
    ],
  };
}

export function LegacyBridgeQuerySim() {
  const [question, setQuestion] = useState(sampleQuestions[0]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SimResult | null>(null);

  function run() {
    setLoading(true);
    setResult(null);
    window.setTimeout(() => {
      setResult(mockAnswer(question));
      setLoading(false);
    }, 900);
  }

  return (
    <div className="mt-8 rounded-[1.35rem] border border-cyan-400/20 bg-cyan-400/5 p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Interactive pilot (DEMO)</p>
      <h3 className="mt-2 text-lg font-medium text-white">Ask the system intelligence layer</h3>
      <select
        className="mt-4 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      >
        {sampleQuestions.map((q) => (
          <option key={q} value={q}>
            {q}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={run}
        disabled={loading}
        className="mt-4 rounded-full bg-cyan-400/90 px-5 py-2 text-sm font-semibold text-slate-950 disabled:opacity-60"
      >
        {loading ? "Mapping workflows…" : "Run demo query"}
      </button>
      {result && (
        <div className="mt-6 space-y-3 text-sm text-white/75">
          <p>
            <span className="text-white/45">Systems touched:</span> {result.systems.join(", ")}
          </p>
          <p>
            <span className="text-white/45">Risk:</span> {result.risk}
          </p>
          <ul className="list-disc pl-5">
            {result.tests.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
