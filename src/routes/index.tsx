import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { ArrowButton, BrowserMockup, SectionHeader, Tag } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mogadala Teja — Generative & Agentic AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mogadala Teja, Generative AI engineer building agentic routing, RAG document intelligence and secure enterprise APIs.",
      },
      { property: "og:title", content: "Mogadala Teja — Generative & Agentic AI Engineer" },
      {
        property: "og:description",
        content:
          "Agentic AI routing, RAG pipelines and enterprise APIs — selected systems by Mogadala Teja.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "prepos", name: "PrepOS", tag: "AI-Powered Interview Operating System" },
  { id: "localgpt", name: "LocalGPT", tag: "Private Document Intelligence Platform" },
  { id: "outlook", name: "Outlook Signature Management", tag: "Enterprise Add-in" },
];

const SKILLS = [
  {
    group: "Agentic AI & GenAI",
    items: [
      "LLM App Development",
      "Agentic AI Routing",
      "RAG",
      "LangChain",
      "Prompt Engineering",
      "Semantic & Vector Search",
    ],
  },
  { group: "Languages", items: ["Python", "C#", "Java", "JavaScript", "SQL"] },
  { group: "Frameworks", items: ["FastAPI", "ReactJS", "Angular", "ASP.NET", "Office.js"] },
  { group: "Databases", items: ["MongoDB", "MSSQL", "PostgreSQL", "Elasticsearch"] },
  { group: "Tools & Infra", items: ["Git", "Azure", "Swagger", "Postman"] },
];

const LINKS = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: "mailto:mogadalateja2002@gmail.com" },
  { label: "Portfolio", href: "https://tejasync-portfolio.lovable.app" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Cover */}
      <section className="streak-bg relative flex min-h-screen flex-col justify-between px-6 py-8 md:px-12">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Portfolio</span>
          <span className="eyebrow">Software Engineer · 2024–2026</span>
        </div>
        <div className="animate-rise mx-auto max-w-4xl text-center">
          <h1 className="font-display text-6xl leading-[0.95] font-bold tracking-tight sm:text-8xl md:text-9xl">
            Portfolio
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-2xl">
            Generative AI &amp; Agentic AI Systems
          </p>
          <span className="glass-strong mt-10 inline-block rounded-full px-6 py-2.5 text-sm tracking-wide text-primary">
            Mogadala Teja
          </span>
        </div>
        <div className="flex justify-center">
          <span className="eyebrow">Scroll</span>
        </div>
      </section>

      {/* Hero / About */}
      <section className="streak-bg surface-panel px-6 py-20 md:px-12" id="about">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-rise">
            <h2 className="font-display text-4xl leading-tight font-bold sm:text-5xl">
              Hello, I&apos;m Mogadala Teja
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Generative AI Engineer specializing in LLM-powered, RAG-based document
              intelligence — building agentic AI routing logic, semantic/vector search
              pipelines, and secure enterprise APIs that turn unstructured data into
              context-aware answers.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="glass rounded-xl p-5">
                <p className="eyebrow">Experience</p>
                <p className="mt-2 font-display text-base">
                  Software Engineer, Hexaware Technologies
                </p>
                <p className="text-sm text-muted-foreground">
                  Chennai · May 2024 – Present
                </p>
              </div>
              <div className="glass rounded-xl p-5">
                <p className="eyebrow">Education</p>
                <p className="mt-2 font-display text-base">
                  Electronics &amp; Communication Engineering
                </p>
                <p className="text-sm text-muted-foreground">ANITS College · 2019 – 2023</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div>
                <p className="eyebrow">Core stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Python", "FastAPI", "React", "MongoDB", "LangChain"].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">Infra &amp; tools</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Azure", "Elasticsearch", "Git"].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="animate-rise relative mx-auto w-full max-w-sm pb-10">
            <img
              src={portrait}
              alt="Portrait of Mogadala Teja"
              width={912}
              height={1120}
              className="glass w-full rounded-3xl object-cover p-1.5"
            />
            <nav
              aria-label="Social links"
              className="glass-strong absolute inset-x-4 bottom-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-full px-5 py-3 text-xs"
            >
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Systems navigator */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Index" title="Systems Navigator" tag="03" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Systems I&apos;ve Built
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {NAV.map((n) => (
              <div
                key={n.id}
                className="glass flex items-start justify-between gap-4 rounded-2xl p-6"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold">{n.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.tag}</p>
                </div>
                <ArrowButton label={`Jump to ${n.name}`} href={`#${n.id}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section id="prepos" className="surface-panel scroll-mt-8 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Featured System" title="PrepOS" tag="2025" />
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <BrowserMockup title="AI Mentor Chat Panel" lines={3} />
              <BrowserMockup title="Assessment & Evidence Tracking" lines={3} />
            </div>
            <BrowserMockup title="Mission Dashboard" lines={6} className="self-start" />
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {["React 19", "FastAPI", "MongoDB (Motor)", "AI Gateway", "OpenRouter / Gemini"].map(
              (t) => (
                <Tag key={t}>{t}</Tag>
              ),
            )}
          </div>

          <dl className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { n: "12", l: "architecture documents" },
              { n: "39-file", l: "automated test suite" },
              { n: "100%", l: "deterministic Assessment Engine" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-6">
                <dt className="stat-number text-4xl">{s.n}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Engineering breakdown */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Deep Dive" title="PrepOS" tag="2025" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Engineering Breakdown
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <ul className="space-y-5">
              {[
                {
                  t: "Mission & Learning Engines",
                  d: "Deterministic mission composition driven by 10 learner signals (mastery, readiness, retention, and more).",
                },
                {
                  t: "AI Gateway & Knowledge Base",
                  d: "Provider-agnostic routing (OpenRouter, Gemini fallback), globally cached knowledge base, context-grounded AI Mentor.",
                },
                {
                  t: "Assessment Engine",
                  d: "Replaced LLM-guesswork scoring with a rubric-based, evidence-tracked evaluation system.",
                },
                {
                  t: "Architecture Governance",
                  d: "Authored 12 “Engineering Constitution” documents enforcing a strict unidirectional Routes → Services → Data flow.",
                },
              ].map((c) => (
                <li key={c.t} className="glass rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-primary">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                </li>
              ))}
            </ul>

            <div className="glass rounded-2xl p-6">
              <p className="eyebrow">Request pipeline</p>
              <ol className="mt-6 space-y-3">
                {[
                  "Query",
                  "Agent Router",
                  "RAG / Knowledge Base",
                  "AI Mentor / Assessment Engine",
                  "Response",
                ].map((step, i, arr) => (
                  <li key={step}>
                    <div className="glass-strong rounded-xl px-4 py-3 text-sm">
                      <span className="stat-number mr-3 text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="mx-auto h-5 w-px bg-primary/40"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary projects */}
      <section className="surface-panel px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Selected Work" title="Project Gallery" tag="2023–2025" />
          <div className="grid gap-6 md:grid-cols-2">
            <article id="localgpt" className="glass scroll-mt-8 rounded-2xl p-6">
              <BrowserMockup title="LocalGPT — document intelligence" lines={3} />
              <h3 className="font-display mt-6 text-2xl font-semibold">LocalGPT</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Private document intelligence platform for secure, on-premise answers.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Python", "FastAPI", "LangChain", "RAG", "Elasticsearch"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                <span className="stat-number">500+</span> documents indexed ·{" "}
                <span className="stat-number">35%</span> fewer irrelevant answers
              </p>
            </article>

            <article id="outlook" className="glass scroll-mt-8 rounded-2xl p-6">
              <BrowserMockup title="Outlook Signature Management" lines={3} />
              <h3 className="font-display mt-6 text-2xl font-semibold">
                Outlook Signature Management
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Enterprise add-in delivering governed signatures across every Outlook client.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["ReactJS", "Office.js", "SharePoint"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                <span className="stat-number">100%</span> brand compliance across Desktop, Web
                and Mobile
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Skills matrix */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Capabilities" title="Skills Matrix" tag="Stack" />
          <h2 className="font-display text-center text-3xl font-bold sm:text-4xl">
            Skills &amp; Infrastructure
          </h2>
          <div className="mt-10 space-y-6">
            {SKILLS.map((s) => (
              <div key={s.group} className="grid gap-4 md:grid-cols-[200px_1fr]">
                <p className="eyebrow pt-2">{s.group}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="glass rounded-lg px-4 py-2.5 text-sm text-foreground/90"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="streak-bg surface-panel px-6 py-20 md:px-12">
        <div className="glass-strong mx-auto max-w-4xl rounded-3xl p-10 text-center">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Let&apos;s build something.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href="mailto:mogadalateja2002@gmail.com"
              className="glass rounded-xl p-4 text-sm break-words transition-colors hover:text-primary"
            >
              mogadalateja2002@gmail.com
            </a>
            <a
              href="tel:+918688979284"
              className="glass rounded-xl p-4 text-sm transition-colors hover:text-primary"
            >
              +91 8688979284
            </a>
            <p className="glass rounded-xl p-4 text-sm text-muted-foreground">
              Visakhapatnam, India
            </p>
          </div>
          <nav
            aria-label="Elsewhere"
            className="mt-8 flex flex-wrap justify-center gap-5 text-sm"
          >
            {LINKS.filter((l) => l.label !== "Email").map((l) => (
              <a key={l.label} href={l.href} className="text-primary hover:underline">
                {l.label}
              </a>
            ))}
          </nav>
          <p className="mt-10 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mogadala Teja
          </p>
        </div>
      </footer>
    </main>
  );
}
