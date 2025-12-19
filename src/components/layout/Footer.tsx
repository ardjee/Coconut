import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

const footerLinks = [
  { name: "Contact", href: "/contact" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Weddings", href: "/weddings" },
  { name: "Careers", href: "/careers" },
  {
    name: "Legal",
    href: "#",
    submenu: [
      { name: "Disclaimer", href: "/legal/disclaimer" },
      { name: "T&Cs", href: "/legal/terms" },
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Cookies Policy", href: "/legal/cookies" },
    ],
  },
  { name: "Accessibility", href: "/accessibility" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-200 text-white">
      {/* Newsletter Section */}
      <div className="bg-sand-300 py-16">
        <div className="container-ikos">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base text-charcoal-100">
              Whether you are already a guest at our resorts or simply planning your stay ahead,
              this app will help you explore all Coconut Beach Resorts and destinations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container-ikos">
          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-8">
            {footerLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-xs uppercase tracking-wider hover:text-sand-300 transition-colors relative"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
                {link.submenu && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-sm shadow-lg py-2 px-4 min-w-[200px]">
                      {link.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block py-2 text-xs text-charcoal-200 hover:text-charcoal-100 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Social Media */}
          <div className="flex justify-center gap-4 mb-8">
            <Link
              href="https://www.instagram.com/ikosresorts/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.facebook.com/ikosresorts"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.youtube.com/user/ikosresortsofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-white/70">© 2025 Coconut Beach Resorts</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
