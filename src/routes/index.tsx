import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hvillas — Home" },
      { name: "description", content: "Hvillas architecture and villa design." },
      { property: "og:title", content: "Hvillas — Home" },
      { property: "og:description", content: "Hvillas architecture and villa design." },
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
