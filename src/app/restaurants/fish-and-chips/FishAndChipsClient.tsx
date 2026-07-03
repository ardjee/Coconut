"use client";

import { useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function FishAndChipsPage() {
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
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/food (AI1).png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end container-ikos pb-32 lg:pb-40">
          <h2 className="text-lg lg:text-xl font-light text-white mb-4 uppercase tracking-wider">
            Restaurants & Bars
          </h2>
          <h1 className="text-4xl lg:text-5xl font-thin text-white mb-4 uppercase tracking-wide">
            Fish & Chips
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
          <h2 className="text-3xl lg:text-4xl font-thin text-charcoal-200 mb-4 ikos-fade-up uppercase">
            Fresh Tilapia
          </h2>
          <h2 className="text-3xl lg:text-4xl font-thin text-charcoal-200 mb-8 ikos-fade-up uppercase">
            Fish & Chips
          </h2>
          <p className="text-base text-charcoal-100 max-w-2xl mx-auto ikos-fade-up">
            Experience our signature Fish & Chips featuring locally sourced tilapia, perfectly fried to golden perfection. Served with hand-cut chips and our special tartar sauce, this classic dish gets a tropical twist at Coconut Beach.
          </p>
        </div>
      </section>

      {/* Restaurant Details Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-sand-50 to-white">
        <div className="container-ikos">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/food (AI1).png"
                alt="Fish & Chips"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-4 uppercase">
                Seafood
              </h3>
              <h4 className="text-lg lg:text-xl font-light text-charcoal-100 mb-6">
                Beachfront | Al Fresco | Family Friendly
              </h4>
              <div className="mb-6">
                <div className="text-sm text-charcoal-100 mb-2">
                  <strong>Lunch:</strong> 12:00-15:00
                </div>
                <div className="text-sm text-charcoal-100 mb-2">
                  <strong>Dinner:</strong> 18:00-21:00
                </div>
              </div>
              <Button
                asChild
                className="bg-charcoal-200 text-white hover:bg-charcoal-100 transition-all duration-300 uppercase text-sm tracking-wider"
              >
                <Link href="/restaurants">
                  View All Restaurants
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-ikos max-w-4xl text-center">
          <h2 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-6 ikos-fade-up uppercase">
            Our Specialty
          </h2>
          <p className="text-base text-charcoal-100 ikos-fade-up">
            We source our tilapia fresh from local fishermen daily, ensuring the highest quality and supporting the local community. Our batter is made with secret family recipe, creating the perfect crispy exterior while keeping the fish tender and moist.
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 lg:py-32 bg-sand-50">
        <div className="container-ikos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "/food (AI1).png",
              "/food (AI1).png",
              "/food (AI1).png",
              "/food (AI1).png",
            ].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Fish & Chips ${i+1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Information */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-ikos max-w-4xl text-center">
          <h2 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-8 ikos-fade-up uppercase">
            Useful Information
          </h2>
          <p className="text-base text-charcoal-100 mb-6 ikos-fade-up">
            Enjoy our Fish & Chips restaurant with stunning beach views. Walk-ins are welcome during lunch, but we recommend reservations for dinner. We offer a children's menu and can accommodate dietary restrictions upon request.
          </p>
          <p className="text-base text-charcoal-100 ikos-fade-up">
            Family Friendly | Beachfront Dining
          </p>
        </div>
      </section>

      {/* Other Restaurants */}
      <section className="py-20 lg:py-32 bg-sand-50">
        <div className="container-ikos">
          <h2 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-12 text-center uppercase">
            Other Restaurants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Fresco", cuisine: "Italian", link: "/restaurants/fresco", image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=800", description: "Authentic Italian cuisine with fresh pasta and wood-fired pizzas." },
              { name: "Flavors", cuisine: "Asian", link: "/restaurants/flavors", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800", description: "A fusion of Asian flavors from Thailand, China, and Japan." },
              { name: "Oliva", cuisine: "Greek", link: "/restaurants/oliva", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800", description: "Traditional Greek dishes with a modern twist." },
              { name: "Provence", cuisine: "French", link: "/restaurants/provence", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800", description: "Elegant French dining with seasonal ingredients." },
              { name: "Beach Club", cuisine: "Casual Dining", link: "/restaurants/beach-club", image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=800", description: "Relaxed beachfront dining with international cuisine." },
            ].map((restaurant) => (
              <div key={restaurant.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-sand-500 mb-2 uppercase tracking-wider">
                    {restaurant.cuisine}
                  </div>
                  <h3 className="text-xl font-thin text-charcoal-200 mb-4 uppercase">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-charcoal-100 mb-4 flex-grow">
                    {restaurant.description}
                  </p>
                  <div className="mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-charcoal-200 text-charcoal-200 hover:bg-charcoal-200 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider rounded-[3px]"
                    >
                      <Link href={restaurant.link}>
                        Explore
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
