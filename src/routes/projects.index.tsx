import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Coming Soon | Barkat Engineering" },
      {
        name: "description",
        content:
          "The Barkat Engineering Projects page is coming soon.",
      },
      { property: "og:title", content: "Projects — Barkat Engineering" },
      {
        property: "og:description",
        content: "The Barkat Engineering Projects page is coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return <ComingSoon page="Projects" />;
}
