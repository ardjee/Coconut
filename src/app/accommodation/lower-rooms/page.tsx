import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Lower Rooms with Garden Access",
  description:
    "Comfortable ground-floor rooms at Coconut Beach with en-suite bathroom and direct garden access, steps from Lake Victoria. From 90,000 UGX per night.",
};

export default function LowerRoomsPage() {
  return (
    <PageTemplate
      category="Accommodation"
      title="Lower Rooms"
      heroImage="/birdie.png"
      heroImagePosition="center"
      detailsImage="/Rooms 1.png"
      description="Our lower rooms provide easy access to the resort grounds and pool areas. Enjoy the convenience of ground-level accommodation with direct access to outdoor spaces."
      details={{
        subtitle: "Ground Level",
        info: "Like our upper rooms the lower rooms include a king-sized bed, a fan and a private bathroom. The rooms are cleaned daily.",
      }}
      galleryImages={[
        "/Rooms 0.png",
        "/Rooms 7.png",
        "/Rooms 9.png",
        "/Rooms 13.png",
      ]}
    />
  );
}

