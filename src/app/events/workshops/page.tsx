import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Workshops & Seminars",
  description:
    "Run workshops and seminars at Coconut Beach on Lake Victoria — an inspiring lakeside venue with accommodation and catering.",
};

export default function WorkshopsPage() {
  return (
    <PageTemplate
      category="Events"
      title="Workshops"
      heroImage="/Coconut_1.20.1.jpg"
      description="Host your workshop or training session in our versatile event spaces. Perfect for corporate training, educational programs, or creative workshops in a inspiring environment."
      details={{
        subtitle: "Event Spaces",
        info: "Versatile venues | Professional setup | Group accommodations",
      }}
    />
  );
}

