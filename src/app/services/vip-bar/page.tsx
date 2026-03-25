import { PageTemplate } from "@/app/lib/page-template";

export default function VipBarPage() {
  return (
    <PageTemplate
      category="Services"
      title="VIP Bar"
      heroImage="/seating area (AI).png"
      detailsImage="/VIP bar (AI).png"
      description="Experience luxury and exclusivity at our VIP Bar. Enjoy premium drinks, personalized service, and a sophisticated atmosphere with stunning views of Lake Victoria."
      details={{
        subtitle: "VIP Experience",
        info: "Premium drinks | Personalized service | Private seating",
      }}
      galleryImages={[
        "/seating area (AI).png",
        "/VIP bar (AI).png",
        "/bar.png",
        "/bar2.jpg",
        "/bar 3.png",
      ]}
    />
  );
}
