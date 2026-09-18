import { Link } from "@tanstack/react-router";
import { BrowserMockup, SectionHeader, Tag } from "@/components/portfolio";
import { projects, type Project } from "@/lib/projects";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <main className="min-h-screen bg-background">
      <header className="streak-bg px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link to="/" className="eyebrow text-primary hover:underline">
            Mogadala Teja
          </Link>
          <Link
            to="/"
            hash="systems"
            className="glass rounded-full px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            All systems
          </Link>
        </div>
      </header>

      <section className="surface-panel px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={`Page ${project.page}`}
            title={project.name}
            tag={project.year}
          />
          <p className="eyebrow">{project.descriptor}</p>
          <h1 className="font-display mt-3 text-4xl leading-tight font-bold sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <BrowserMockup
            title={`${project.name} — ${project.descriptor}`}
            lines={5}
            className="mt-10"
          />
        </div>
      </section>

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Context" title="Enterprise Use Case" tag={project.year} />
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {project.audience}
          </p>
        </div>
      </section>

      <section className="surface-panel px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Deep Dive" title="System Architecture" tag="Breakdown" />
          <div className="grid gap-5 md:grid-cols-2">
            {project.architecture.map((a) => (
              <article key={a.title} className="glass rounded-2xl p-6">
                <h2 className="font-display text-lg font-semibold text-primary">{a.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Impact" title="Verified Outcomes" tag="Metrics" />
          <dl className="grid gap-5 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="glass rounded-2xl p-6">
                <dt className="stat-number text-4xl">{m.value}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <footer className="streak-bg surface-panel px-6 py-16 md:px-12">
        <nav
          aria-label="Project navigation"
          className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2"
        >
          {prev ? (
            <Link to={`/${prev.slug}`} className="glass rounded-2xl p-6 hover:text-primary">
              <span className="eyebrow">Previous</span>
              <p className="font-display mt-2 text-xl font-semibold">{prev.name}</p>
            </Link>
          ) : (
            <Link to="/" className="glass rounded-2xl p-6 hover:text-primary">
              <span className="eyebrow">Back</span>
              <p className="font-display mt-2 text-xl font-semibold">Portfolio home</p>
            </Link>
          )}
          {next && (
            <Link
              to={`/${next.slug}`}
              className="glass rounded-2xl p-6 text-right hover:text-primary"
            >
              <span className="eyebrow">Next</span>
              <p className="font-display mt-2 text-xl font-semibold">{next.name}</p>
            </Link>
          )}
        </nav>
      </footer>
    </main>
  );
}
