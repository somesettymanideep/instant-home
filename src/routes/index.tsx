import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/site/index.html" });
  },
  head: () => ({
    meta: [
      { title: "Hvillas — Home" },
      { name: "description", content: "Hvillas architecture and villa design." },
      { property: "og:title", content: "Hvillas — Home" },
      { property: "og:description", content: "Hvillas architecture and villa design." },
    ],
  }),
  component: () => null,
});
