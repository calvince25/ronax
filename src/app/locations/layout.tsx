import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke/locations",
  },
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
