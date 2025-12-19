import { PageTemplate } from "@/app/lib/page-template";

export default function SwimmingPage() {
  return (
    <PageTemplate
      category="Activities"
      title="Swimming"
      heroImage="/Coconut_1.25.1.jpg"
      description="Take a refreshing dip in our beautiful pools or enjoy the natural waters of Lake Victoria. Multiple pool options available for all ages and preferences."
      details={{
        subtitle: "Water Activities",
        info: "Multiple pools | Lake access | All ages welcome",
      }}
    />
  );
}

