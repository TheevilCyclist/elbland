import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { locations, locationHref } from "@/content/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/leistungen", "/einsatzgebiet", "/ueber-uns", "/kontakt", "/impressum", "/datenschutz"];
  const servicePaths = services.map((s) => `/leistungen/${s.slug}`);
  const locationPaths = locations.map((l) => locationHref(l.slug));

  return [...staticPaths, ...servicePaths, ...locationPaths].map((path) => ({
    url: `${site.baseUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
