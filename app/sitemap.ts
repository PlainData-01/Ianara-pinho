import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { TREATMENTS } from "@/lib/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/tratamentos", "/sobre", "/contato", "/blog"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const treatmentRoutes = TREATMENTS.map((t) => ({
    url: `${SITE.url}/tratamentos/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
