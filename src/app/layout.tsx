import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.coconutbeach.ug";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Coconut Beach — Paradise on Lake Victoria",
    template: "%s | Coconut Beach",
  },
  description:
    "Coconut Beach is a lakeside resort in Majanji, Uganda: rooms with lake view, camping, pool, restaurant, boat cruises, weddings and events on Lake Victoria.",
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "Coconut Beach",
    locale: "en_US",
    url: SITE_URL,
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: "Coconut Beach",
  description:
    "Lakeside beach resort on Lake Victoria with rooms, camping, pool, restaurant, bar and event venues.",
  url: SITE_URL,
  telephone: "+256774192951",
  email: "info@coconutbeach.ug",
  image: `${SITE_URL}/opengraph-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Majanji",
    addressRegion: "Busia District",
    addressCountry: "UG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 0.2502377,
    longitude: 33.9870324,
  },
  priceRange: "UGX 30,000 - 120,000 per night",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Swimming pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "Beach access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Camping", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
