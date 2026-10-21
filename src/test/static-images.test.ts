import { readFileSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";

const homepage = readFileSync("public/site/index.html", "utf8");
const assets = readdirSync("src/assets").filter((name) => name.endsWith(".asset.json"));

describe("Local homepage images", () => {
  it.each(assets)("uses a portable public URL for %s", (filename) => {
    const asset = JSON.parse(readFileSync(`src/assets/${filename}`, "utf8"));
    const imageSources = [...homepage.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map((match) => match[1]);
    expect(imageSources).toContain(`https://instant-home.lovable.app${asset.url}`);
    expect(imageSources).not.toContain(asset.url);
  });
});