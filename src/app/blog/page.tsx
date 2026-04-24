'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import styles from './Blog.module.css';
import { supabase } from '@/lib/supabase';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

const BlogPage = () => {
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading blog...</div>;
  }
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Revolutionary Tennis Blog" 
          subtitle="Tips, News & Techniques" 
        />
        
        <div className={styles.featured}>
          <div className={styles.featuredImage}>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000" 
              alt="Featured Post" 
              className="object-cover w-full h-full" 
              sizes="100vw"
            />
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.category}>Nairobi Tennis</span>
            <h2>Best Tennis Courts in Nairobi (2025 Guide)</h2>
            <p>Explore the top-rated public and private courts across Nairobi, from Westlands to Karen.</p>
            <Link href="/blog/best-tennis-courts-nairobi" className="btn btn-primary">Read Guide</Link>
          </div>
        </div>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardImage}>
                <ImageWithFallback 
                  src={post.image_url || 'https://images.unsplash.com/photo-1627341398579-2d128de1dc8c?q=80&w=1080'} 
                  alt={post.title} 
                  className="object-cover w-full h-full" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardCategory}>{post.category}</span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
