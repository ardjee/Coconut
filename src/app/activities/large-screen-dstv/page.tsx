import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Live Sports on Big Screen DSTV",
  description:
    "Watch live football and entertainment on the large-screen DSTV at Coconut Beach resort on Lake Victoria — free for all guests.",
};

export default function LargeScreenDSTVPage() {
  return (
    <PageTemplate
      category="Activities"
      title="Large Screen DSTV"
      heroImage="/Coconut_1.20.1.jpg"
      description="Catch all your favorite sports and entertainment on our large screen DSTV. Gather with friends to watch live matches, movies, and shows in comfort."
      details={{
        subtitle: "Entertainment",
        info: "Large screen TV | DSTV channels | Comfortable viewing area",
      }}
      detailsImage="/flatscreen.png"
      showGallery={false}
    />
  );
}

