import { PageTemplate } from "@/app/lib/page-template";

export default function SwimmingPage() {
  return (
    <PageTemplate
      category="Activities"
      title="Swimming"
      heroImage="/swimming (AI1).png"
      description="Take a refreshing dip in our beautiful pools or enjoy the natural waters of Lake Victoria. Multiple pool options available for all ages and preferences."
      detailsImage="/swimming (AI2).png"
      details={{
        subtitle: "Water Activities",
        info: "Lake access | All ages welcome",
      }}
      galleryImages={[
        "/swimming (AI2).png",
        "/swimming (AI1).png",
        "/swimming pool 1.png",
        "/swimming pool 3.png",
        "/swimming pool 5.png",
        "/swimming pool 6.png",
        "/swimmingpool at sunset.png",
      ]}
    />
  );
}

