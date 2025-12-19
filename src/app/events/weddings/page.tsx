import { PageTemplate } from "@/app/lib/page-template";

export default function WeddingsPage() {
  return (
    <PageTemplate
      category="Events"
      title="Weddings"
      heroImage="/Coconut_1.18.1.jpg"
      description="Celebrate your special day in a stunning lakeside setting. Our wedding packages include everything you need for a memorable ceremony and reception with breathtaking views of Lake Victoria."
      details={{
        subtitle: "Wedding Packages",
        info: "Full wedding planning | Lakeside venue | Customizable packages",
      }}
    />
  );
}

