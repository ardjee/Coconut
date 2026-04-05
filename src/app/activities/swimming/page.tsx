import { PageTemplate } from "@/app/lib/page-template";
import { isFromHomeExperiences } from "@/app/lib/home-experiences-source";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function SwimmingPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  return (
    <PageTemplate
      category="Activities"
      title="Swimming"
      heroImage="/swimming (AI1).png"
      description="Take a refreshing dip in our beautifully maintained pool, perfect for relaxation and fun for all ages. Whether you're looking to unwind or enjoy time with family, our pool area offers a safe and comfortable environment."
      detailsImage="/swimming (AI2).png"
      details={{
        subtitle: "Water Activities",
        info: [
          "Enjoy a variety of water experiences during your stay, from relaxing by the pool to taking in the scenic lake views. Our resort offers lake access for enjoyment, with safe alternatives for swimming within our facilities.",
          "Please note that swimming in the lake is strongly discouraged. Our team is happy to guide you to safe and enjoyable options.",
        ],
      }}
      galleryImages={[
        "/swimming (AI2).png",
        "/swimming (AI1).png",
        "/swimming pool 1.png",
        "/swimming pool 3.png",
        "/swimming pool 5.png",
        "/swimming pool 6.png",
        "/swimmingpool at sunset.png",
      ]}
      showHomeExperiencesReturn={isFromHomeExperiences(sp)}
    />
  );
}

