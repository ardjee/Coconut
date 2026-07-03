import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Upper Rooms with Lake View",
  description:
    "Upper rooms at Coconut Beach: king-sized bed, en-suite bathroom and a private balcony overlooking Lake Victoria. From 120,000 UGX per night.",
};

export default function UpperRoomsPage() {
  return (
    <PageTemplate
      category="Accommodation"
      title="Upper Rooms"
      heroImage="/upper rooms (AI).png"
      heroImagePosition="top"
      detailsImage="/Rooms 6.png"
      description="Experience comfort and elegance in our upper rooms, offering a stunning view over coconut beach and the majestic Lake Victoria."
      details={{
        subtitle: "Upper Level",
        info: "Our upper rooms offer a king-sized bed, an included bathroom and a fan. Every room also includes a beautiful balcony where you can enjoy watching the sunset. There is a daily cleaning service included.",
      }}
      galleryImages={[
        "/Rooms 14.png",
        "/Rooms 15.png",
        "/Rooms 16.png",
        "/Rooms 17.png",
        "/coconut overview.png",
      ]}
    />
  );
}

