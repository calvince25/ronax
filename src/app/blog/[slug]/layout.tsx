import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = (await params).slug;
  
  return {
    alternates: {
      canonical: `https://www.revolutiontennis.co.ke/blog/${slug}`,
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
