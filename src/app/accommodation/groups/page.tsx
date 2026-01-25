import { PageTemplate } from "@/app/lib/page-template";

export default function GroupsPage() {
  return (
    <PageTemplate
      category="Accommodation"
      title="Groups"
      heroImage="/group sunset.png"
      detailsImage="/groups 1.png"
      description="Perfect for family reunions, corporate retreats, or large gatherings. Our group accommodation options provide comfortable spaces for everyone to stay together."
      details={{
        subtitle: "Group Accommodation",
        info: "Multiple room options | Shared common areas | Flexible arrangements",
      }}
      galleryImages={[
        "/group sunset.png",
        "/groups 1.png",
        "/Coconut_1.18.1.jpg",
        "/Coconut_1.25.1.jpg",
      ]}
    />
  );
}

