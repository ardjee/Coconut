import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Accommodation on Lake Victoria",
  description:
    "Stay at Coconut Beach in Majanji, Uganda: upper rooms with lake view, garden-level lower rooms, lakeside camping and group accommodation.",
};

export default function ResortsPage() {
  return (
    <PageTemplate
      category="Accommodation"
      title="Accommodation"
      heroImage="/Coconut_1.18.1.jpg"
      description="Discover our range of accommodation options at Coconut Beach. From comfortable rooms to camping facilities, we offer something for every traveler. Each option provides a unique way to experience the beauty of Lake Victoria."
    />
  );
}

