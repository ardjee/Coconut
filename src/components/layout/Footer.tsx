import Link from "next/link";

const footerLinks = [
  { name: "Contact", href: "/contact" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
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
              </div>
            ))}
          </nav>



          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-white/70">© 2025 Coconut Beach Resorts</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
