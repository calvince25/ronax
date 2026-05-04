import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import FooterWrapper from "@/components/layout/FooterWrapper";
import WhatsappWrapper from "@/components/layout/WhatsappWrapper";

export const metadata: Metadata = {
  title: {
    default: "Revolution Tennis | Coach Ronax – Tennis Coaching in Nairobi",
    template: "%s | Revolution Tennis"
  },
  description: "Nairobi's leading tennis coaching hub. Private lessons, group classes, and junior programs with Coach Ronax at Aga Khan Sports Club, Public Service Club, and Karura Forest.",
  openGraph: {
    title: "Revolution Tennis | Coach Ronax",
    description: "Nairobi's #1 Tennis Coach — Train With Ronax",
    siteName: "Revolution Tennis",
    type: "website",
    locale: "en_KE",
    url: "https://www.revolutiontennis.co.ke",
  },
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  "name": "Revolution Tennis",
  "url": "https://www.revolutiontennis.co.ke",
  "telephone": "+254799756831",
  "email": "info@revolutiontennis.co.ke",
  "sport": "Tennis",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressCountry": "KE"
  },
  "location": [
    {
      "@type": "SportsActivityLocation",
      "name": "Aga Khan Sports Club",
      "address": "Parklands, Nairobi",
      "openingHours": "Mo-Su 06:30-20:30"
    },
    {
      "@type": "SportsActivityLocation",
      "name": "Public Service Club",
      "address": "Mara Road, Upper Hill, Nairobi",
      "openingHours": "Mo-Su 07:00-21:00"
    },
    {
      "@type": "SportsActivityLocation",
      "name": "Karura Forest Courts",
      "address": "Limuru Road Entrance, Karura, Nairobi",
      "openingHours": "Mo-Su 08:00-18:00"
    }
  ]
};

import { BookingProvider } from "@/context/BookingContext";
import BookingModal from "@/components/booking/BookingModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BookingProvider>
          <NavbarWrapper />
          <main>{children}</main>
          <FooterWrapper />
          <WhatsappWrapper />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
