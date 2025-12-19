import { PageTemplate } from "@/app/lib/page-template";

export default function LaundryPage() {
  return (
    <PageTemplate
      category="Services"
      title="Laundry"
      heroImage="/Coconut_1.17.1.jpg"
      description="Keep your clothes fresh and clean with our professional laundry service. Fast, reliable, and convenient service to make your stay more comfortable."
      details={{
        subtitle: "Laundry Service",
        info: "Professional cleaning | Fast turnaround | Convenient service",
      }}
    />
  );
}

