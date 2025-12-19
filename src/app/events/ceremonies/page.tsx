import { PageTemplate } from "@/app/lib/page-template";

export default function CeremoniesPage() {
  return (
    <PageTemplate
      category="Events"
      title="Ceremonies"
      heroImage="/Coconut_1.17.1.jpg"
      description="Host meaningful ceremonies in our beautiful lakeside setting. Whether it's a traditional ceremony, graduation, or special milestone, we provide the perfect venue for your important occasion."
      details={{
        subtitle: "Ceremony Venues",
        info: "Beautiful settings | Traditional or modern | Custom arrangements",
      }}
    />
  );
}

