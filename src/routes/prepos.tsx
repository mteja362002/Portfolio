import { createFileRoute } from "@tanstack/react-router";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { getProject } from "@/lib/projects";

const project = getProject("prepos");

export const Route = createFileRoute("/prepos")({
  head: () => ({
    meta: [
      { title: "PrepOS — AI-Powered Interview Operating System | Mogadala Teja" },
      {
        name: "description",
        content:
          "PrepOS: a production-grade multi-agent platform for adaptive interview preparation, with a provider-agnostic AI Gateway and RAG knowledge base.",
      },
      { property: "og:title", content: "PrepOS — AI-Powered Interview Operating System" },
      {
        property: "og:description",
        content:
          "Multi-agent AI mentorship and deterministic assessment governed by 12 architecture documents.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProjectCaseStudy project={project} />,
});
