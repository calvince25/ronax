'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { ShieldCheck, XCircle, Clock } from 'lucide-react';
import styles from './AdminUsers.module.css';

export default function AdminUsers() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setProfiles(data);
    }
    setLoading(false);
  };

  const updateRole = async (id: string, newRole: string) => {
    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', id);

    if (!error) {
      setProfiles(profiles.map(p => p.id === id ? { ...p, role: newRole } : p));
    } else {
      alert('Failed to update role: ' + error.message);
    }
  };

  if (loading) return <div className={styles.loading}>Loading users...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>User Management</h2>
        <p>Approve or deny admin access to newly registered users.</p>
      </div>

      <div className={styles.grid}>
        {profiles.map((profile) => (
          <div key={profile.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>{profile.email?.charAt(0).toUpperCase()}</div>
                <div>
                  <h4 className={styles.email}>{profile.email}</h4>
                  <span className={styles.date}>{new Date(profile.created_at).toLocaleDateString()}</span>
                </div>
              </div>
              <div className={`${styles.badge} ${profile.role === 'admin' ? styles.badgeAdmin : styles.badgePending}`}>
                {profile.role === 'admin' ? <ShieldCheck size={16} /> : <Clock size={16} />}
                {profile.role === 'admin' ? 'Admin' : 'Pending'}
              </div>
            </div>

            <div className={styles.actions}>
              {profile.role === 'pending' && (
                <>
                  <button onClick={() => updateRole(profile.id, 'admin')} className={styles.approveBtn}>
                    <ShieldCheck size={16} /> Approve
                  </button>
                  <button onClick={() => updateRole(profile.id, 'rejected')} className={styles.rejectBtn}>
                    <XCircle size={16} /> Reject
                  </button>
                </>
              )}
              
              {profile.role === 'admin' && (
                <button onClick={() => updateRole(profile.id, 'pending')} className={styles.revokeBtn}>
                   Revoke Access
                </button>
              )}
            </div>
          </div>
        ))}
        {profiles.length === 0 && <div className={styles.empty}>No users found.</div>}
      </div>
    </div>
  );
}
