import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Boda Boda Village Tours",
  description:
    "Explore the Ugandan countryside by boda boda from Coconut Beach — guided motorcycle tours through local villages around Majanji.",
};

export default function BodaBodaDrivesPage() {
  return (
    <PageTemplate
      category="Activities"
      title="Boda Boda Drives"
      heroImage="/boda boda (AI).png"
      description="Explore the local area with our boda boda (motorcycle taxi) tours. Experience authentic local transportation while discovering the beautiful surroundings."
      detailsImage="/boda boda (AI2).png"
      details={{
        subtitle: "Local Tours",
        info: "Guided tours | Local experience | Scenic routes",
      }}
      showGallery={false}
    />
  );
}

