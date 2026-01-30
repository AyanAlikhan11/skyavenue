import type { MetadataRoute } from "next";
import { siteUrl } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");

  return [
    { url: `${base}/`, lastModified: new Date(), changefreq: "weekly", priority: 1 },
    { url: `${base}/menu`, lastModified: new Date(), changefreq: "weekly", priority: 0.9 },
    { url: `${base}/offers`, lastModified: new Date(), changefreq: "weekly", priority: 0.8 },
    { url: `${base}/gallery`, lastModified: new Date(), changefreq: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changefreq: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changefreq: "yearly", priority: 0.6 }
  ];
}