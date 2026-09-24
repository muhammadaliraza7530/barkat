import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Coming Soon | Barkat Engineering" },
      {
        name: "description",
        content:
          "The Barkat Engineering About page is coming soon.",
      },
      { property: "og:title", content: "About — Barkat Engineering" },
      {
        property: "og:description",
        content: "The Barkat Engineering About page is coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <ComingSoon page="About" />;
}
