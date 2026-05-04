import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
