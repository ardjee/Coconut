import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COCONUT_EMAIL_MAILTO, COCONUT_WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact | Coconut Beach",
  description:
    "Contact Coconut Beach to reserve your stay. We are happy to help you plan the perfect getaway on Lake Victoria.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="flex-1 flex items-center justify-center py-20 lg:py-32">
          <div className="container-ikos max-w-3xl w-full text-center px-4">
            <h1 className="text-3xl lg:text-4xl font-thin text-charcoal-200 mb-6 uppercase tracking-wide">
              Ready to Book?
            </h1>
            <p className="text-base text-charcoal-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us to reserve your stay at Coconut Beach. We are happy to
              help you plan the perfect getaway on Lake Victoria.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={COCONUT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium min-h-11 px-8 py-3 bg-charcoal-200 text-white hover:bg-charcoal-100 transition-all duration-300 uppercase text-sm tracking-wider rounded-[3px] w-full sm:w-auto"
              >
                WhatsApp
              </a>
              <a
                href={COCONUT_EMAIL_MAILTO}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium min-h-11 px-8 py-3 bg-white border border-charcoal-200 text-charcoal-200 hover:bg-charcoal-200 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider rounded-[3px] w-full sm:w-auto"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
