import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.revolutiontennis.co.ke';

  // Static routes
  const staticRoutes = [
    '',
    '/about/coach-ronax',
    '/coaching',
    '/events',
    '/gallery',
    '/blog',
    '/pricing',
    '/contact',
    '/locations',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic routes from Supabase
  try {
    // Blog posts
    const { data: posts } = await supabase.from('posts').select('slug, updated_at');
    const blogRoutes = (posts || []).map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    // Events
    const { data: events } = await supabase.from('events').select('slug, created_at');
    const eventRoutes = (events || []).map((event) => ({
      url: `${baseUrl}/events/${event.slug}`,
      lastModified: new Date(event.created_at || new Date()),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...eventRoutes];
  } catch (error) {
    return staticRoutes;
  }
}
