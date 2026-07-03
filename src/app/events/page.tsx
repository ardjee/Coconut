import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Events & Celebrations",
  description:
    "Host your event at Coconut Beach on Lake Victoria: weddings, company retreats, birthday parties, ceremonies, workshops and live performances.",
};

export default function EventsPage() {
  return (
    <PageTemplate
      category="Events"
      title="Events"
      heroImage="/Coconut_1.20.1.jpg"
      description="Host your special event at Coconut Beach. From intimate celebrations to large gatherings, we provide beautiful venues and professional services to make your event unforgettable."
    />
  );
}

