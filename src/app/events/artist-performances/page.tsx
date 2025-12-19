import { PageTemplate } from "@/app/lib/page-template";

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

