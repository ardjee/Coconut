import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "First Child Stays Free",
  description:
    "Family offer at Coconut Beach: your first child stays free. Enjoy a family getaway on Lake Victoria in Majanji, Uganda.",
};

export default function FirstChildFreePage() {
  return (
    <PageTemplate
      category="Offers"
      title="First Child Free"
      heroImage="/Coconut_1.17.1.jpg"
      description="Bring your family and enjoy our special offer where the first child stays free. Perfect for family vacations, this offer makes it easier to create lasting memories together."
    />
  );
}

