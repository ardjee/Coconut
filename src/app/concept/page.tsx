import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "About Us — Our Concept",
  description:
    "The story and philosophy of Coconut Beach: a relaxed, barefoot lakeside resort in Majanji, Uganda, built around the beauty of Lake Victoria.",
};

export default function ConceptPage() {
  return (
    <PageTemplate
      category="About Us"
      title="About Us"
      heroImage="/Coconut_1.18.1.jpg"
      description="Welcome to Coconut Beach, a tropical paradise on the shores of Lake Victoria. We offer a unique blend of comfort, adventure, and relaxation in one of the most beautiful settings in the region. Discover our story and what makes us special."
    />
  );
}

