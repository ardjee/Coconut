import { PageTemplate } from "@/app/lib/page-template";

export default function PoolPage() {
  return (
    <PageTemplate
      category="Services"
      title="Pool"
      heroImage="/coconut overview sharp.png"
      detailsImage="/swimming pool 1.png"
      description="Our swimming pool consists of 2 parts: The main pool and the toddler pool. The pool gets cleaned daily and is always of amazing temperature."
      details={{
        subtitle: "Main pool",
        info: "our main pool has 3 different layers, all with different depths. This way we make sure the pool is safe and fun for every age!",
      }}
      duplicateDetails={true}
    />
  );
}

