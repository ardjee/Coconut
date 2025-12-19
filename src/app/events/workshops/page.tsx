import { PageTemplate } from "@/app/lib/page-template";

export default function WorkshopsPage() {
  return (
    <PageTemplate
      category="Events"
      title="Workshops"
      heroImage="/Coconut_1.20.1.jpg"
      description="Host your workshop or training session in our versatile event spaces. Perfect for corporate training, educational programs, or creative workshops in a inspiring environment."
      details={{
        subtitle: "Event Spaces",
        info: "Versatile venues | Professional setup | Group accommodations",
      }}
    />
  );
}

