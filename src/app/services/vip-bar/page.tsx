import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";
import { isFromHomeExperiences } from "@/app/lib/home-experiences-source";

export const metadata: Metadata = {
  title: "VIP Bar",
  description:
    "The VIP Bar at Coconut Beach: premium drinks, personalized service and private seating with stunning views over Lake Victoria.",
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function VipBarPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  return (
    <PageTemplate
      category="Services"
      title="VIP Bar"
      heroImage="/seating area (AI).png"
      detailsImage="/VIP bar (AI).png"
      description="Experience luxury and exclusivity at our VIP Bar. Enjoy premium drinks, personalized service, and a sophisticated atmosphere with stunning views of Lake Victoria."
      details={{
        subtitle: "VIP Experience",
        info: "Premium drinks | Personalized service | Private seating",
      }}
      galleryImages={[
        "/seating area (AI).png",
        "/VIP bar (AI).png",
        "/bar.png",
        "/bar2.jpg",
        "/bar 3.png",
      ]}
      showHomeExperiencesReturn={isFromHomeExperiences(sp)}
    />
  );
}
