import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Activities & Experiences",
  description:
    "Things to do at Coconut Beach: boat cruises on Lake Victoria, swimming, beach volleyball, boda boda village tours, massage and more.",
};

export default function DeluxeCollectionPage() {
  return (
    <PageTemplate
      category="Activities"
      title="Activities"
      heroImage="/Coconut_1.25.1.jpg"
      description="Explore a world of activities at Coconut Beach. From water sports to cultural experiences, wellness treatments to entertainment, there's something for everyone to enjoy during your stay."
    />
  );
}

