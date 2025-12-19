import { PageTemplate } from "@/app/lib/page-template";

export default function LowerRoomsPage() {
  return (
    <PageTemplate
      category="Accommodation"
      title="Lower Rooms"
      heroImage="/Coconut_1.18.1.jpg"
      description="Our lower rooms provide easy access to the resort grounds and pool areas. Enjoy the convenience of ground-level accommodation with direct access to outdoor spaces."
      details={{
        subtitle: "Ground Level",
        info: "Easy pool access | Garden views | Convenient location",
      }}
    />
  );
}

