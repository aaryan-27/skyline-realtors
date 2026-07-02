import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PROJECTS } from "@/lib/data/projects";
import { LOCATIONS } from "@/lib/data/locations";
import { BLOG_POSTS } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes = [
    { url: "", priority: 1, freq: "weekly" as const },
    { url: "/about", priority: 0.8, freq: "monthly" as const },
    { url: "/residential", priority: 0.9, freq: "weekly" as const },
    { url: "/locations", priority: 0.8, freq: "weekly" as const },
    { url: "/blog", priority: 0.7, freq: "weekly" as const },
    { url: "/contact", priority: 0.7, freq: "monthly" as const },
  ].map((r) => ({
    url: `${base}${r.url}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const locationRoutes = LOCATIONS.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogRoutes = BLOG_POSTS.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...locationRoutes, ...blogRoutes];
}
