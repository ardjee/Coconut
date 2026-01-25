import { PageTemplate } from "@/app/lib/page-template";

export default function SwimmingPage() {
  return (
    <PageTemplate
      category="Activities"
      title="Swimming"
      heroImage="/swimming 3.png"
      description="Take a refreshing dip in our beautiful pools or enjoy the natural waters of Lake Victoria. Multiple pool options available for all ages and preferences."
      detailsImage="/swimming 1.png"
      details={{
        subtitle: "Water Activities",
        info: "Lake access | All ages welcome",
      }}
      galleryImages={[
        "/swimming 2.png",
        "/swimming pool 1.png",
        "/swimming pool 3.png",
        "/swimming pool 5.png",
        "/swimming pool 6.png",
        "/swimmingpool at sunset.png",
      ]}
    />
  );
}

