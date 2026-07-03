import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Services & Amenities",
  description:
    "Resort services at Coconut Beach: restaurant, beach bar, swimming pool, laundry and everything included in your stay on Lake Victoria.",
};

export default function WhatsIncludedPage() {
  return (
    <PageTemplate
      category="Services"
      title="Services"
      heroImage="/bar2.jpg"
      description="Discover all the services available during your stay at Coconut Beach. From dining and entertainment to practical services, we ensure your comfort and enjoyment throughout your visit."
    />
  );
}

