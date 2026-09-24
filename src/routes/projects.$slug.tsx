import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/lib/site";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project unavailable — Barkat Engineering" },
          { name: "description", content: "This Barkat Engineering project page is unavailable." },
          { property: "og:title", content: "Project unavailable — Barkat Engineering" },
          { property: "og:description", content: "This Barkat Engineering project page is unavailable." },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Coming Soon | Barkat Engineering`;
    return {
      meta: [
        { title },
        { name: "description", content: "Barkat Engineering project details are coming soon." },
        { property: "og:title", content: title },
        { property: "og:description", content: "Barkat Engineering project details are coming soon." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  return <ComingSoon page="Project" />;
}
