import { PageTemplate } from "@/app/lib/page-template";

export default function BarPage() {
  return (
    <PageTemplate
      category="Services"
      title="Bar"
      heroImage="/bar2.jpg"
      description="Relax and unwind at our bar with a wide selection of drinks and cocktails. Enjoy the vibrant atmosphere and friendly service in a beautiful setting overlooking Lake Victoria."
      details={{
        subtitle: "Bar & Lounge",
        info: "Wide drink selection | Cocktails | Lakeside views",
        hours: "Daily: 10:00 - 23:00",
      }}
    />
  );
}

