import type { MetadataRoute } from "next";
import { programs } from "@/content/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://edugenzi.com";

  const programUrls: MetadataRoute.Sitemap = programs.map((p) => ({
    url: `${baseUrl}/programs/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...programUrls,
  ];
}

