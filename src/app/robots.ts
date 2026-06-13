import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/sahej-cv-ats.html", "/sahej-cv-ats.docx"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
