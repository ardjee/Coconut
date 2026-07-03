import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Live Artist Performances",
  description:
    "Live music and artist performances at Coconut Beach on Lake Victoria — enjoy Ugandan artists in a unique lakeside setting.",
};

export default function ArtistPerformancesPage() {
  return (
    <PageTemplate
      category="Events"
      title="Artist Performances"
      heroImage="/Coconut_1.20.1.jpg"
      description="Experience live entertainment with our artist performance events. From local musicians to international acts, enjoy world-class performances in an intimate lakeside setting."
      details={{
        subtitle: "Live Entertainment",
        info: "Performance venue | Sound system | Intimate setting",
      }}
    />
  );
}

