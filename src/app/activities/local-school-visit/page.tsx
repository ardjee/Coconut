import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Local School & Community Visits",
  description:
    "Visit a nearby community school from Coconut Beach and experience everyday life in Majanji, Uganda — a meaningful cultural excursion.",
};

export default function LocalSchoolVisitPage() {
  return (
    <PageTemplate
      category="Activities"
      title="Local School Visit"
      heroImage="/School.band.jpeg"
      detailsImage="/School.png"
      description="Connect with the local community through our school visit program. Experience authentic cultural exchange and learn about local education."
      details={{
        subtitle: "Community Engagement",
        info: "Cultural exchange | Educational experience | Community connection",
      }}
      showGallery={false}
    />
  );
}

