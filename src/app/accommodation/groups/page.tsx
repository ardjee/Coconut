import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Group Accommodation & Retreats",
  description:
    "Group stays at Coconut Beach on Lake Victoria: discounted rates for retreats, workshops, team building and celebrations in Majanji, Uganda.",
};

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
      showGallery={false}
    />
  );
}

