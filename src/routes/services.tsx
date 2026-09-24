import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Coming Soon | Barkat Engineering" },
      {
        name: "description",
        content:
          "The Barkat Engineering Services page is coming soon.",
      },
      { property: "og:title", content: "Services — Barkat Engineering" },
      {
        property: "og:description",
        content: "The Barkat Engineering Services page is coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return <ComingSoon page="Services" />;
}
