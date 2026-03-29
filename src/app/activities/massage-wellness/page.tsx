import { PageTemplate } from "@/app/lib/page-template";
import { isFromHomeExperiences } from "@/app/lib/home-experiences-source";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function MassageWellnessPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  return (
    <PageTemplate
      category="Activities"
      title="Massage & Wellness"
      heroImage="/massage 1.png"
      detailsImage="/massage 2.png"
      detailsImageObjectFit="cover"
      description="Relax and rejuvenate with our massage therapists. Massages can be indoors or outdoors, choose what you like best."
      details={{
        subtitle: "Wellness & Relaxation",
        info: "professional therapists | indoors and outdoors",
      }}
      showGallery={false}
      showHomeExperiencesReturn={isFromHomeExperiences(sp)}
    />
  );
}

