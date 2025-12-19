import { PageTemplate } from "@/app/lib/page-template";

export default function GroupsPage() {
  return (
    <PageTemplate
      category="Accommodation"
      title="Groups"
      heroImage="/Coconut_1.20.1.jpg"
      description="Perfect for family reunions, corporate retreats, or large gatherings. Our group accommodation options provide comfortable spaces for everyone to stay together."
      details={{
        subtitle: "Group Accommodation",
        info: "Multiple room options | Shared common areas | Flexible arrangements",
      }}
    />
  );
}

