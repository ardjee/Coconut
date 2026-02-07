import { PageTemplate } from "@/app/lib/page-template";

export default function BeachVolleyballPage() {
  return (
    <PageTemplate
      category="Activities"
      title="Beach Volleyball"
      heroImage="/volleyball.png"
      detailsImage="/volleyball2.png"
      description="Get active with beach volleyball on our courts. Perfect for groups looking for fun, competitive games in a beautiful lakeside setting."
      details={{
        subtitle: "Beach Sports",
        info: "Beach volleyball court | Equipment provided | Group activities",
      }}
      showGallery={false}
    />
  );
}

