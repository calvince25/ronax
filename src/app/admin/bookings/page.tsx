'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Trash2, 
  CheckCircle, 
  XCircle,
  Mail,
  Phone
} from 'lucide-react';
import styles from './AdminBookings.module.css';

const BookingsManager = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error) setBookings(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from('bookings')
      .update({ status: newStatus })
      .eq('id', id);
    
    if (!error) {
      setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
    }
  };

  const deleteBooking = async (id: string) => {
    if (confirm('Are you sure you want to delete this booking?')) {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', id);
      
      if (!error) {
        setBookings(bookings.filter(b => b.id !== id));
      }
    }
  };

  const filteredBookings = bookings.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.phone.includes(searchTerm)
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <h2>Booking Sessions</h2>
          <p>{bookings.length} total inquiries received</p>
        </div>
        <div className={styles.actions}>
          <div className={styles.searchBox}>
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search by name, email or phone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {loading ? (
          <div className={styles.loading}>Loading bookings...</div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Customer Details</th>
                  <th>Session Info</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <div className={styles.customerCard}>
                        <div className={styles.name}>{booking.name}</div>
                        <div className={styles.contactDetails}>
                          <span><Mail size={12} /> {booking.email}</span>
                          <span><Phone size={12} /> {booking.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.sessionCard}>
                        <span className={styles.level}>{booking.level}</span>
                        <span className={styles.location}>{booking.location}</span>
                        <span className={styles.date}>{new Date(booking.created_at).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td>
                      <p className={styles.messageSnippet} title={booking.message}>
                        {booking.message || 'No message provided.'}
                      </p>
                    </td>
                    <td>
                      <div className={styles.statusGroup}>
                        <span className={`${styles.statusBadge} ${styles[booking.status]}`}>
                          {booking.status}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className={styles.rowActions}>
                        <button 
                          className={styles.actionBtn} 
                          onClick={() => updateStatus(booking.id, 'confirmed')}
                          title="Confirm"
                        >
                          <CheckCircle size={18} color="#22c55e" />
                        </button>
                        <button 
                          className={styles.actionBtn} 
                          onClick={() => updateStatus(booking.id, 'cancelled')}
                          title="Cancel"
                        >
                          <XCircle size={18} color="#ef4444" />
                        </button>
                        <button 
                          className={styles.actionBtn} 
                          onClick={() => deleteBooking(booking.id)}
                          title="Delete"
                        >
                          <Trash2 size={18} color="#666" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingsManager;
