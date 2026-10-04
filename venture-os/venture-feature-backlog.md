# Venture Feature Backlog

## P0: Product Must Exist
| Feature | User story | Why | Files | Diff | Impact |
|---------|------------|-----|-------|-----:|-------:|
| Core action handler | As a user I submit and get confirmation | Without this it's a brochure | `app/page.tsx`, `app/api/` | 3 | 5 |
| Build green | As founder I can demo locally | Blocks all product work | app pages | 2 | 5 |

## P1: MVP Proof
| Feature | User story | Why | Files | Diff | Impact |
|---------|------------|-----|-------|-----:|-------:|
| Result page | I see my output after submit | Proof event | app/result or dashboard | 3 | 5 |
| Request persistence | Founder sees leads | Operating the company | API + DB/mock | 4 | 4 |

## P2: Demo Power
| Feature | User story | Why | Files | Diff | Impact |
|---------|------------|-----|-------|-----:|-------:|
| Demo dataset | Investor sees realistic flow | Credibility | lib/demo-data.ts | 2 | 4 |
| 2-min click path | Founder demos without explanation | Speed | homepage CTA | 2 | 4 |

## P3: Customer Usefulness
| Feature | User story | Why | Files | Diff | Impact |
|---------|------------|-----|-------|-----:|-------:|
| Working Working start an automation run and review the output log without fake metrics | Repeatable value | Retention | core flow | 4 | 5 |

## P4: Monetization
| Feature | User story | Why | Files | Diff | Impact |
|---------|------------|-----|-------|-----:|-------:|
| Wire pricing page to paid pilot checkout | I can pay for pilot | Revenue | pricing + stripe | 4 | 4 |

## P5: Growth
| Feature | User story | Why | Files | Diff | Impact |
|---------|------------|-----|-------|-----:|-------:|
| SEO use-case pages | Organic discovery | Distribution | app/(marketing) | 3 | 3 |

**Verification:** `pnpm build` + manual demo script in venture-demo-script.md
