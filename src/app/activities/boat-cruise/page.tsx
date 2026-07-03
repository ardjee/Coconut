import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Boat Cruises on Lake Victoria",
  description:
    "Scenic boat cruises from Coconut Beach, Majanji: spot birds and wildlife on Lake Victoria with an experienced local captain.",
};

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

