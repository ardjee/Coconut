import { PageTemplate } from "@/app/lib/page-template";

export default function WeddingsPage() {
  return (
    <PageTemplate
      category="Events"
      title="Weddings"
      heroImage="/wedding.png"
      description="Celebrate your special day in a stunning lakeside setting. Our wedding packages include everything you need for a memorable ceremony and reception with breathtaking views of Lake Victoria."
      detailsImage="/wedding2.png"
      details={{
        subtitle: "Wedding Packages",
        info: "Full wedding planning | Lakeside venue | Customizable packages",
      }}
      duplicateDetails={true}
      detailsImage2="/wedding2.png"
      details2={{
        subtitle: "Romantic Venues",
        info: "Lakeside ceremonies | Garden receptions | Stunning backdrops",
      }}
      galleryImages={[
        "/wedding.png",
        "/wedding2.png",
      ]}
    />
  );
}

