export type LegacySystem = {
  id: string;
  name: string;
  language: string;
  owner: string;
  criticality: "High" | "Medium" | "Low";
  status: string;
  workflows: number;
  riskScore: number;
  lastUpdated: string;
};

export type Finding = {
  id: string;
  title: string;
  severity: "Critical" | "High" | "Moderate" | "Low";
  system: string;
  summary: string;
};

export type Workflow = {
  slug: string;
  name: string;
  system: string;
  language: string;
  owner: string;
  description: string;
  riskScore: number;
  testCoverageGap: number;
  modules: string[];
  upstream: string[];
  downstream: string[];
  findings: string[];
  recommendedActions: string[];
};

export const systems: LegacySystem[] = [
  {
    id: "sys-claims",
    name: "Claims Processing Core",
    language: "COBOL + JCL",
    owner: "Insurance Ops",
    criticality: "High",
    status: "Production",
    workflows: 12,
    riskScore: 86,
    lastUpdated: "2 days ago",
  },
  {
    id: "sys-billing",
    name: "Enterprise Billing Engine",
    language: "RPG",
    owner: "Finance Systems",
    criticality: "High",
    status: "Production",
    workflows: 9,
    riskScore: 74,
    lastUpdated: "5 days ago",
  },
  {
    id: "sys-lab",
    name: "Scientific Simulation Stack",
    language: "Fortran",
    owner: "Advanced Research",
    criticality: "Medium",
    status: "Production",
    workflows: 6,
    riskScore: 63,
    lastUpdated: "8 days ago",
  },
  {
    id: "sys-records",
    name: "Care Records Integration Layer",
    language: "MUMPS / ObjectScript",
    owner: "Clinical Platforms",
    criticality: "High",
    status: "Production",
    workflows: 7,
    riskScore: 81,
    lastUpdated: "1 day ago",
  },
];

export const findings: Finding[] = [
  {
    id: "f-1",
    title: "Penalty logic duplicated across two batch branches",
    severity: "High",
    system: "Claims Processing Core",
    summary:
      "Late-payment logic appears in two separate COBOL modules with slightly different notice behavior for legacy account classes.",
  },
  {
    id: "f-2",
    title: "Notice template bypass still active in archived segment path",
    severity: "Critical",
    system: "Claims Processing Core",
    summary:
      "One downstream path bypasses updated notice rendering and still routes through a deprecated customer communication branch.",
  },
  {
    id: "f-3",
    title: "Regression coverage gap around premium adjustment workflow",
    severity: "Moderate",
    system: "Enterprise Billing Engine",
    summary:
      "Core calculations remain stable, but branch-level test protections are missing around edge-case policy changes.",
  },
  {
    id: "f-4",
    title: "Senior engineer tribal knowledge not captured",
    severity: "High",
    system: "Care Records Integration Layer",
    summary:
      "Key operational assumptions appear to exist only in people and ticket memory, not in system-linked documentation.",
  },
];

export const workflows: Workflow[] = [
  {
    slug: "late-payment-penalty-flow",
    name: "Late Payment Penalty Flow",
    system: "Claims Processing Core",
    language: "COBOL + JCL",
    owner: "Insurance Ops",
    description:
      "Calculates late-payment penalties, updates customer balances, and triggers downstream notice generation.",
    riskScore: 89,
    testCoverageGap: 31,
    modules: [
      "PENALTYCALC01",
      "BALUPDT02",
      "NOTICESEL04",
      "LEGACYCLASSMAP",
      "NIGHTLY-BATCH-JCL-A",
    ],
    upstream: [
      "Daily account aging feed",
      "Customer status table",
      "Policy rules copybook",
    ],
    downstream: [
      "Customer notice renderer",
      "Balance ledger update",
      "Collections eligibility rules",
    ],
    findings: [
      "Penalty logic duplicated in two modules",
      "Legacy account classes trigger alternate notice path",
      "One downstream branch bypasses updated template handling",
    ],
    recommendedActions: [
      "Generate characterization tests for both penalty branches",
      "Wrap notice selection as a monitored service boundary",
      "Consolidate duplicate branch logic after regression protections are in place",
    ],
  },
  {
    slug: "premium-adjustment-workflow",
    name: "Premium Adjustment Workflow",
    system: "Enterprise Billing Engine",
    language: "RPG",
    owner: "Finance Systems",
    description:
      "Applies policy and account adjustments to billing records and updates statement generation inputs.",
    riskScore: 76,
    testCoverageGap: 24,
    modules: [
      "PREMADJ01",
      "POLICYRULEMAP",
      "STATEMENTBUF",
      "BILLRERATE02",
    ],
    upstream: ["Policy event queue", "Manual override table"],
    downstream: ["Statement generation", "Rate audit logs", "Finance exports"],
    findings: [
      "Low visibility into manual override behavior",
      "Insufficient test coverage for policy event edge cases",
    ],
    recommendedActions: [
      "Capture manual override logic into rule graph",
      "Expand regression set around event-driven repricing scenarios",
      "Map downstream finance export dependencies before refactor",
    ],
  },
  {
    slug: "patient-record-sync",
    name: "Patient Record Sync",
    system: "Care Records Integration Layer",
    language: "MUMPS / ObjectScript",
    owner: "Clinical Platforms",
    description:
      "Synchronizes patient record updates across core storage, operational views, and connected integration points.",
    riskScore: 83,
    testCoverageGap: 37,
    modules: [
      "REC_SYNC_MAIN",
      "PATIDX_UTIL",
      "CLIN_NOTE_XREF",
      "LEGACY_SYNC_QUEUE",
    ],
    upstream: ["Clinical update queue", "Master patient index"],
    downstream: ["Operational dashboards", "Record export services", "Care coordination views"],
    findings: [
      "Data transformation assumptions are weakly documented",
      "Senior operator knowledge remains outside the system graph",
    ],
    recommendedActions: [
      "Record expert walkthroughs for sync exception paths",
      "Generate test fixtures for partial update scenarios",
      "Trace export service dependencies before API wrapping",
    ],
  },
];

export function getWorkflowBySlug(slug: string) {
  return workflows.find((workflow) => workflow.slug === slug);
}
