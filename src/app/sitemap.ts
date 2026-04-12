import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://legacybridge.ai";

  const routes = [
    "",
    "/platform",
    "/industries",
    "/use-cases",
    "/pilot",
    "/pricing",
    "/security",
    "/resources",
    "/faq",
    "/updates",
    "/compare",
    "/enterprise",
    "/demo",
    "/about",
    "/contact",
    "/login",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
