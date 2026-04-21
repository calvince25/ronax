import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import FooterWrapper from "@/components/layout/FooterWrapper";
import WhatsappWrapper from "@/components/layout/WhatsappWrapper";

export const metadata: Metadata = {
  title: {
    default: "Revolutionary Tennis | Coach Ronax – Tennis Coaching in Nairobi",
    template: "%s | Revolutionary Tennis"
  },
  description: "Train with Ronax, Nairobi's top tennis coach. Private lessons, junior programs & group classes. Book your session today. Revolutionary Tennis.",
  keywords: ["tennis coach Nairobi", "tennis lessons Nairobi", "learn tennis Kenya", "tennis coaching Kenya"],
  openGraph: {
    title: "Revolutionary Tennis | Coach Ronax",
    description: "Nairobi's #1 Tennis Coach — Train With Ronax",
    type: "website",
    locale: "en_KE",
    url: "https://revolutionarytennis.co.ke",
  },
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
