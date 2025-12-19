import { PageTemplate } from "@/app/lib/page-template";

export default function MassageWellnessPage() {
  return (
    <PageTemplate
      category="Activities"
      title="Massage & Wellness"
      heroImage="/massage.png"
      description="Relax and rejuvenate with our professional massage and wellness services. Our skilled therapists offer a range of treatments to help you unwind and restore balance."
      details={{
        subtitle: "Wellness & Relaxation",
        info: "Professional therapists | Various treatments | Spa facilities",
      }}
    />
  );
}

