import { createFileRoute } from "@tanstack/react-router";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { getProject } from "@/lib/projects";

const project = getProject("localgpt");

export const Route = createFileRoute("/localgpt")({
  head: () => ({
    meta: [
      { title: "LocalGPT — Private Document Intelligence Platform | Mogadala Teja" },
      {
        name: "description",
        content:
          "LocalGPT: an agentic AI-routed RAG pipeline for secure, on-premise querying across 500+ private documents, with 35% fewer irrelevant answers.",
      },
      { property: "og:title", content: "LocalGPT — Private Document Intelligence Platform" },
      {
        property: "og:description",
        content:
          "Agentic RAG with Elasticsearch semantic and vector search for secure on-premise document intelligence.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProjectCaseStudy project={project} />,
});
