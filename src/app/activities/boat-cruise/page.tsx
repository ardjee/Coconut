import { PageTemplate } from "@/app/lib/page-template";

export default function BoatCruisePage() {
  return (
    <PageTemplate
      category="Activities"
      title="Boat Cruise"
      heroImage="/Coconut_1.18.1.jpg"
      description="Set sail on Lake Victoria with our scenic boat cruises. Experience the beauty of the lake, spot local wildlife, and enjoy a relaxing journey on the water."
      details={{
        subtitle: "Lake Victoria Cruise",
        info: "Scenic tours | Wildlife viewing | Relaxing experience",
      }}
    />
  );
}

