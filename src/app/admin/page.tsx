'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { 
  Users, 
  Calendar, 
  FileText, 
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';
import styles from './AdminDashboard.module.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    pendingBookings: 0,
    totalPosts: 0,
    totalPrices: 0
  });
  const [recentBookings, setRecentBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      
      // Fetch stats
      const { count: bookingCount } = await supabase.from('bookings').select('*', { count: 'exact', head: true });
      const { count: pendingCount } = await supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'pending');
      const { count: postCount } = await supabase.from('posts').select('*', { count: 'exact', head: true });
      const { count: priceCount } = await supabase.from('prices').select('*', { count: 'exact', head: true });

      setStats({
        totalBookings: bookingCount || 0,
        pendingBookings: pendingCount || 0,
        totalPosts: postCount || 0,
        totalPrices: priceCount || 0
      });

      // Fetch recent bookings
      const { data: bookings } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      setRecentBookings(bookings || []);
      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div className={styles.loading}>Loading Dashboard...</div>;

  return (
    <div className={styles.dashboard}>
      <div className={styles.statsGrid}>
        <Link href="/admin/bookings" className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Calendar size={24} />
          </div>
          <div className={styles.statInfo}>
            <h4>Total Bookings</h4>
            <p>{stats.totalBookings}</p>
          </div>
        </Link>
        <Link href="/admin/bookings" className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.yellow}`}>
            <Clock size={24} />
          </div>
          <div className={styles.statInfo}>
            <h4>Pending Review</h4>
            <p>{stats.pendingBookings}</p>
          </div>
        </Link>
        <Link href="/admin/blog" className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <FileText size={24} />
          </div>
          <div className={styles.statInfo}>
            <h4>Blog Posts</h4>
            <p>{stats.totalPosts}</p>
          </div>
        </Link>
        <Link href="/admin/prices" className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <TrendingUp size={24} />
          </div>
          <div className={styles.statInfo}>
            <h4>Active Prices</h4>
            <p>{stats.totalPrices}</p>
          </div>
        </Link>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3>Recent Bookings</h3>
          <button className={styles.viewAll}>View All</button>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Location</th>
                <th>Program</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>
                    <div className={styles.customerInfo}>
                      <span className={styles.name}>{booking.name}</span>
                      <span className={styles.email}>{booking.email}</span>
                    </div>
                  </td>
                  <td>{booking.location}</td>
                  <td>{booking.program}</td>
                  <td>{new Date(booking.created_at).toLocaleDateString()}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
