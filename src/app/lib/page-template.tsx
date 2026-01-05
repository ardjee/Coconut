"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface PageTemplateProps {
  category: string;
  title: string;
  heroImage?: string;
  heroImagePosition?: "top" | "center" | "bottom";
  detailsImage?: string;
  description: string;
  details?: {
    subtitle?: string;
    info?: string;
    hours?: string;
  };
  duplicateDetails?: boolean;
  details2?: {
    subtitle?: string;
    info?: string;
    hours?: string;
  };
  detailsImage2?: string;
  galleryImages?: string[];
  showGallery?: boolean;
}

export function PageTemplate({
  category,
  title,
  heroImage = "/Coconut_1.18.1.jpg",
  heroImagePosition = "center",
  detailsImage,
  description,
  details,
  duplicateDetails = false,
  details2,
  detailsImage2,
  galleryImages = [
    "/Coconut_1.18.1.jpg",
    "/Coconut_1.17.1.jpg",
    "/Coconut_1.20.1.jpg",
    "/Coconut_1.25.1.jpg",
  ],
  showGallery = true,
}: PageTemplateProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const nextSectionRef = useRef<HTMLElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleExploreClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

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
          <div 
            className="flex flex-col items-center text-white cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleExploreClick}
          >
            <span className="text-xs uppercase tracking-widest mb-2">Explore</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Section Header */}
      <section ref={nextSectionRef} className="py-20 lg:py-32 bg-white">
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
        <>
          <section className="py-20 lg:py-32 bg-gradient-to-r from-sand-50 to-white">
            <div className="container-ikos">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src={detailsImage || heroImage}
                    alt={title}
                    className="w-full h-96 object-contain object-center rounded-2xl shadow-lg"
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
          {duplicateDetails && (
            <section className="py-20 lg:py-32 bg-gradient-to-r from-sand-50 to-white">
              <div className="container-ikos">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <img
                      src={detailsImage2 || detailsImage || heroImage}
                      alt={title}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="order-1 lg:order-2 text-center lg:text-left">
                    {(details2?.subtitle || details.subtitle) && (
                      <h3 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-4 uppercase">
                        {details2?.subtitle || details.subtitle}
                      </h3>
                    )}
                    {(details2?.info || details.info) && (
                      <h4 className="text-lg lg:text-xl font-light text-charcoal-100 mb-6">
                        {details2?.info || details.info}
                      </h4>
                    )}
                    {(details2?.hours || details.hours) && (
                      <div className="mb-6">
                        <div className="text-sm text-charcoal-100 mb-2">
                          <strong>Hours:</strong> {details2?.hours || details.hours}
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
        </>
      )}

      {/* Image Gallery Carousel Section */}
      {showGallery && (
      <section className="py-20 lg:py-32 bg-sand-50">
        <div className="container-ikos">
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-charcoal-200 p-2 rounded-full transition-all duration-300 shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-charcoal-200 p-2 rounded-full transition-all duration-300 shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Carousel Container */}
            <div className="flex items-center justify-center gap-4 px-12">
              {/* Previous Image (Left) */}
              <div 
                key={`prev-${currentSlide}`}
                className="w-1/4 opacity-40 scale-90 transition-all duration-600 cursor-pointer hover:opacity-60 animate-fade-in rounded-2xl overflow-hidden"
                onClick={prevSlide}
              >
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <img
                    src={galleryImages[(currentSlide - 1 + galleryImages.length) % galleryImages.length]}
                    alt={`${title} ${(currentSlide - 1 + galleryImages.length) % galleryImages.length + 1}`}
                    className="w-full h-full object-cover transition-transform duration-600 rounded-2xl"
                  />
                </div>
              </div>

              {/* Current Image (Center) */}
              <div 
                key={`center-${currentSlide}`}
                className="w-1/2 transition-all duration-600 animate-fade-in"
              >
                <div className="relative group overflow-hidden rounded-2xl">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <img
                      src={galleryImages[currentSlide]}
                      alt={`${title} ${currentSlide + 1}`}
                      className="w-full h-full object-cover transition-transform duration-600 scale-105 animate-fade-in rounded-2xl"
                      style={{ animation: 'fadeIn 0.6s ease-out' }}
                    />
                  </div>
                </div>
              </div>

              {/* Next Image (Right) */}
              <div 
                key={`next-${currentSlide}`}
                className="w-1/4 opacity-40 scale-90 transition-all duration-600 cursor-pointer hover:opacity-60 animate-fade-in rounded-2xl overflow-hidden"
                onClick={nextSlide}
              >
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <img
                    src={galleryImages[(currentSlide + 1) % galleryImages.length]}
                    alt={`${title} ${(currentSlide + 1) % galleryImages.length + 1}`}
                    className="w-full h-full object-cover transition-transform duration-600 rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentSlide(i);
                      setTimeout(() => setIsAnimating(false), 600);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "bg-charcoal-200 w-8" : "bg-charcoal-200/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      <Footer />
    </div>
  );
}

