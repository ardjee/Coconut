"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const restaurants = [
  {
    name: "Fish & Chips",
    cuisine: "Seafood",
    image: "/food (AI1).png",
    href: "/restaurants/fish-and-chips",
  },
  {
    name: "Chicken Diner",
    cuisine: "American",
    image: "/food (AI2).png",
    href: "/restaurants/chicken-diner",
  },
  {
    name: "Pancakes",
    cuisine: "Ugandan Style",
    image: "/food (AI3).png",
    href: "/restaurants/pancakes",
  },
  {
    name: "Pancakes",
    cuisine: "American",
    image: "/Food (AI4).png",
    href: "/restaurants/pancakes-american",
  },
  {
    name: "Fruit Platter",
    cuisine: "Ugandan Fruit",
    image: "/food (AI5).png",
    href: "/restaurants/fruit-platter",
  },
  {
    name: "Eggs & Fruit",
    cuisine: "Breakfast",
    image: "/food (AI6).png",
    href: "/restaurants/eggs-and-fruit",
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
            Enjoy a unique dining experience with our diverse menu made from local ingredients
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

