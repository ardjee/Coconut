"use client";

import { useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function AnayaPage() {
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
            backgroundImage: "url('https://ikosresorts.com/wp-content/uploads/2022/09/Ikos-Andalusia-_-Anaya-Restaurant-Outdoor_2880x1570-1-scaled.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end container-ikos pb-32 lg:pb-40">
          <h2 className="text-lg lg:text-xl font-light text-white mb-4 uppercase tracking-wider">
            Restaurants & Bars
          </h2>
          <h1 className="text-4xl lg:text-5xl font-thin text-white mb-4 uppercase tracking-wide">
            Anaya
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
            An Asian culinary
          </h2>
          <h2 className="text-3xl lg:text-4xl font-thin text-charcoal-200 mb-8 ikos-fade-up uppercase">
            adventure
          </h2>
          <p className="text-base text-charcoal-100 max-w-2xl mx-auto ikos-fade-up">
            Á la carte creations inspired by the aromas of Asia take you on a culinary journey through Thailand, China, and India. Enjoy Anaya's elegant interiors or relax outdoors with a sea view and choose from an extensive menu bringing delicious Thai accents to European staples, marrying Asian flavours with Parisian finesse.
          </p>
        </div>
      </section>

      {/* Restaurant Details Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-sand-50 to-white">
        <div className="container-ikos">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://ikosresorts.com/wp-content/uploads/2022/09/Ikos-Resorts_Anaya-Restaurant-_2880x1920-_1_-scaled.webp"
                alt="Anaya Restaurant"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-4 uppercase">
                Asian
              </h3>
              <h4 className="text-lg lg:text-xl font-light text-charcoal-100 mb-6">
                Main Building | Al Fresco | Adults Area Available
              </h4>
              <div className="mb-6">
                <div className="text-sm text-charcoal-100 mb-2">
                  <strong>Dinner:</strong> 19:00-22:00
                </div>
              </div>
              <Button
                asChild
                className="bg-charcoal-200 text-white hover:bg-charcoal-100 transition-all duration-300 uppercase text-sm tracking-wider"
              >
                <Link href="https://ikosresorts.com/menus/IAN/IAN_Anaya_Dinner_EN_DE_FR.pdf" target="_blank">
                  View Menu
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-ikos max-w-4xl text-center">
          <h2 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-6 ikos-fade-up uppercase">
            Chef Thiou
          </h2>
          <p className="text-base text-charcoal-100 ikos-fade-up">
            Known as the Master of Asian and Thai cuisine, Michelin-star Chef Thiou expertly combines Asian influence and fresh European ingredients, flavouring her refined dishes with sharp spices and modern dressings. From her award-winning Parisian restaurant to Coconut Beach, Chef Thiou creates a one-of-a-kind dining experience.
          </p>
        </div>
      </section>

      {/* Chef Images Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-ikos max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ikosresorts.com/wp-content/uploads/2022/11/Ikos_Gastronomy22-1723_2880x1921-1-scaled.jpg"
                alt="Chef Thiou Food"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://ikosresorts.com/wp-content/uploads/2022/11/chef-thiou-555x555.jpg"
                alt="Chef Thiou"
                className="w-64 h-64 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 lg:py-32 bg-sand-50">
        <div className="container-ikos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://ikosresorts.com/wp-content/uploads/2022/11/Ikos_Gastronomy22-1214_2880x1880-1-scaled.jpg",
              "https://ikosresorts.com/wp-content/uploads/2022/11/Ikos_Gastronomy22-1712_2880x1921-1-scaled.jpg",
              "https://ikosresorts.com/wp-content/uploads/2022/11/Ikos_Gastronomy22-1720_2880x1921-1-scaled.jpg",
              "https://ikosresorts.com/wp-content/uploads/2022/11/Ikos_Gastronomy22-1708_2880x1921-1-scaled.jpg",
            ].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Anaya Restaurant ${i+1}`}
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
            Please note that a reservation is required for dinner. Prior to arrival, guests can pre-book up to 3 dinner reservations, whilst Deluxe guests can pre-book all dinner reservations in advance. All restaurants offer children's menus and freshly prepared baby food upon request. Menus and opening hours are subject to change. Entry to the restaurants with shorts and flip flops is not permitted during dinner service.
          </p>
          <p className="text-base text-charcoal-100 ikos-fade-up">
            Adults Area Available
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
              { name: "Chiringuito", cuisine: "Spanish", link: "/restaurants/chiringuito", image: "https://ikosresorts.com/wp-content/uploads/2023/01/Ikos-Andalusia-_-Chiringuito_14_1794_2880x1920-555x555.jpg", description: "Savour authentic Spanish cuisine at Chiringuito, an elegant take on the beloved Spanish beach restaurants that dot the coast. From light bites to traditional tapas and seafood affairs, enjoy a selection of the best that these Mediterranean waters have to offer." },
              { name: "Seasons", cuisine: "Asian-Mediterranean", link: "/restaurants/seasons", image: "https://ikosresorts.com/wp-content/uploads/2023/01/Ikos-Andalusia_Seasons_Terrace0990_2880x1920-555x555.jpg", description: "Enjoy Mediterranean dishes crafted with fresh ingredients and infused with Asian flavours in a sublime al fresco setting with sea views at Seasons. This à la carte dining experience features the finest seasonal produce and blends influences from both near and far." },
              { name: "Beach Club", cuisine: "International", link: "/restaurants/beach-club", image: "https://ikosresorts.com/wp-content/uploads/2022/11/Ikos-Andalusia-Beach-Club-Restaurant-Outdoor_2880x1573-1-1-555x555.jpg", description: "Offering al fresco dining and cocktails with a view, the Beach Club serves light snacks and lunch throughout the day, followed by an à la carte dinner." },
              { name: "Oliva", cuisine: "Spanish", link: "/restaurants/oliva", image: "https://ikosresorts.com/wp-content/uploads/2022/09/Ikos-Andalusia-_-Oliva-Restaurant-Indoor_2880x1734-1-555x555.jpg", description: "The traditional flavours of Spain are given a contemporary twist with this delightful à la carte menu, curated by two-Michelin-star chef Andoni Luis Aduriz." },
              { name: "Flavors", cuisine: "Mediterranean buffet", link: "/restaurants/flavors", image: "https://ikosresorts.com/wp-content/uploads/2022/09/Ikos-Andalusia-_-Flavors-Restaurant-Indoor_2880x1663-1-555x555.jpg", description: "Discover a world of choice at Flavors, where you will find international cuisine served as an elegant buffet. Mediterranean zest meets fresh, sun-soaked ingredients and worldly influences in a family-friendly setting." },
              { name: "Provence", cuisine: "French", link: "/restaurants/provence", image: "https://ikosresorts.com/wp-content/uploads/2022/11/Ikos-Andalusia-_-Provence-Restaurant-Outdoor_2880x1575-1-555x555.jpg", description: "Discover the exquisite cuisine of Southern France, served in elegant surrounds at this beautiful à la carte restaurant." },
              { name: "Fresco", cuisine: "Italian", link: "/restaurants/fresco", image: "https://ikosresorts.com/wp-content/uploads/2022/11/Ikos-Andalusia-_-Fresco-Indoor_2700x1722-1-555x555.jpg", description: "Guided by the genius of Michelin-starred chef Ettore Botrini, discover the exquisite culinary sensations of Italy. Fresco offers the finest à la carte dining, authentic Italian flavours and fresh local produce paired with perfect wines." },
              { name: "Ouzo", cuisine: "Greek", link: "/restaurants/ouzo", image: "https://ikosresorts.com/wp-content/uploads/2022/11/Ikos-Andalusia-Ouzo-Restaurant-Outdoor-1-555x555.jpg", description: "Enjoy rich Greek cuisine with a delightfully modern twist in a romantic open-air setting. A combination of Greek tradition with innovative techniques and delicious flavours." },
            ].map((restaurant) => (
              <div key={restaurant.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-sand-500 mb-2 uppercase tracking-wider">
                    {restaurant.cuisine}
                  </div>
                  <h3 className="text-xl font-thin text-charcoal-200 mb-4 uppercase">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-charcoal-100 mb-4">
                    {restaurant.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-charcoal-200 text-charcoal-200 hover:bg-charcoal-200 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider"
                  >
                    <Link href={restaurant.link}>
                      Explore
                    </Link>
                  </Button>
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