'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import styles from '../Blog.module.css';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error || !data) {
        // Fallback for demo or if not found
        if (slug === 'best-tennis-courts-nairobi') {
          setPost({
            title: "Best Tennis Courts in Nairobi (2025 Guide)",
            content: "Nairobi has a variety of tennis courts ranging from public spaces to exclusive clubs...",
            image_url: "/images/hero.png",
            created_at: new Date().toISOString(),
            author: "Coach Ronax",
            category: "Nairobi Tennis"
          });
        }
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    if (slug) fetchPost();
  }, [slug]);

  if (loading) return <div className={styles.loading}>Loading post...</div>;
  if (!post) return <div className={styles.error}>Post not found.</div>;

  return (
    <div className={styles.postPage}>
      <div className="container py-24">
        <Link href="/blog" className="flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest mb-12 hover:translate-x-[-8px] transition-transform w-fit">
          <ArrowLeft size={16} />
          <span>Back to Blog</span>
        </Link>

        <article className={styles.article}>
          <header className={styles.header}>
            <span className={styles.categoryBadge}>{post.category}</span>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <User size={14} />
                <span>{post.author || 'Revolution Tennis'}</span>
              </div>
              <div className={styles.metaItem}>
                <Calendar size={14} />
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={14} />
                <span>5 min read</span>
              </div>
            </div>
          </header>

          <div className={styles.heroImage}>
            <ImageWithFallback 
              src={post.image_url} 
              alt={post.title} 
              fill 
              priority 
            />
          </div>

          <div className={styles.content}>
             <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className={styles.cta}>
             <h3>Join the Conversation</h3>
             <p>Want to improve your game? Book a session with Coach Ronax today.</p>
             <Link href="/contact" className="btn btn-primary">Book Now</Link>
          </div>
        </article>
      </div>
    </div>
  );
}
