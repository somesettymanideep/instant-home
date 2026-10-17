import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SEA — Studio for Eclectic Architecture" },
      { name: "description", content: "SEA - Studio for Eclectic Architecture" },
      { property: "og:title", content: "SEA — Studio for Eclectic Architecture" },
      { property: "og:description", content: "SEA - Studio for Eclectic Architecture" },
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
