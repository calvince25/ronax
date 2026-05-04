import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke/events",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
