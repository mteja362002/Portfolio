import { BrowserMockup } from "@/components/portfolio";
import { CheckCircle2, Circle, Search } from "lucide-react";

function LocalGPTMockups() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      <BrowserMockup title="Query Interface">
        <div className="space-y-4">
          <div className="flex items-center gap-2 rounded-lg bg-foreground/5 px-3 py-2">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <span className="text-sm text-foreground">
              What's the current PTO carryover policy for FY25?
            </span>
          </div>
          <div className="rounded-lg bg-primary/5 p-3">
            <p className="text-sm leading-relaxed text-foreground">
              Full-time employees may carry over up to 10 unused PTO days into FY25, provided the request is submitted before Jan 15.{" "}
              <span className="text-primary">[1]</span> Part-time balances are prorated per policy.{" "}
              <span className="text-primary">[2]</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="glass rounded-full px-2 py-1 text-xs text-muted-foreground">
              HR_Policy_2025.pdf
            </span>
            <span className="glass rounded-full px-2 py-1 text-xs text-muted-foreground">
              Leave_Addendum.docx
            </span>
          </div>
        </div>
      </BrowserMockup>

      <BrowserMockup title="Retrieval & Ranking">
        <div className="space-y-3">
          {[
            {
              file: "HR_Policy_2025.pdf",
              score: 0.91,
              snippet: "Full-time employees may carry over a maximum of 10 unused PTO days...",
            },
            {
              file: "Leave_Addendum.docx",
              score: 0.87,
              snippet: "Requests to carry over PTO must be submitted to HR by January 15...",
            },
            {
              file: "Benefits_FAQ.txt",
              score: 0.79,
              snippet: "Prorated carryover applies to part-time and contract staff...",
            },
            {
              file: "Confluence_HR_Hub",
              score: 0.74,
              snippet: "The FY25 leave calendar and blackout dates are maintained...",
            },
          ].map((chunk) => (
            <div key={chunk.file} className="rounded-lg bg-foreground/5 p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-xs font-medium text-foreground">
                  {chunk.file}
                </span>
                <span className="glass rounded-full px-2 py-0.5 text-xs text-primary">
                  {chunk.score}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${chunk.score * 100}%` }}
                />
              </div>
              <p className="mt-2 truncate text-xs text-muted-foreground">
                {chunk.snippet}
              </p>
            </div>
          ))}
        </div>
      </BrowserMockup>

      <BrowserMockup title="Document Index">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="stat-number text-2xl">500+</span>
            <span className="text-sm text-muted-foreground">documents indexed</span>
          </div>
          <div className="space-y-2">
            {[
              { label: "PDF", pct: 45 },
              { label: "DOCX", pct: 30 },
              { label: "TXT", pct: 15 },
              { label: "Confluence", pct: 10 },
            ].map((fmt) => (
              <div key={fmt.label} className="flex items-center gap-3">
                <span className="w-20 text-xs text-muted-foreground">{fmt.label}</span>
                <div className="flex-1 h-2 overflow-hidden rounded-full bg-foreground/10">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${fmt.pct}%` }}
                  />
                </div>
                <span className="w-8 text-right text-xs text-muted-foreground">
                  {fmt.pct}%
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Elasticsearch: synced</span>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}

function PrepOSMockups() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      <BrowserMockup title="AI Mentor Chat Panel">
        <div className="space-y-3">
          <span className="glass inline-block rounded-full px-2 py-1 text-xs text-primary">
            Context: Knowledge Base · System Design
          </span>
          <div className="rounded-lg bg-foreground/5 p-3">
            <p className="text-sm text-foreground">
              Can you review my answer to the system design question?
            </p>
          </div>
          <div className="rounded-lg bg-primary/5 p-3">
            <p className="text-sm leading-relaxed text-foreground">
              Strong decomposition and clear trade-offs. Against the rubric, your answer meets the "Scalability" criterion because you explicitly separated read and write paths. One gap: add a concrete fallback strategy for the message broker.
            </p>
          </div>
        </div>
      </BrowserMockup>

      <BrowserMockup title="Mission Dashboard">
        <div className="space-y-4">
          <div className="rounded-lg bg-foreground/5 p-3">
            <h4 className="text-sm font-semibold text-foreground">Today's Mission</h4>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                Complete system-design rubric
              </li>
              <li className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                Submit evidence transcript #12
              </li>
              <li className="flex items-center gap-2 text-xs text-muted-foreground">
                <Circle className="size-4 text-amber" />
                Review fallback strategies
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            {[
              { label: "Mastery", pct: 78 },
              { label: "Readiness", pct: 65 },
              { label: "Retention", pct: 82 },
            ].map((g) => (
              <div key={g.label}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{g.label}</span>
                  <span className="text-foreground">{g.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-foreground/10">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${g.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </BrowserMockup>

      <BrowserMockup title="Assessment & Evidence Tracking">
        <div className="space-y-2">
          {[
            {
              criterion: "Problem Decomposition",
              status: "Pass",
              evidence: "Transcript #14",
            },
            {
              criterion: "Scalability Trade-offs",
              status: "Pass",
              evidence: "Transcript #09",
            },
            {
              criterion: "Failure Recovery",
              status: "Needs Work",
              evidence: "Transcript #11",
            },
            {
              criterion: "Communication Clarity",
              status: "Pending",
              evidence: "Transcript #15",
            },
          ].map((row) => (
            <div
              key={row.criterion}
              className="flex items-center justify-between gap-2 rounded-lg bg-foreground/5 p-3"
            >
              <span className="text-xs font-medium text-foreground">{row.criterion}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`glass rounded-full px-2 py-0.5 text-xs ${
                    row.status === "Pass"
                      ? "text-primary"
                      : row.status === "Needs Work"
                        ? "text-amber"
                        : "text-muted-foreground"
                  }`}
                >
                  {row.status}
                </span>
                <span className="glass rounded-full px-2 py-0.5 text-xs text-primary">
                  {row.evidence} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </BrowserMockup>
    </div>
  );
}

function OutlookMockups() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      <BrowserMockup title="Signature Editor">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            {[
              { label: "Name", value: "Mogadala Teja" },
              { label: "Title", value: "Generative AI Engineer" },
              { label: "Phone", value: "+91 98765 43210" },
              { label: "Department", value: "Engineering" },
            ].map((field) => (
              <div key={field.label}>
                <label className="text-xs text-muted-foreground">{field.label}</label>
                <div className="mt-1 rounded-md bg-foreground/5 px-2 py-1.5 text-xs text-foreground">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-foreground/5 p-4">
            <p className="font-display text-base font-semibold text-foreground">
              Mogadala Teja
            </p>
            <p className="text-xs text-muted-foreground">Generative AI Engineer</p>
            <div className="mt-3 h-8 rounded-md bg-primary/10" />
            <p className="mt-3 text-[10px] leading-tight text-muted-foreground">
              This email and any attachments are confidential. © 2026 Contoso Corp.
            </p>
          </div>
        </div>
      </BrowserMockup>

      <BrowserMockup title="Admin Console">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="stat-number text-2xl">100%</span>
            <span className="text-sm text-muted-foreground">org-wide compliance</span>
          </div>
          {[
            { dept: "Engineering", status: "Synced · 100%", pushed: "2h ago" },
            { dept: "Sales", status: "Synced · 100%", pushed: "4h ago" },
            { dept: "Marketing", status: "Synced · 100%", pushed: "6h ago" },
            { dept: "Operations", status: "Synced · 100%", pushed: "1d ago" },
          ].map((row) => (
            <div
              key={row.dept}
              className="flex items-center justify-between gap-2 rounded-lg bg-foreground/5 p-3"
            >
              <span className="text-xs font-medium text-foreground">{row.dept}</span>
              <div className="flex items-center gap-3">
                <span className="glass rounded-full px-2 py-0.5 text-xs text-primary">
                  {row.status}
                </span>
                <span className="text-xs text-muted-foreground">{row.pushed}</span>
              </div>
            </div>
          ))}
        </div>
      </BrowserMockup>

      <BrowserMockup title="Cross-Client Preview">
        <div className="grid grid-cols-3 gap-2">
          <div className="space-y-2 rounded-lg bg-foreground/5 p-2">
            <div className="h-1 rounded-full bg-foreground/10" />
            <div className="rounded-md bg-primary/5 p-2">
              <p className="font-display text-xs font-semibold text-foreground">M. Teja</p>
              <p className="text-[10px] text-muted-foreground">AI Engineer</p>
            </div>
          </div>
          <div className="space-y-2 rounded-lg bg-foreground/5 p-2">
            <div className="h-1 rounded-full bg-foreground/10" />
            <div className="rounded-md bg-primary/5 p-2">
              <p className="font-display text-xs font-semibold text-foreground">M. Teja</p>
              <p className="text-[10px] text-muted-foreground">AI Engineer</p>
            </div>
          </div>
          <div className="space-y-2 rounded-lg bg-foreground/5 p-2">
            <div className="mx-auto h-10 w-6 rounded-md border border-foreground/10" />
            <div className="rounded-md bg-primary/5 p-1">
              <p className="text-center text-[8px] font-semibold text-foreground">M. Teja</p>
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}

export function ProjectMockups({ slug }: { slug: string }) {
  switch (slug) {
    case "localgpt":
      return <LocalGPTMockups />;
    case "prepos":
      return <PrepOSMockups />;
    case "outlook-signature-management":
      return <OutlookMockups />;
    default:
      return null;
  }
}
