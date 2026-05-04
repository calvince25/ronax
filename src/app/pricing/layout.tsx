import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
