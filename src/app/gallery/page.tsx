"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const galleryImages = [
  "/20210309_110934.jpg",
  "/balcony view 1.png",
  "/balcony view 2.png",
  "/bar 3.png",
  "/bar 4.png",
  "/bar.png",
  "/bar2.jpg",
  "/birdie.png",
  "/boat (AI).png",
  "/boat (AI2).png",
  "/Boat (AI3).jpeg",
  "/boat.jpeg",
  "/boda boda (AI).png",
  "/boda boda (AI2).png",
  "/camping (AI3).png",
  "/camping 1.png",
  "/camping 2 (AI).png",
  "/cheers.png",
  "/coconut overview sharp.png",
  "/coconut overview.png",
  "/Coconut_1.16.1.png",
  "/Coconut_1.17.1.jpg",
  "/Coconut_1.18.1.jpg",
  "/Coconut_1.20.1.jpg",
  "/Coconut_1.25.1.jpg",
  "/Coconut_1.26.1.jpg",
  "/elephant 2.png",
  "/elephant.png",
  "/food (AI1).png",
  "/food (AI2).png",
  "/food (AI3).png",
  "/Food (AI4).png",
  "/food (AI5).png",
  "/food (AI6).png",
  "/group sunset.png",
  "/groups 1.png",
  "/hero1.png",
  "/IMG_20220107_095557.jpg",
  "/IMG-20240610-WA0009.jpg",
  "/massage 1.png",
  "/massage 2.png",
  "/microwave.png",
  "/palm_model1.png",
  "/poolside fun 2.png",
  "/poolside fun 3.png",
  "/poolside_fun.png",
  "/Pooltabel with Robert.png",
  "/pooltable.png",
  "/Rooms 0.png",
  "/Rooms 1.png",
  "/Rooms 2.png",
  "/Rooms 3.png",
  "/Rooms 4.png",
  "/Rooms 5.png",
  "/Rooms 6.png",
  "/Rooms 7.png",
  "/Rooms 8.png",
  "/Rooms 9.png",
  "/Rooms 10.png",
  "/Rooms 11.png",
  "/Rooms 12.png",
  "/Rooms 13.png",
  "/Rooms 14.png",
  "/Rooms 15.png",
  "/Rooms 16.png",
  "/Rooms 17.png",
  "/School.band.jpeg",
  "/School.png",
  "/speech.jpeg",
  "/swimming (AI1).png",
  "/swimming (AI2).png",
  "/swimming pool 1.png",
  "/swimming pool 2.png",
  "/swimming pool 3.png",
  "/swimming pool 5.png",
  "/swimming pool 6.png",
  "/swimmingpool at sunset.png",
  "/Ugandan children.png",
  "/upper rooms (AI).png",
  "/volleyball.png",
  "/volleyball2.png",
  "/wedding.png",
  "/wedding2.png",
];

export default function GalleryPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [shuffledImages, setShuffledImages] = useState(galleryImages);

  useEffect(() => {
    const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".ikos-fade-up");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Gallery Grid */}
      <section className="py-20 lg:py-32 bg-sand-50">
        <div className="container-ikos">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {shuffledImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="break-inside-avoid mb-4 group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
