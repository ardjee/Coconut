import { PageTemplate } from "@/app/lib/page-template";

export default function PoolPage() {
  return (
    <PageTemplate
      category="Services"
      title="Pool"
      heroImage="/swimmingpool at sunset.png"
      detailsImage="/poolside fun 3.png"
      description={[
        "Our swimming pool consists of two sections: a spacious main pool and a dedicated toddler pool, making it ideal for both families and individual guests. The pool is cleaned daily and maintained at a comfortable temperature, ensuring a pleasant experience throughout your stay.",
        "For your safety and peace of mind, all swimming is supervised, allowing guests of all ages to enjoy the facilities in a secure environment.",
      ]}
      details={{
        subtitle: "Main pool",
        info: [
          "Our main pool features three distinct levels with varying depths, designed to accommodate both relaxation and active swimming. This thoughtful layout ensures that guests of all ages and swimming abilities can enjoy the pool comfortably and safely.",
          "With supervision in place and a welcoming atmosphere, the main pool offers the perfect balance between leisure and fun.",
        ],
      }}
      duplicateDetails={true}
      detailsImage2="/swimming pool 5.png"
      details2={{
        subtitle: "Toddler Pool",
        info: [
          "Our toddler pool is safely separated from the main pool, providing a calm and secure space where young children can enjoy the water. This dedicated area allows parents to easily keep an eye on their kids while they play and build confidence in the water.",
          "The shallow design and supervised environment ensure a safe and enjoyable experience for our youngest guests.",
        ],
      }}
      galleryImages={[
        "/swimming pool 2.png",
        "/coconut overview sharp.png",
        "/swimming pool 1.png",
        "/swimming pool 6.png",
        "/swimmingpool at sunset.png",
      ]}
    />
  );
}

