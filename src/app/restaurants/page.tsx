"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const restaurants = [
  {
    name: "Anaya",
    cuisine: "Mediterranean",
    image: "https://images.unsplash.com/photo-1414235077116-281a6c4d7e3e?q=80&w=800",
    href: "/restaurants/anaya",
  },
  {
    name: "Fresco",
    cuisine: "Italian",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=800",
    href: "/restaurants/fresco",
  },
  {
    name: "Flavors",
    cuisine: "Asian",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800",
    href: "/restaurants/flavors",
  },
  {
    name: "Oliva",
    cuisine: "Greek",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    href: "/restaurants/oliva",
  },
  {
    name: "Provence",
    cuisine: "French",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
    href: "/restaurants/provence",
  },
  {
    name: "Beach Club",
    cuisine: "Casual Dining",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=800",
    href: "/restaurants/beach-club",
  },
];

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-sand-50">
        <div className="container-ikos text-center">
          <h1 className="text-4xl lg:text-4xl font-thin text-charcoal-200 mb-4 uppercase tracking-wide">
            Restaurants & Bars
          </h1>
          <p className="text-lg text-charcoal-100 max-w-3xl mx-auto">
            Discover world-class dining experiences at Coconut Beach
          </p>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-20 lg:py-32 bg-sand-50">
        <div className="container-ikos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-light text-charcoal-200 mb-2 uppercase">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-charcoal-100 mb-6">{restaurant.cuisine}</p>
                  <div className="mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-charcoal-200 text-charcoal-200 hover:bg-charcoal-200 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider rounded-[3px]"
                    >
                      <Link href={restaurant.href}>EXPLORE</Link>
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

