import { PageTemplate } from "@/app/lib/page-template";

export default function UpperRoomsPage() {
  return (
    <PageTemplate
      category="Accommodation"
      title="Upper Rooms"
      heroImage="/Coconut_1.17.1.jpg"
      description="Experience comfort and elegance in our upper rooms, offering stunning views and modern amenities. Each room is thoughtfully designed to provide a peaceful retreat with all the comforts of home."
      details={{
        subtitle: "Upper Level",
        info: "Spacious rooms with panoramic views | Modern amenities | Comfortable furnishings",
      }}
    />
  );
}

