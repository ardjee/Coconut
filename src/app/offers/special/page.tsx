import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Special Packages",
  description:
    "Seasonal packages and special deals at Coconut Beach resort on Lake Victoria — ask about current rates for stays, groups and events.",
};

export default function SpecialOffersPage() {
  return (
    <PageTemplate
      category="Offers"
      title="Special Offers"
      heroImage="/Coconut_1.20.1.jpg"
      description="Take advantage of our limited-time special offers. These exclusive deals provide exceptional value and unique experiences during your stay at Coconut Beach."
    />
  );
}

