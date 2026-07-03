import type { Metadata } from "next";
import { PageTemplate } from "@/app/lib/page-template";
import { isFromHomeExperiences } from "@/app/lib/home-experiences-source";

export const metadata: Metadata = {
  title: "Massage & Wellness",
  description:
    "Relaxing massage and wellness treatments in a tranquil lakeside setting at Coconut Beach on Lake Victoria, from 50,000 UGX.",
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function MassageWellnessPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  return (
    <PageTemplate
      category="Activities"
      title="Massage & Wellness"
      heroImage="/massage-1.webp"
      detailsImage="/massage-2.webp"
      detailsImageObjectFit="cover"
      description=""
      showPageIntro={false}
      details={{
        subtitle: "Massage & Wellness",
        info: [
          "Unwind and recharge with our relaxing massage and wellness treatments, designed to restore both body and mind. Our experienced therapists offer a range of treatments, from soothing relaxation massages to more revitalizing options, all in a safe and comfortable setting.",
          "To ensure availability and the best possible experience, we kindly ask guests to book their massage in advance. Our team is happy to assist you in selecting the treatment that suits your needs.",
          "Take a moment for yourself and enjoy a truly refreshing wellness experience during your stay.",
        ],
      }}
      showGallery={false}
      showHomeExperiencesReturn={isFromHomeExperiences(sp)}
    />
  );
}

