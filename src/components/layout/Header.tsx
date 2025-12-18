"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigation = [
  {
    name: "The concept",
    href: "/concept",
    submenu: [
      { name: "Unconditional Luxury", href: "/unconditional-luxury" },
      { name: "No.1 IN THE WORLD", href: "/best-resort" },
      { name: "Experiences", href: "/experiences" },
      { name: "Sustainability", href: "/sustainability" },
    ],
  },
  {
    name: "Accommodation",
    href: "/resorts",
    submenu: [
      { name: "All Resorts", href: "/resorts" },
      { name: "Coconut Beach", href: "/", location: "Marbella-Estepona, Spain" },
    ],
  },
  { name: "Activities", href: "/deluxe-collection" },
  { name: "Services", href: "/whats-included" },
  {
    name: "Offers",
    href: "/offers",
    submenu: [
      { name: "All Offers", href: "/offers" },
      { name: "Special Offers", href: "/offers/special" },
      { name: "First Child Free", href: "/offers/first-child-free" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header - Sticky */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out hidden lg:block ${
          isScrolled
            ? "bg-white shadow-sm"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container-ikos">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-2xl font-light tracking-wider text-charcoal-200">
                Coconut Beach
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-sm uppercase text-charcoal-200 hover:text-charcoal-100 transition-colors relative py-2"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-charcoal-200 transition-all duration-300 group-hover:w-full" />
                  </Link>
                  
                  {item.submenu && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white/95 backdrop-blur-sm shadow-lg py-3 px-8 min-w-[280px]">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block py-3 text-sm text-charcoal-200 hover:text-charcoal-100 border-b border-sand-200 last:border-0 transition-colors"
                          >
                            {subitem.name}
                            {"location" in subitem && (
                              <span className="block text-xs font-light mt-1 normal-case">
                                {subitem.location}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Book Now Button */}
            <Button
              asChild
              className="bg-transparent border border-charcoal-200 text-charcoal-200 hover:bg-charcoal-200 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider px-6 rounded-[3px]"
            >
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm lg:hidden">
        <div className="flex items-center justify-between h-20 px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-sm uppercase text-charcoal-200 py-2"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block text-sm text-charcoal-100 py-1"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <div className="text-xl font-light tracking-wider text-charcoal-200">
              Coconut Beach
            </div>
          </Link>

          <Button
            asChild
            size="sm"
            className="bg-transparent border border-charcoal-200 text-charcoal-200 hover:bg-charcoal-200 hover:text-white uppercase text-xs rounded-[3px]"
          >
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </header>

      {/* Transparent Header Overlay (for hero section) */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none lg:block hidden">
        <div className={`container-ikos transition-opacity duration-1000 ${isScrolled ? "opacity-0" : "opacity-100 animate-fade-in"}`}>
          <div className="flex items-center justify-between h-20 pt-4">
            <Link href="/" className="pointer-events-auto">
              <div className="text-2xl font-light tracking-wider text-white">
                Coconut Beach
              </div>
            </Link>
            <Button
              asChild
              className="pointer-events-auto bg-transparent border border-white text-white hover:bg-white hover:text-charcoal-200 transition-all duration-300 uppercase text-sm tracking-wider px-6 rounded-[3px]"
            >
              <Link href="/book">BOOK NOW</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
