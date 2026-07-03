import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Company Retreats",
  description:
    "Corporate retreats and team building at Coconut Beach on Lake Victoria: meeting space, group accommodation, catering and activities.",
};

export default function CompanyRetreatsPage() {
  return (
    <PageTemplate
      category="Events"
      title="Company Retreats"
      heroImage="/Coconut_1.18.1.jpg"
      description="Plan your corporate retreat in a inspiring setting. Our facilities are perfect for team building, strategy sessions, and corporate events with modern amenities and beautiful surroundings."
      details={{
        subtitle: "Corporate Events",
        info: "Meeting facilities | Team building activities | Group accommodations",
      }}
    />
  );
}

