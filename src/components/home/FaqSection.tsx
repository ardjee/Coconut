"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Answers double as content targeting local + informational search queries
// ("resort in Majanji", "can you swim in Lake Victoria", "how to get to Busia").
// Keep the visible text and the JSON-LD identical — Google requires a match.
const faqs = [
  {
    q: "Where is Coconut Beach located?",
    a: "Coconut Beach is a lakeside resort in Majanji, in the Busia District of eastern Uganda, right on the shores of Lake Victoria. We are about 9 km south of Busia town and close to the Kenyan border — a quiet corner of the lake, away from the busier resorts around Entebbe and Kampala.",
  },
  {
    q: "How do I get to Coconut Beach?",
    a: "The resort is reached by road. From Busia town it is a short drive south to Majanji; from Kampala it is roughly a half-day drive east through Jinja and Iganga. Free private parking is available on site, and our team is happy to help with directions when you book.",
  },
  {
    q: "Is there a swimming pool, and can you swim in Lake Victoria?",
    a: "Yes — we have a multi-depth swimming pool that is suitable for all ages and included for hotel guests. For safety we encourage guests to swim in the pool rather than directly in the lake, and our team is glad to point you to the best spots to relax by the water.",
  },
  {
    q: "What activities are available at the resort?",
    a: "There is plenty to do: boat cruises on Lake Victoria, beach volleyball, boda boda tours through the local villages, massage and wellness treatments, a pool table, big-screen DSTV and fishing. Many activities are free for guests; others are modestly priced.",
  },
  {
    q: "How much does it cost to stay?",
    a: "We offer dual pricing for East African residents and international visitors. Rooms start from 90,000 UGX (lower rooms) and 120,000 UGX (upper rooms with a lake-view balcony) per night, and camping starts from 30,000 UGX. All room prices include VAT with no extra surcharges.",
  },
  {
    q: "How do I book a stay?",
    a: "Booking is direct and simple — message us on WhatsApp or call +256 774 192951, or email info@coconutbeach.ug. There are no booking fees. See our Rates & Booking page for full pricing.",
  },
  {
    q: "Can I host a wedding or event at Coconut Beach?",
    a: "Yes. Coconut Beach is a lakeside venue for weddings, company retreats, birthday parties, ceremonies and workshops, with accommodation for your guests on site. Get in touch and we will help you plan it.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FaqSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-ikos max-w-3xl">
        <h2 className="text-2xl lg:text-3xl font-thin text-charcoal-200 mb-10 text-center uppercase tracking-wide ikos-fade-up">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full ikos-fade-up">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-base lg:text-lg font-light text-charcoal-200">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-charcoal-100 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
