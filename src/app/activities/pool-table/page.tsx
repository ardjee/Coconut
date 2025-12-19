import { PageTemplate } from "@/app/lib/page-template";

export default function PoolTablePage() {
  return (
    <PageTemplate
      category="Activities"
      title="Pool Table"
      heroImage="/pooltable.png"
      description="Enjoy a game of pool in our recreation area. Challenge friends and family to a friendly match in a relaxed, comfortable setting."
      details={{
        subtitle: "Recreation",
        info: "Professional pool table | Indoor recreation area | Available all day",
      }}
    />
  );
}

