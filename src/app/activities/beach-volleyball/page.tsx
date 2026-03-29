import { PageTemplate } from "@/app/lib/page-template";
import { isFromHomeExperiences } from "@/app/lib/home-experiences-source";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BeachVolleyballPage({ searchParams }: PageProps) {
  const sp = await searchParams;
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
      showHomeExperiencesReturn={isFromHomeExperiences(sp)}
    />
  );
}

