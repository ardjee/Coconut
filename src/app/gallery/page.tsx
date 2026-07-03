import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Photos of Coconut Beach resort in Majanji, Uganda — rooms, pool, gardens, restaurant and the beach on Lake Victoria.",
};

export default function Page() {
  return <GalleryClient />;
}
