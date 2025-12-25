import { PageTemplate } from "@/app/lib/page-template";

export default function UpperRoomsPage() {
  return (
    <PageTemplate
      category="Accommodation"
      title="Upper Rooms"
      heroImage="/upper rooms (AI).png"
      heroImagePosition="top"
      detailsImage="/balcony view.png"
      description="Experience comfort and elegance in our upper rooms, offering a stunning view over coconut beach and the majestic Lake Victoria."
      details={{
        subtitle: "Upper Level",
        info: "Our upper rooms offer a king-sized bed, an included bathroom and a fan. Every room also includes a beautiful balcony where you can enjoy watching the sunset. There is a daily cleaning service included.",
      }}
    />
  );
}

