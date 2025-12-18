"use client";

import { useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Home() {
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
            backgroundImage: "url('/Coconut_1.18.1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end container-ikos pb-32 lg:pb-40">
          <h1 className="text-4xl lg:text-4xl font-thin text-white mb-4 animate-fade-in uppercase tracking-wide">
            COCONUT BEACH
          </h1>
          <p className="text-lg lg:text-lg font-light text-white mb-8 animate-fade-in uppercase tracking-wider">
            PARADISE ON LAKE VICTORIA
          </p>
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
            A world of
          </h2>
          <h2 className="text-3xl lg:text-4xl font-thin text-charcoal-200 mb-8 ikos-fade-up uppercase">
            cosmopolitan charm
          </h2>
          <p className="text-base text-charcoal-100 max-w-2xl mx-auto ikos-fade-up">
            Immense national parks, endless stretches of sun-kissed sands, and a scattering of
            quaint whitewashed villages await on the glamorous Costa del Sol.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full">
        <div className="relative h-[60vh] lg:h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080"
            alt="Beach restaurant"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Sophistication Section */}
      <section className="py-20 lg:py-32">
        <div className="container-ikos">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="ikos-fade-up">
              <h2 className="text-2xl lg:text-xl font-light text-charcoal-200 mb-6 uppercase">
                Sophistication and Spanish style
              </h2>
              <p className="text-base text-charcoal-100 mb-6">
                Stroll palm-dotted gardens that dip down to the water and discover the warmth of
                the Mediterranean lapping against the Spanish sands. Tucked between mountains and
                sea, Coconut Beach invites you into a world of style, where everything is
                included, and the choice is always yours.
              </p>
            </div>
            <div className="ikos-fade-up">
              <div className="relative h-[500px] lg:h-[600px]">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1887"
                  alt="Resort view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms CTA Section */}
      <section className="py-20 bg-sand-100 text-center">
        <div className="container-ikos max-w-3xl ikos-fade-up">
          <h2 className="text-2xl lg:text-xl font-light text-charcoal-200 mb-8 uppercase">
            Discover your perfect room
            <br />
            at Coconut Beach
          </h2>
          <Button
            asChild
            className="bg-transparent border border-charcoal-200 text-charcoal-200 hover:bg-charcoal-200 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider px-8"
          >
            <Link href="/accommodation">DISCOVER ALL ROOMS, SUITES & VILLAS</Link>
          </Button>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-ikos max-w-4xl text-center mb-16">
          <h2 className="text-2xl lg:text-xl font-light text-charcoal-200 mb-6 ikos-fade-up uppercase">
            Restaurants and Bars
          </h2>
          <p className="text-base text-charcoal-100 ikos-fade-up">
            Savour the fabulous flavours of menus created by Michelin-starred chefs at Coconut
            Beach's nine restaurants, offering unique Mediterranean delicacies, Asian flavours,
            French and Italian cuisine and Spanish and Greek gastronomic delights.
          </p>
          <Button
            asChild
            className="mt-8 bg-transparent border border-charcoal-200 text-charcoal-200 hover:bg-charcoal-200 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider px-8"
          >
            <Link href="/restaurants">Explore all restaurants and bars</Link>
          </Button>
        </div>

        {/* Restaurant Images Grid */}
        <div className="container-ikos">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative h-64 lg:h-80 overflow-hidden ikos-fade-up group">
                <img
                  src={`https://images.unsplash.com/photo-${
                    1414235077116 + i * 1000000
                  }-281a6c4d7e3e?q=80&w=800`}
                  alt={`Restaurant ${i}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pools and Beaches Section */}
      <section className="py-20 lg:py-32 bg-sand-50">
        <div className="container-ikos max-w-4xl text-center mb-12">
          <h2 className="text-2xl lg:text-xl font-light text-charcoal-200 mb-6 ikos-fade-up uppercase">
            Pools and Beaches
          </h2>
          <p className="text-base text-charcoal-100 ikos-fade-up">
            Discover blissful afternoons enjoying the cyan water and sands on our exclusively
            serviced beach, soaking up the warm Spanish sun in 21 acres of verdant landscaped
            gardens, or cooling off in one of the nine indoor & outdoor swimming pools.
          </p>
        </div>

        <div className="container-ikos">
          <div className="relative h-[60vh] lg:h-[70vh] ikos-fade-up">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080"
              alt="Pool area"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-ikos max-w-4xl text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-thin text-charcoal-200 mb-4 ikos-fade-up">
            <span className="block">A world of</span>
            <span className="block">unforgettable</span>
            <span className="block">experiences</span>
          </h2>
          <p className="text-base text-charcoal-100 ikos-fade-up">
            Settled on the shores of the Spanish Mediterranean, Coconut Beach offers a world of
            experiences for guests of all ages.
          </p>
        </div>

        <div className="container-ikos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Activities", image: "photo-1476480862126-209bfaa8edc8" },
              { title: "Kids", image: "photo-1503454537195-1dcabb73ffb9" },
              { title: "Spa", image: "photo-1540555700478-4be289fbecef" },
              { title: "Entertainment", image: "photo-1470229722913-7c0e2dbbafd3" },
            ].map((item, i) => (
              <Card
                key={i}
                className="group overflow-hidden border-0 shadow-none bg-transparent cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${item.image}?q=80&w=800`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-light text-white uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 lg:py-32 bg-sand-100">
        <div className="container-ikos max-w-4xl text-center">
          <blockquote className="ikos-fade-up">
            <p className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-8 italic">
              "We are enjoying the last day of our third stay at Coconut Beach, and once again we
              have had the most amazing holiday... You all truly elevated our stay!"
            </p>
            <footer className="text-sm text-charcoal-100">
              Guest Review on TripAdvisor, 2025
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Destination Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-ikos">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] ikos-fade-up">
              <img
                src="https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070"
                alt="Marbella"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ikos-fade-up bg-sand-100 p-12">
              <h2 className="text-2xl lg:text-xl font-light text-charcoal-200 mb-6 uppercase">
                Destination Marbella-Estepona
              </h2>
              <p className="text-base text-charcoal-100 mb-8">
                Andalusia enjoys a rich history, with Moorish culture influencing everything from
                the architecture to the rich cuisine. Indulge in the exclusive charm of Marbella
                and the historic attractions of Estepona.
              </p>
              <Button
                asChild
                className="bg-sand-500 text-white hover:bg-sand-400 transition-all duration-300 uppercase text-sm tracking-wider"
              >
                <Link href="/destination">Explore Marbella-Estepona</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Location Section */}
      <section className="py-20 lg:py-32 bg-sand-50">
        <div className="container-ikos max-w-4xl text-center">
          <h2 className="text-2xl lg:text-xl font-light text-charcoal-200 mb-6 ikos-fade-up uppercase">
            Resort Location
          </h2>
          <p className="text-base text-charcoal-100 mb-8 ikos-fade-up">
            Coconut Beach is located in Estepona, on Spain's Costa del Sol. Close to Marbella,
            it's less than one hour from Malaga airport.
          </p>
          <Button
            asChild
            className="bg-transparent border border-charcoal-200 text-charcoal-200 hover:bg-charcoal-200 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider px-8"
          >
            <Link href="#map">Getting Here</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
