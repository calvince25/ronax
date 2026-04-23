'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Edit2, Calendar as CalendarIcon, MapPin, Users, DollarSign, Clock } from 'lucide-react';
import styles from './AdminEvents.module.css';

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  location: string;
  price_individual: number;
  price_group: number;
  image_url: string;
  max_slots: number;
  booked_slots: number;
  status: string;
}

const AdminEventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    price_individual: 0,
    price_group: 0,
    max_slots: 0,
    image_url: '',
    status: 'upcoming'
  });

  const fetchEvents = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });
    
    if (!error && data) {
      setEvents(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = form.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    const payload = { ...form, slug };

    if (editingEvent) {
      const { error } = await supabase
        .from('events')
        .update(payload)
        .eq('id', editingEvent.id);
      if (error) alert(error.message);
    } else {
      const { error } = await supabase
        .from('events')
        .insert([payload]);
      if (error) alert(error.message);
    }

    setIsModalOpen(false);
    setEditingEvent(null);
    fetchEvents();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);
    if (error) alert(error.message);
    else fetchEvents();
  };

  const openEditModal = (event: Event) => {
    setEditingEvent(event);
    setForm({
      title: event.title,
      description: event.description,
      date: new Date(event.date).toISOString().slice(0, 16),
      location: event.location,
      price_individual: event.price_individual,
      price_group: event.price_group,
      max_slots: event.max_slots,
      image_url: event.image_url,
      status: event.status
    });
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>Event Management</h2>
          <p>Create and manage upcoming tennis events</p>
        </div>
        <button onClick={() => { 
          setIsModalOpen(true); 
          setEditingEvent(null);
          setForm({ title: '', description: '', date: '', location: '', price_individual: 0, price_group: 0, max_slots: 0, image_url: '', status: 'upcoming' });
        }} className={styles.addBtn}>
          <Plus size={20} />
          <span>Add New Event</span>
        </button>
      </div>

      <div className={styles.grid}>
        {loading ? (
          <div className={styles.loading}>Loading events...</div>
        ) : events.length === 0 ? (
          <div className={styles.empty}>No events found. Create your first event!</div>
        ) : (
          events.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventImage}>
                 <img src={event.image_url || 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800'} alt={event.title} />
                 <div className={`${styles.status} ${styles[event.status]}`}>{event.status}</div>
              </div>
              <div className={styles.eventInfo}>
                <h3>{event.title}</h3>
                <div className={styles.meta}>
                   <span><CalendarIcon size={14} /> {new Date(event.date).toLocaleDateString()}</span>
                   <span><Clock size={14} /> {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className={styles.meta}>
                   <span><MapPin size={14} /> {event.location}</span>
                </div>
                <div className={styles.pricing}>
                   <div className={styles.priceItem}>
                      <span className={styles.label}>Individual</span>
                      <span className={styles.value}>Ksh {event.price_individual}</span>
                   </div>
                   <div className={styles.priceItem}>
                      <span className={styles.label}>Group</span>
                      <span className={styles.value}>Ksh {event.price_group}</span>
                   </div>
                </div>
                <div className={styles.actions}>
                  <button onClick={() => openEditModal(event)} className={styles.editBtn}><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(event.id)} className={styles.deleteBtn}><Trash2 size={16} /></button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3>{editingEvent ? 'Edit Event' : 'Create New Event'}</h3>
              <button onClick={() => setIsModalOpen(false)} className={styles.closeBtn}>&times;</button>
            </div>
            <form onSubmit={handleSave} className={styles.form}>
              <div className={styles.formGroup}>
                <label>Event Title</label>
                <input required value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="e.g. Saturday Mixed Doubles Tournament" />
              </div>
              <div className={styles.formGroup}>
                <label>Description</label>
                <textarea required value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder="Event details..." rows={3} />
              </div>
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label>Date & Time</label>
                  <input required type="datetime-local" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
                </div>
                <div className={styles.formGroup}>
                  <label>Location</label>
                  <input required value={form.location} onChange={e => setForm({...form, location: e.target.value})} placeholder="e.g. Aga Khan, Parklands" />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label>Individual Price (Ksh)</label>
                  <input required type="number" value={form.price_individual} onChange={e => setForm({...form, price_individual: Number(e.target.value)})} />
                </div>
                <div className={styles.formGroup}>
                  <label>Group Price (Ksh)</label>
                  <input required type="number" value={form.price_group} onChange={e => setForm({...form, price_group: Number(e.target.value)})} />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label>Max Slots</label>
                  <input required type="number" value={form.max_slots} onChange={e => setForm({...form, max_slots: Number(e.target.value)})} />
                </div>
                <div className={styles.formGroup}>
                  <label>Image URL</label>
                  <input value={form.image_url} onChange={e => setForm({...form, image_url: e.target.value})} placeholder="Unsplash URL..." />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Status</label>
                <select value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div className={styles.modalFooter}>
                <button type="button" onClick={() => setIsModalOpen(false)} className={styles.cancelBtn}>Cancel</button>
                <button type="submit" className={styles.saveBtn}>Save Event</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEventsPage;
