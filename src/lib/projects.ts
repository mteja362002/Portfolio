export type ProjectSlug = "localgpt" | "prepos" | "outlook-signature-management";

export type Project = {
  slug: ProjectSlug;
  page: string;
  name: string;
  descriptor: string;
  year: string;
  stack: string[];
  summary: string;
  audience: string;
  architecture: Array<{ title: string; description: string }>;
  metrics: Array<{ value: string; label: string }>;
};

export const projects: Project[] = [
  {
    slug: "localgpt",
    page: "04",
    name: "LocalGPT",
    descriptor: "Private Document Intelligence Platform",
    year: "2024",
    stack: ["Python", "FastAPI", "LangChain", "LLMs", "RAG", "Elasticsearch"],
    summary:
      "An independently designed agentic AI-routed RAG pipeline enabling secure, context-aware querying across 500+ private organizational documents in mixed formats, with Elasticsearch-backed semantic and vector search. Achieved a 35% reduction in irrelevant answers, validated through internal QA testing, by tuning retrieval context and prompt structure.",
    audience:
      "Internal organizational teams needing secure, on-premise search across proprietary data formats without relying on public LLM endpoints.",
    architecture: [
      {
        title: "Agentic routing layer",
        description:
          "Query intent is routed to the right retrieval strategy before any generation happens, keeping answers grounded in the correct corpus.",
      },
      {
        title: "Mixed-format ingestion",
        description:
          "Documents across formats are normalized, chunked and embedded into a single searchable index.",
      },
      {
        title: "Semantic & vector search",
        description:
          "Elasticsearch-backed hybrid retrieval combines keyword precision with embedding-based recall.",
      },
      {
        title: "On-premise inference",
        description:
          "The full pipeline runs inside the organization's own boundary — no proprietary data leaves for public LLM endpoints.",
      },
    ],
    metrics: [
      { value: "500+", label: "private documents indexed" },
      { value: "35%", label: "fewer irrelevant answers" },
      { value: "100%", label: "on-premise data residency" },
    ],
  },
  {
    slug: "prepos",
    page: "05",
    name: "PrepOS",
    descriptor: "AI-Powered Interview Operating System",
    year: "2025",
    stack: ["Python", "FastAPI", "React", "MongoDB", "LLMs", "RAG", "Agentic AI"],
    summary:
      "A production-grade multi-agent AI platform for adaptive interview preparation. The resilient backend runs a provider-agnostic AI Gateway (OpenRouter with Gemini fallback) and a RAG-powered knowledge base delivering contextual AI mentorship, under strict AI governance and a unidirectional architecture (Routes → Services → Data) standardized across 12 architectural documents.",
    audience:
      "Candidates, HR, and engineering teams needing robust, governable, standardized mentorship and assessment at scale.",
    architecture: [
      {
        title: "Provider-agnostic AI Gateway",
        description:
          "OpenRouter primary with Gemini fallback, so a single provider outage never takes the platform down.",
      },
      {
        title: "RAG knowledge base",
        description:
          "A globally cached knowledge base grounds the AI Mentor in curated context instead of free-form generation.",
      },
      {
        title: "Deterministic Assessment Engine",
        description:
          "Rubric-based, evidence-tracked evaluation replaces LLM guesswork scoring, backed by a 39-file automated test suite.",
      },
      {
        title: "Architecture governance",
        description:
          "12 architectural documents enforce a strict unidirectional Routes → Services → Data flow across the codebase.",
      },
    ],
    metrics: [
      { value: "12", label: "architecture documents" },
      { value: "39-file", label: "automated test suite" },
      { value: "100%", label: "deterministic assessment scoring" },
    ],
  },
  {
    slug: "outlook-signature-management",
    page: "06",
    name: "Outlook Signature Management",
    descriptor: "Enterprise Outlook Add-in",
    year: "2023–24",
    stack: ["ReactJS", "JavaScript", "Office.js", "SharePoint"],
    summary:
      "A centralized Outlook Add-in that automates email signature generation across Desktop, Web, and Mobile clients, ensuring 100% brand compliance organization-wide.",
    audience:
      "Enterprise IT and brand management teams that need to seamlessly deploy and manage unified corporate identities across all employee email clients.",
    architecture: [
      {
        title: "Office.js add-in surface",
        description:
          "A single add-in injects governed signatures into Desktop, Web and Mobile Outlook clients.",
      },
      {
        title: "SharePoint-backed templates",
        description:
          "Brand templates and employee attributes are centrally managed, so updates roll out without touching user machines.",
      },
      {
        title: "Automated generation",
        description:
          "Signatures are composed per user from live directory data rather than manually maintained by employees.",
      },
      {
        title: "Compliance by default",
        description:
          "Central control removes off-brand variants and keeps every outgoing email consistent.",
      },
    ],
    metrics: [
      { value: "100%", label: "org-wide brand compliance" },
      { value: "3", label: "Outlook clients covered" },
      { value: "1", label: "central template source" },
    ],
  },
];

export function getProject(slug: ProjectSlug): Project {
  const found = projects.find((p) => p.slug === slug);
  if (!found) throw new Error(`Unknown project: ${slug}`);
  return found;
}
