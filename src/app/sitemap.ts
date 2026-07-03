import type { MetadataRoute } from "next";

const SITE_URL = "https://www.coconutbeach.ug";

const routes = [
  "",
  "/book",
  "/contact",
  "/gallery",
  "/concept",
  "/resorts",
  "/deluxe-collection",
  "/whats-included",
  "/events",
  "/offers",
  "/offers/first-child-free",
  "/offers/special",
  "/accommodation/upper-rooms",
  "/accommodation/lower-rooms",
  "/accommodation/camping",
  "/accommodation/groups",
  "/activities/beach-volleyball",
  "/activities/boat-cruise",
  "/activities/boda-boda-drives",
  "/activities/large-screen-dstv",
  "/activities/local-school-visit",
  "/activities/massage-wellness",
  "/activities/pool-table",
  "/activities/swimming",
  "/events/artist-performances",
  "/events/birthday-parties",
  "/events/ceremonies",
  "/events/company-retreats",
  "/events/weddings",
  "/events/workshops",
  "/restaurants",
  "/restaurants/fish-and-chips",
  "/services/bar",
  "/services/laundry",
  "/services/pool",
  "/services/vip-bar",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/book" ? 0.9 : 0.7,
  }));
}
