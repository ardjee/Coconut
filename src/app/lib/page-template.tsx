"use client";

import { useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface PageTemplateProps {
  category: string;
  title: string;
  heroImage?: string;
  heroImagePosition?: "top" | "center" | "bottom";
  description: string;
  details?: {
    subtitle?: string;
    info?: string;
    hours?: string;
  };
}

export function PageTemplate({
  category,
  title,
  heroImage = "/Coconut_1.18.1.jpg",
  heroImagePosition = "center",
  description,
  details,
}: PageTemplateProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
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

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundPosition: heroImagePosition === "top" ? "top" : heroImagePosition === "bottom" ? "bottom" : "center",
          }}
        />

        <div className="relative h-full flex flex-col justify-end container-ikos pb-32 lg:pb-40">
          <h2 className="text-lg lg:text-xl font-light text-white mb-4 uppercase tracking-wider">
            {category}
          </h2>
          <h1 className="text-4xl lg:text-5xl font-thin text-white mb-4 uppercase tracking-wide">
            {title}
          </h1>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white">
            <span className="text-xs uppercase tracking-widest mb-2">Explore</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Section Header */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-ikos max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-thin text-charcoal-200 mb-8 ikos-fade-up uppercase">
            {title}
          </h2>
          <p className="text-base text-charcoal-100 max-w-2xl mx-auto ikos-fade-up">
            {description}
          </p>
        </div>
      </section>

      {/* Details Section */}
      {details && (
        <section className="py-20 lg:py-32 bg-gradient-to-r from-sand-50 to-white">
          <div className="container-ikos">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                {details.subtitle && (
                  <h3 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-4 uppercase">
                    {details.subtitle}
                  </h3>
                )}
                {details.info && (
                  <h4 className="text-lg lg:text-xl font-light text-charcoal-100 mb-6">
                    {details.info}
                  </h4>
                )}
                {details.hours && (
                  <div className="mb-6">
                    <div className="text-sm text-charcoal-100 mb-2">
                      <strong>Hours:</strong> {details.hours}
                    </div>
                  </div>
                )}
                <Button
                  asChild
                  className="bg-transparent border border-charcoal-200 text-charcoal-200 hover:bg-charcoal-200 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider rounded-[3px]"
                >
                  <Link href="/book">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery Section */}
      <section className="py-20 lg:py-32 bg-sand-50">
        <div className="container-ikos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "/Coconut_1.18.1.jpg",
              "/Coconut_1.17.1.jpg",
              "/Coconut_1.20.1.jpg",
              "/Coconut_1.25.1.jpg",
            ].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-lg ikos-fade-up">
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

