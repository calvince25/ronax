import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Revolutionary Tennis | Coach Ronax – Tennis Coaching in Nairobi",
    template: "%s | Revolutionary Tennis"
  },
  description: "Train with Ronax, Nairobi's top tennis coach. Private lessons, junior programs & group classes. Book your free trial lesson today. Revolutionary Tennis.",
  keywords: ["tennis coach Nairobi", "tennis lessons Nairobi", "learn tennis Kenya", "tennis coaching Kenya"],
  openGraph: {
    title: "Revolutionary Tennis | Coach Ronax",
    description: "Nairobi's #1 Tennis Coach — Train With Ronax",
    type: "website",
    locale: "en_KE",
    url: "https://revolutionarytennis.co.ke",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
