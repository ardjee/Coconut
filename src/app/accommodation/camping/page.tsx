import { PageTemplate } from "@/app/lib/page-template";

export default function CampingPage() {
  return (
    <PageTemplate
      category="Accommodation"
      title="Camping"
      heroImage="/20210309_110934.jpg"
      description="Experience the great outdoors with our camping facilities. Set up your tent in our designated camping area and enjoy the natural beauty of Lake Victoria while still having access to resort amenities."
      details={{
        subtitle: "Outdoor Experience",
        info: "Designated camping area | Access to facilities | Natural setting",
      }}
    />
  );
}

