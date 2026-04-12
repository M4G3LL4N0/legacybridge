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

export type Artifact = {
  id: string;
  name: string;
  type: "Copybook" | "Batch Job" | "Rule Map" | "Test Pack" | "Ops Note" | "Dependency Map";
  system: string;
  status: "Indexed" | "Draft" | "Review";
  summary: string;
};

export type ActivityEvent = {
  id: string;
  title: string;
  time: string;
  category: "Query" | "Graph" | "Test" | "Knowledge" | "Modernization";
  description: string;
};

export type PlanItem = {
  id: string;
  stage: "Stabilize" | "Wrap" | "Refactor" | "Modernize";
  title: string;
  owner: string;
  impact: string;
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

export const artifacts: Artifact[] = [
  {
    id: "a-1",
    name: "Penalty Rules Copybook",
    type: "Copybook",
    system: "Claims Processing Core",
    status: "Indexed",
    summary: "Shared constants and legacy class rule mappings used across penalty calculation branches.",
  },
  {
    id: "a-2",
    name: "Nightly Claims Batch Flow",
    type: "Batch Job",
    system: "Claims Processing Core",
    status: "Indexed",
    summary: "Dependency map of scheduled jobs, file inputs, and downstream notice generation steps.",
  },
  {
    id: "a-3",
    name: "Premium Adjustment Rule Graph",
    type: "Rule Map",
    system: "Enterprise Billing Engine",
    status: "Review",
    summary: "Cross-linked business logic map for policy adjustments, exceptions, and statement impacts.",
  },
  {
    id: "a-4",
    name: "Penalty Flow Characterization Pack",
    type: "Test Pack",
    system: "Claims Processing Core",
    status: "Draft",
    summary: "Generated regression tests covering duplicate penalty paths and downstream notice behavior.",
  },
  {
    id: "a-5",
    name: "Clinical Sync Operator Notes",
    type: "Ops Note",
    system: "Care Records Integration Layer",
    status: "Review",
    summary: "Captured expert explanations of exception handling and sync recovery assumptions.",
  },
  {
    id: "a-6",
    name: "Notice Dependency Matrix",
    type: "Dependency Map",
    system: "Claims Processing Core",
    status: "Indexed",
    summary: "Upstream/downstream lineage linking penalty outputs to communications, balances, and collections.",
  },
];

export const activity: ActivityEvent[] = [
  {
    id: "e-1",
    title: "Late-payment penalty flow queried",
    time: "12 minutes ago",
    category: "Query",
    description: "Natural-language query resolved duplicate logic and downstream notice bypass behavior.",
  },
  {
    id: "e-2",
    title: "Dependency graph expanded",
    time: "27 minutes ago",
    category: "Graph",
    description: "Two additional JCL jobs linked into the claims batch lineage graph.",
  },
  {
    id: "e-3",
    title: "Characterization pack drafted",
    time: "51 minutes ago",
    category: "Test",
    description: "Initial regression scenarios generated for penalty branch equivalence.",
  },
  {
    id: "e-4",
    title: "Expert ops note captured",
    time: "1 hour ago",
    category: "Knowledge",
    description: "Senior operator explanation recorded for legacy sync exception handling.",
  },
  {
    id: "e-5",
    title: "Modernization path updated",
    time: "2 hours ago",
    category: "Modernization",
    description: "Recommended wrap-first plan selected over immediate module rewrite for notice routing.",
  },
];

export const planBoard: PlanItem[] = [
  {
    id: "p-1",
    stage: "Stabilize",
    title: "Generate characterization tests for penalty flow",
    owner: "Platform Engineering",
    impact: "Protects duplicate branch behavior before consolidation",
  },
  {
    id: "p-2",
    stage: "Wrap",
    title: "Create monitored service boundary for notice selection",
    owner: "Modernization Team",
    impact: "Reduces change risk while preserving existing logic",
  },
  {
    id: "p-3",
    stage: "Refactor",
    title: "Unify duplicate penalty branches",
    owner: "Core Systems",
    impact: "Removes drift between legacy and current notice paths",
  },
  {
    id: "p-4",
    stage: "Modernize",
    title: "Expose penalty decision service to downstream apps",
    owner: "Architecture",
    impact: "Creates reusable modernization layer without full rewrite",
  },
];

export function getWorkflowBySlug(slug: string) {
  return workflows.find((workflow) => workflow.slug === slug);
}
