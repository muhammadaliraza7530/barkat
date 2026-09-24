import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Coming Soon | Barkat Engineering" },
      {
        name: "description",
        content:
          "The Barkat Engineering Contact page is coming soon.",
      },
      { property: "og:title", content: "Contact — Barkat Engineering" },
      {
        property: "og:description",
        content: "The Barkat Engineering Contact page is coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <ComingSoon page="Contact" />;
}
