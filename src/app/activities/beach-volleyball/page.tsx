import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Beach Volleyball",
  description:
    "Play beach volleyball on our lakeside sand court at Coconut Beach, Lake Victoria — free for guests and visitors.",
};

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

