import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { ArrowButton, SectionHeader, Tag } from "@/components/portfolio";
import { projects } from "@/lib/projects";

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
  { label: "GitHub", href: "https://github.com/TEJAMOGADALA" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/m-teja-964842367" },
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </nav>
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

      {/* Systems navigator */}
      <section id="systems" className="scroll-mt-8 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Index" title="Systems Navigator" tag="03" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Systems I&apos;ve Built
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.slug}
                className="glass flex items-start justify-between gap-4 rounded-2xl p-6"
              >
                <div>
                  <p className="eyebrow">Page {p.page}</p>
                  <h3 className="font-display mt-2 text-xl font-semibold">
                    <Link to={`/${p.slug}`} className="transition-colors hover:text-primary">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.descriptor}</p>
                </div>
                <ArrowButton label={`Open ${p.name}`} href={`/${p.slug}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project previews */}
      <section className="surface-panel px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <SectionHeader eyebrow="Selected Work" title="Case Studies" tag="2023–2025" />
          {projects.map((p) => (
            <article key={p.slug} className="glass rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">
                    {p.year} · {p.descriptor}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold">{p.name}</h3>
                </div>
                <ArrowButton label={`Open ${p.name}`} href={`/${p.slug}`} />
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                {p.metrics.map((m) => (
                  <div key={m.label} className="glass rounded-xl p-4">
                    <dt className="stat-number text-3xl">{m.value}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{m.label}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
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
              target="_blank"
              rel="noopener noreferrer"
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
              <a 
                key={l.label} 
                href={l.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline"
              >
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
