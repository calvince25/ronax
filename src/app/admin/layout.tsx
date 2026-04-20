import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import styles from './AdminLayout.module.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <div className={styles.avatar}>A</div>
            <span>Administrator</span>
          </div>
        </header>
        <div className={styles.pageContent}>
          {children}
        </div>
      </main>
    </div>
  );
}
