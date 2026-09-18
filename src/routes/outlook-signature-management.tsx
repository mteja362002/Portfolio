import { createFileRoute } from "@tanstack/react-router";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { getProject } from "@/lib/projects";

const project = getProject("outlook-signature-management");

export const Route = createFileRoute("/outlook-signature-management")({
  head: () => ({
    meta: [
      { title: "Outlook Signature Management — Enterprise Add-in | Mogadala Teja" },
      {
        name: "description",
        content:
          "A centralized Outlook Add-in automating email signature generation across Desktop, Web and Mobile for 100% org-wide brand compliance.",
      },
      { property: "og:title", content: "Outlook Signature Management — Enterprise Add-in" },
      {
        property: "og:description",
        content:
          "ReactJS, Office.js and SharePoint deliver governed corporate signatures across every Outlook client.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProjectCaseStudy project={project} />,
});
