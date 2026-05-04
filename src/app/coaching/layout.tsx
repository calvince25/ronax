import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke/coaching",
  },
};

export default function CoachingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
