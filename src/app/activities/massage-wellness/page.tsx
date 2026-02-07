import { PageTemplate } from "@/app/lib/page-template";

export default function MassageWellnessPage() {
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
    />
  );
}

