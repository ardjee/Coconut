import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Pool Table & Games",
  description:
    "Play billiards in the lounge at Coconut Beach resort on Lake Victoria — a relaxed way to spend the evening after a day at the beach.",
};

export default function PoolTablePage() {
  return (
    <PageTemplate
      category="Activities"
      title="Pool Table"
      heroImage="/pooltable.png"
      detailsImage="/Pooltabel with Robert.png"
      description="Enjoy a game of pool in our recreation area. Challenge friends and family to a friendly match in a relaxed, comfortable setting."
      details={{
        subtitle: "Recreation",
        info: "Professional pool table | Available all day",
      }}
      showGallery={false}
    />
  );
}

