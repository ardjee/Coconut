import { PageTemplate } from "@/app/lib/page-template";

export default function BoatCruisePage() {
  return (
    <PageTemplate
      category="Activities"
      title="Boat Cruise"
      heroImage="/boat (AI2).png"
      detailsImage="/boat (AI).png"
      description="Set sail on Lake Victoria with our scenic boat cruises. Experience the beauty of the lake, spot local wildlife, and enjoy a relaxing journey on the water."
      details={{
        subtitle: "Lake Victoria Cruise",
        info: "Scenic tours | Wildlife viewing | Relaxing experience",
      }}
      galleryImages={[
        "/Boat (AI3).jpeg",
        "/boat (AI).png",
        "/boat (AI2).png",
      ]}
    />
  );
}

