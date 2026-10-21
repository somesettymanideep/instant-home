import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SEA — Studio for Eclectic Architecture" },
      { name: "description", content: "SEA - Studio for Eclectic Architecture" },
      { property: "og:title", content: "SEA — Studio for Eclectic Architecture" },
      { property: "og:description", content: "SEA - Studio for Eclectic Architecture" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://instant-home.lovable.app/__l5e/assets-v1/8ddbed86-e376-44e6-853c-a3ae3281038b/hero-architecture.png" },
      { name: "twitter:image", content: "https://instant-home.lovable.app/__l5e/assets-v1/8ddbed86-e376-44e6-853c-a3ae3281038b/hero-architecture.png" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/site/index.html");
  }, []);
  return <div className="min-h-screen bg-background" />;
}
