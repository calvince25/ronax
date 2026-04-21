'use client';

import React, { useEffect, useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import styles from './AdminLayout.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        if (pathname !== '/admin/login') {
          router.push('/admin/login');
        } else {
          setLoading(false);
        }
        return;
      }

      setUserEmail(session.user.email || '');

      // Check role
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();
      
      setUserRole(profile?.role || 'pending');
      
      if (pathname === '/admin/login') {
        window.location.href = '/admin';
      }

      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkAuth();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [pathname, router]);

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a192f', color: '#fff' }}>Loading Admin...</div>;
  }

  // If on login page, just render the login form without sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // If pending, show pending screen
  if (userRole !== 'admin') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a192f', color: '#fff', flexDirection: 'column', gap: '20px' }}>
        <h2 style={{ fontSize: '2rem', color: '#c6eb1e' }}>Approval Pending</h2>
        <p>Your account ({userEmail}) has been created but is awaiting administrator approval.</p>
        <button 
          onClick={() => supabase.auth.signOut()}
          style={{ padding: '12px 24px', background: 'transparent', border: '1px solid #ff4d4d', color: '#ff4d4d', borderRadius: '8px', cursor: 'pointer' }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <AdminSidebar />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerInfo}>
            <h1>Admin Control Center</h1>
            <p>Manage your tennis school's digital presence</p>
          </div>
          <div className={styles.userProfile}>
            <div className={styles.avatar}>{userEmail.charAt(0).toUpperCase()}</div>
            <span>{userEmail.split('@')[0]}</span>
          </div>
        </header>
        <div className={styles.pageContent}>
          {children}
        </div>
      </main>
    </div>
  );
}
