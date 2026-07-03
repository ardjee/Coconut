import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";

export const metadata: Metadata = {
  title: "Birthday Parties",
  description:
    "Celebrate your birthday at Coconut Beach on Lake Victoria: lakeside venue, catering, music and accommodation for your guests.",
};

export default function BirthdayPartiesPage() {
  return (
    <PageTemplate
      category="Events"
      title="Birthday Parties"
      heroImage="/Coconut_1.25.1.jpg"
      description="Make birthdays unforgettable with our party packages. From intimate celebrations to large gatherings, we create the perfect setting for a memorable birthday experience."
      details={{
        subtitle: "Party Packages",
        info: "Customizable celebrations | Fun activities | Special decorations",
      }}
    />
  );
}

