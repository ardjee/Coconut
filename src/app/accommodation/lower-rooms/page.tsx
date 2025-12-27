import { PageTemplate } from "@/app/lib/page-template";

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

