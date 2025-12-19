import { PageTemplate } from "@/app/lib/page-template";

export default function PoolPage() {
  return (
    <PageTemplate
      category="Services"
      title="Pool"
      heroImage="/Coconut_1.25.1.jpg"
      description="Enjoy our beautiful pool facilities with multiple pools, comfortable lounging areas, and poolside service. Perfect for relaxation and recreation."
      details={{
        subtitle: "Pool Facilities",
        info: "Multiple pools | Poolside service | Comfortable lounging",
      }}
    />
  );
}

