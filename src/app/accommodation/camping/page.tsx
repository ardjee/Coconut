import { PageTemplate } from "@/app/lib/page-template";

export default function CampingPage() {
  return (
    <PageTemplate
      category="Accommodation"
      title="Camping"
      heroImage="/camping (AI3).png"
      heroImagePosition="top"
      detailsImage="/elephant 2.png"
      description="Experience the great outdoors with our camping facilities. Set up your tent in our designated camping area and enjoy the natural beauty of Lake Victoria while still having access to resort amenities."
      details={{
        subtitle: "Outdoor Experience",
        info: "if you want to stay closer to nature our camping facilities are perfect for you. You can bring your own tent or rent a tent from the resort and begin your camping journey!",
      }}
      showGallery={false}
    />
  );
}

