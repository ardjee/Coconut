import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Special Offers",
  description:
    "Current deals and packages at Coconut Beach resort on Lake Victoria, Uganda — including our first-child-stays-free family offer.",
};

export default function OffersPage() {
  return (
    <PageTemplate
      category="Offers"
      title="All Offers"
      heroImage="/Coconut_1.18.1.jpg"
      description="Discover our special offers and packages designed to make your stay at Coconut Beach even more memorable. From seasonal promotions to exclusive deals, find the perfect offer for your vacation."
    />
  );
}

