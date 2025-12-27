import { PageTemplate } from "@/app/lib/page-template";

export default function PoolPage() {
  return (
    <PageTemplate
      category="Services"
      title="Pool"
      heroImage="/swimmingpool at sunset.png"
      detailsImage="/poolside fun 3.png"
      description="Our swimming pool consists of 2 parts: The main pool and the toddler pool. The pool gets cleaned daily and is always of amazing temperature."
      details={{
        subtitle: "Main pool",
        info: "our main pool has 3 different layers, all with different depths. This way we make sure the pool is safe and fun for every age!",
      }}
      duplicateDetails={true}
      detailsImage2="/swimming pool 5.png"
      details2={{
        subtitle: "Todler Pool",
        info: "our Todler pool is separated for the main pool, so parents can keep an eye on their kids playing safely",
      }}
      galleryImages={[
        "/swimming pool 2.png",
        "/coconut overview sharp.png",
        "/swimming pool 1.png",
        "/swimming pool 6.png",
        "/swimmingpool at sunset.png",
      ]}
    />
  );
}

