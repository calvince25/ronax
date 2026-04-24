'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Pencil, Trash2, Calendar, MapPin, DollarSign, Clock, X, Save, AlertCircle } from 'lucide-react';
import styles from './AdminEvents.module.css';

const emptyEvent = {
  title: '',
  slug: '',
  description: '',
  date: '',
  location: '',
  price_individual: 0,
  price_group: 0,
  image_url: '',
  status: 'upcoming',
  max_slots: 20
};

const AdminEventsPage = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null);
  const [form, setForm] = useState(emptyEvent);
  const [saving, setSaving] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });
    
    if (!error && data) setEvents(data);
    setLoading(false);
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleOpenCreate = () => {
    setEditingEvent(null);
    setForm(emptyEvent);
    setShowModal(true);
  };

  const handleOpenEdit = (event: any) => {
    setEditingEvent(event);
    setForm({
      title: event.title,
      slug: event.slug,
      description: event.description || '',
      date: new Date(event.date).toISOString().slice(0, 16),
      location: event.location,
      price_individual: event.price_individual,
      price_group: event.price_group,
      image_url: event.image_url || '',
      status: event.status,
      max_slots: event.max_slots
    });
    setShowModal(true);
  };

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setForm(prev => {
      const updated = { ...prev, [name]: value };
      if (name === 'title' && !editingEvent) {
        updated.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      }
      return updated;
    });
  };

  const handleSave = async () => {
    if (!form.title || !form.date || !form.location) {
      alert('Please fill in required fields (Title, Date, Location)');
      return;
    }
    setSaving(true);
    
    if (editingEvent) {
      const { error } = await supabase.from('events').update(form).eq('id', editingEvent.id);
      if (!error) {
        setEvents(events.map(e => e.id === editingEvent.id ? { ...e, ...form } : e));
        setShowModal(false);
      } else {
        alert('Error: ' + error?.message);
      }
    } else {
      const { data, error } = await supabase.from('events').insert([form]).select().single();
      if (!error && data) {
        setEvents([...events, data]);
        setShowModal(false);
      } else {
        alert('Error: ' + error?.message);
      }
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;
    const { error } = await supabase.from('events').delete().eq('id', id);
    if (!error) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>Manage Events</h2>
          <p>Schedule tournaments, clinics, and special sessions</p>
        </div>
        <button className={styles.addBtn} onClick={handleOpenCreate}>
          <Plus size={18} /> Create Event
        </button>
      </div>

      <div className={styles.grid}>
        {loading ? (
          <div className={styles.loading}>Loading events...</div>
        ) : events.length === 0 ? (
          <div className={styles.empty}>No events found. Create your first event!</div>
        ) : (
          events.map(event => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventImage}>
                <img src={event.image_url || 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800'} alt={event.title} />
                <span className={`${styles.status} ${styles[event.status]}`}>{event.status}</span>
              </div>
              <div className={styles.eventInfo}>
                <h3>{event.title}</h3>
                <div className={styles.meta}>
                  <span><Calendar size={14} /> {new Date(event.date).toLocaleDateString()}</span>
                  <span><Clock size={14} /> {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
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
                  <button onClick={() => handleOpenEdit(event)} className={styles.editBtn} title="Edit"><Pencil size={16} /></button>
                  <button onClick={() => handleDelete(event.id)} className={styles.deleteBtn} title="Delete"><Trash2 size={16} /></button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3>{editingEvent ? 'Edit Event' : 'Create New Event'}</h3>
              <button className={styles.closeBtn} onClick={() => setShowModal(false)}><X size={20} /></button>
            </div>
            <div className={styles.form}>
              <div className={styles.formGroup}>
                <label>Event Title *</label>
                <input name="title" value={form.title} onChange={handleFormChange} placeholder="e.g. Nairobi Open Tournament" />
              </div>
              <div className={styles.formGroup}>
                <label>Slug (URL Friendly) *</label>
                <input name="slug" value={form.slug} onChange={handleFormChange} placeholder="nairobi-open-tournament" />
              </div>
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label>Date & Time *</label>
                  <input type="datetime-local" name="date" value={form.date} onChange={handleFormChange} />
                </div>
                <div className={styles.formGroup}>
                  <label>Location *</label>
                  <input name="location" value={form.location} onChange={handleFormChange} placeholder="e.g. Westlands" />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label>Price (Individual)</label>
                  <input type="number" name="price_individual" value={form.price_individual} onChange={handleFormChange} />
                </div>
                <div className={styles.formGroup}>
                  <label>Price (Group)</label>
                  <input type="number" name="price_group" value={form.price_group} onChange={handleFormChange} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Image URL</label>
                <input name="image_url" value={form.image_url} onChange={handleFormChange} placeholder="https://unsplash.com/..." />
              </div>
              <div className={styles.formGroup}>
                <label>Status</label>
                <select name="status" value={form.status} onChange={handleFormChange}>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Description</label>
                <textarea name="description" value={form.description} onChange={handleFormChange} rows={3} placeholder="Event details..."></textarea>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowModal(false)}>Cancel</button>
              <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
                {saving ? 'Saving...' : 'Save Event'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEventsPage;
