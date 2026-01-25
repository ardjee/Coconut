import { PageTemplate } from "@/app/lib/page-template";

export default function LocalSchoolVisitPage() {
  return (
    <PageTemplate
      category="Activities"
      title="Local School Visit"
      heroImage="/School.band.jpeg"
      detailsImage="/School.png"
      description="Connect with the local community through our school visit program. Experience authentic cultural exchange and learn about local education."
      details={{
        subtitle: "Community Engagement",
        info: "Cultural exchange | Educational experience | Community connection",
      }}
      galleryImages={[
        "/School.band.jpeg",
        "/School.png",
        "/Coconut_1.18.1.jpg",
        "/Coconut_1.25.1.jpg",
      ]}
    />
  );
}

