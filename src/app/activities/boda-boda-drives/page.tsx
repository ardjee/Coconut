import { PageTemplate } from "@/app/lib/page-template";

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

