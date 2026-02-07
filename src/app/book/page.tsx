"use client";

import { useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const accommodation = [
  {
    name: "Upper Rooms",
    description: "King-sized bed, en-suite bathroom, fan, balcony with lake view, daily cleaning",
    eaPrice: "120,000 UGX",
    foreignerPrice: "$65",
    unit: "per night",
    href: "/accommodation/upper-rooms",
  },
  {
    name: "Lower Rooms",
    description: "Comfortable ground-floor room with en-suite bathroom and garden access",
    eaPrice: "90,000 UGX",
    foreignerPrice: "$55",
    unit: "per night",
    href: "/accommodation/lower-rooms",
  },
  {
    name: "Camping",
    description: "Outdoor camping experience close to nature with access to resort facilities",
    eaPrice: "40,000 UGX",
    foreignerPrice: "$20",
    unit: "per night",
    href: "/accommodation/camping",
  },
  {
    name: "Camping (Bring your own tent)",
    description: "Outdoor camping experience close to nature with access to resort facilities",
    eaPrice: "30,000 UGX",
    foreignerPrice: "$15",
    unit: "per night",
    href: "/accommodation/camping",
  },
  {
    name: "Group Booking",
    description: "Discounted rates for groups, ideal for retreats, workshops and celebrations",
    eaPrice: "Contact us",
    foreignerPrice: "Contact us",
    unit: "per person / night",
    href: "/accommodation/groups",
  },
];

const activities = [
  {
    name: "Boat Cruise",
    description: "Scenic cruise on Lake Victoria with wildlife viewing. Min 4 people, cost per 30 minutes.",
    eaPrice: "10,000 UGX",
    foreignerPrice: "$8",
    href: "/activities/boat-cruise",
  },
  {
    name: "Massage & Wellness",
    description: "Relaxing spa treatments in a tranquil lakeside setting. Price for 30 min. relaxation massage.",
    eaPrice: "50,000 UGX",
    foreignerPrice: "$30",
    href: "/activities/massage-wellness",
  },
  {
    name: "Boda Boda Drives",
    description: "Guided motorcycle tour through local villages and countryside. Max 2 hour tour.",
    eaPrice: "10,000 UGX",
    foreignerPrice: "$20",
    href: "/activities/boda-boda-drives",
  },
  {
    name: "Local School Visit",
    description: "Cultural experience visiting a nearby community school",
    eaPrice: "10,000 UGX",
    foreignerPrice: "$8",
    href: "/activities/local-school-visit",
  },
  {
    name: "Beach Volleyball",
    description: "Join a game on our lakeside sand court",
    eaPrice: "Free",
    foreignerPrice: "Free",
    href: "/activities/beach-volleyball",
  },
  {
    name: "Pool Table",
    description: "Billiards in the resort lounge area",
    eaPrice: "2,000 UGX",
    foreignerPrice: "2,000 UGX",
    href: "/activities/pool-table",
  },
  {
    name: "Swimming Visitors",
    description: "Multi-depth pool suitable for all ages",
    eaPrice: "10.000 UGX adult, 5.000 UGX child",
    foreignerPrice: "Included",
    href: "/activities/swimming",
  },
  {
    name: "Swimming Guests",
    description: "Multi-depth pool suitable for all ages.",
    eaPrice: "Included in room rates",
    foreignerPrice: "Included in room rates",
    href: "/activities/swimming",
  },
  {
    name: "Large Screen DSTV",
    description: "Watch live sports and entertainment on the big screen",
    eaPrice: "Free",
    foreignerPrice: "Free",
    href: "/activities/large-screen-dstv",
  },
];

const services = [
  {
    name: "Restaurant",
    description: "Local and international cuisine with lakeside dining",
    eaPrice: "From 15,000 UGX",
    foreignerPrice: "From 15,000 UGX",
    href: "/restaurants",
  },
  {
    name: "Bar",
    description: "Cocktails, local beers, wines, and soft drinks",
    eaPrice: "From 3,000 UGX",
    foreignerPrice: "From 3,000 UGX",
    href: "/services/bar",
  },
  {
    name: "Laundry",
    description: "Same-day laundry and ironing service. Price per item.",
    eaPrice: "1,000 UGX",
    foreignerPrice: "$0.5",
    href: "/services/laundry",
  },
  {
    name: "Tropical plants & trees",
    description: "Buy your little slice of paradise to turn your own home into a tropical paradise",
    eaPrice: "To be discussed",
    foreignerPrice: "To be discussed",
  },
];

interface PricingItem {
  name: string;
  description: string;
  eaPrice: string;
  foreignerPrice: string;
  unit?: string;
  href?: string;
}

function PricingTable({
  items,
  showLinks = true,
}: {
  items: PricingItem[];
  showLinks?: boolean;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left table-fixed">
        <thead>
          <tr className="border-b border-sand-300">
            <th className="py-4 pl-4 pr-4 text-xs uppercase tracking-wider text-charcoal-100 font-medium w-[50%] md:w-[20%]">
              Item
            </th>
            <th className="py-4 pr-4 text-xs uppercase tracking-wider text-charcoal-100 font-medium hidden md:table-cell md:w-[50%]">
              Description
            </th>
            <th className="py-4 pr-4 text-xs uppercase tracking-wider text-charcoal-100 font-medium text-right whitespace-nowrap">
              East African
            </th>
            <th className="py-4 pr-4 text-xs uppercase tracking-wider text-charcoal-100 font-medium text-right whitespace-nowrap">
              Foreigner
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr
              key={item.name}
              className={`border-b border-sand-200 transition-colors hover:bg-sand-50 ${
                i % 2 === 0 ? "bg-white" : "bg-sand-50/50"
              }`}
            >
              <td className="py-5 pl-4 pr-4">
                {showLinks && item.href ? (
                  <Link
                    href={item.href}
                    className="text-sm font-normal text-charcoal-200 hover:text-ocean transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-sm font-normal text-charcoal-200">
                    {item.name}
                  </span>
                )}
                <span className="block md:hidden text-xs text-charcoal-100 mt-1">
                  {item.description}
                </span>
                {item.unit && (
                  <span className="block text-xs text-charcoal-50 mt-0.5">
                    {item.unit}
                  </span>
                )}
              </td>
              <td className="py-5 pr-4 text-sm text-charcoal-100 hidden md:table-cell">
                {item.description}
              </td>
              <td className="py-5 pr-4 text-sm text-charcoal-200 text-right font-normal">
                {item.eaPrice}
              </td>
              <td className="py-5 pr-4 text-sm text-charcoal-200 text-right font-normal">
                {item.foreignerPrice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BookPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const nextSectionRef = useRef<HTMLElement | null>(null);

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

  const handleExploreClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
      <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Coconut_1.26.1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end container-ikos pb-24 lg:pb-32">
          <h2 className="text-lg lg:text-xl font-light text-white mb-4 uppercase tracking-wider">
            Rates & Booking
          </h2>
          <h1 className="text-4xl lg:text-5xl font-thin text-white mb-4 uppercase tracking-wide">
            Plan Your Stay
          </h1>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div
            className="flex flex-col items-center text-white cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleExploreClick}
          >
            <span className="text-xs uppercase tracking-widest mb-2">
              Explore
            </span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section ref={nextSectionRef} className="py-20 lg:py-32 bg-white">
        <div className="container-ikos max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-thin text-charcoal-200 mb-8 ikos-fade-up uppercase">
            Rates & Pricing
          </h2>
          <p className="text-base text-charcoal-100 max-w-2xl mx-auto ikos-fade-up">
            Coconut Beach offers competitive dual pricing for East African
            residents and international visitors. All prices are per person
            unless stated otherwise. To book, please contact us directly via{" "}
            <a href="https://wa.me/256774192951" target="_blank" rel="noopener noreferrer" className="underline hover:text-ocean transition-colors">WhatsApp</a> or{" "}
            <a href="tel:+256774192951" className="underline hover:text-ocean transition-colors">Phone</a>.
          </p>
        </div>
      </section>

      {/* Accommodation Table */}
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-ikos max-w-5xl">
          <div className="ikos-fade-up">
            <h3 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-2 uppercase tracking-wide">
              Accommodation
            </h3>
            <p className="text-sm text-charcoal-100 mb-8">
              Choose from our range of rooms and outdoor stays. All prices are room prices based on max 2 occupants and VAT included. No extra surcharges.
            </p>
            <PricingTable items={accommodation} />
          </div>
        </div>
      </section>

      {/* Activities Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-ikos max-w-5xl">
          <div className="ikos-fade-up">
            <h3 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-2 uppercase tracking-wide">
              Activities
            </h3>
            <p className="text-sm text-charcoal-100 mb-8">
              Experiences available during your stay. All prices are per person.
            </p>
            <PricingTable items={activities} />
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-ikos max-w-5xl">
          <div className="ikos-fade-up">
            <h3 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-2 uppercase tracking-wide">
              Services
            </h3>
            <p className="text-sm text-charcoal-100 mb-8">
              Facilities and services at the resort
            </p>
            <PricingTable items={services} />
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-ikos max-w-3xl text-center">
          <div className="ikos-fade-up">
            <h3 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-6 uppercase tracking-wide">
              Ready to Book?
            </h3>
            <p className="text-base text-charcoal-100 mb-10">
              Contact us to reserve your stay at Coconut Beach. We are happy to
              help you plan the perfect getaway on Lake Victoria.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/256700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium h-11 px-8 bg-charcoal-200 text-white hover:bg-charcoal-100 transition-all duration-300 uppercase text-sm tracking-wider rounded-[3px]"
              >
                WhatsApp
              </a>
              <a
                href="mailto:info@coconutbeach.ug"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium h-11 px-8 bg-transparent border border-charcoal-200 text-charcoal-200 hover:bg-charcoal-200 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider rounded-[3px]"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
