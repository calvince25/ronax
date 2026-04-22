'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Edit, Image as ImageIcon, Save, X } from 'lucide-react';
import styles from './AdminPrograms.module.css';

export default function AdminPrograms() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProgram, setEditingProgram] = useState<any | null>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('programs').select('*').order('created_at');
    if (data) setPrograms(data);
    setLoading(false);
  };

  const handleEdit = (program: any) => {
    setEditingProgram({ 
      ...program, 
      upcoming_events: Array.isArray(program.upcoming_events) ? program.upcoming_events : [] 
    });
    setFile(null);
  };

  const addEvent = () => {
    setEditingProgram({
      ...editingProgram,
      upcoming_events: [...editingProgram.upcoming_events, { title: '', date: '' }]
    });
  };

  const updateEvent = (index: number, field: string, value: string) => {
    const updatedEvents = [...editingProgram.upcoming_events];
    updatedEvents[index][field] = value;
    setEditingProgram({ ...editingProgram, upcoming_events: updatedEvents });
  };

  const removeEvent = (index: number) => {
    const updatedEvents = [...editingProgram.upcoming_events];
    updatedEvents.splice(index, 1);
    setEditingProgram({ ...editingProgram, upcoming_events: updatedEvents });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProgram) return;

    // Handle image upload first if there is a new file
    let imageUrlToSave = editingProgram.image_url;
    
    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${editingProgram.slug}-${Math.random()}.${fileExt}`;
      
      const { data, error: uploadError } = await supabase.storage
        .from('public-images')
        .upload(fileName, file);
        
      if (uploadError) {
        alert('Image upload failed: ' + uploadError.message);
        return;
      }
      
      const { data: publicUrlData } = supabase.storage
        .from('public-images')
        .getPublicUrl(fileName);
        
      imageUrlToSave = publicUrlData.publicUrl;
    }

    const { error } = await supabase.from('programs').upsert({
      ...editingProgram,
      image_url: imageUrlToSave
    }, { onConflict: 'slug' });

    if (!error) {
      setEditingProgram(null);
      fetchPrograms();
    } else {
      alert('Error saving program: ' + error.message);
    }
  };

  const seedEmptyPrograms = async () => {
    const slugs = ['private-lessons', 'group-classes', 'junior-tennis', 'adult-beginners', 'advanced-training', 'tennis-camps'];
    for (const slug of slugs) {
      await supabase.from('programs').upsert({ slug, title: slug.replace('-', ' '), lead_description: 'Click edit to add content.' }, { onConflict: 'slug' });
    }
    fetchPrograms();
  };

  if (loading) return <div className={styles.loading}>Loading programs...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Program Content Manager</h2>
        <p>Edit descriptions, hero images, and details for all coaching programs.</p>
        {programs.length === 0 && (
          <button onClick={seedEmptyPrograms} className={styles.seedBtn}>Initialize Default Programs</button>
        )}
      </div>

      <div className={styles.grid}>
        {programs.map(prog => (
          <div key={prog.id || prog.slug} className={styles.card}>
            {prog.image_url ? (
              <img src={prog.image_url} alt={prog.title} className={styles.previewImage} />
            ) : (
              <div className={styles.noImage}><ImageIcon size={30} /> No Image</div>
            )}
            <div className={styles.cardBody}>
              <span className={styles.slugBadge}>/{prog.slug}</span>
              <h3>{prog.title || 'Untitled Program'}</h3>
              <p className={styles.lead}>{prog.lead_description}</p>
              
              <button className={styles.editBtn} onClick={() => handleEdit(prog)}>
                <Edit size={16} /> Edit Content
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingProgram && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Editing: {editingProgram.slug}</h3>
              <button onClick={() => setEditingProgram(null)} className={styles.closeBtn}><X size={24} /></button>
            </div>
            
            <form onSubmit={handleSave} className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Page Title</label>
                <input 
                  value={editingProgram.title || ''} 
                  onChange={e => setEditingProgram({...editingProgram, title: e.target.value})} 
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Subtitle (Hero)</label>
                <input 
                  value={editingProgram.subtitle || ''} 
                  onChange={e => setEditingProgram({...editingProgram, subtitle: e.target.value})} 
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Upload New Hero Image</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={e => setFile(e.target.files?.[0] || null)} 
                />
                {editingProgram.image_url && !file && <small>Current: {editingProgram.image_url}</small>}
              </div>

              <div className={styles.inputGroup}>
                <label>Lead Description (Short introductory paragraph)</label>
                <textarea 
                  rows={3} 
                  value={editingProgram.lead_description || ''} 
                  onChange={e => setEditingProgram({...editingProgram, lead_description: e.target.value})} 
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Main Body Content</label>
                <textarea 
                  rows={6} 
                  value={editingProgram.main_description || ''} 
                  onChange={e => setEditingProgram({...editingProgram, main_description: e.target.value})} 
                  placeholder="Extended description about what to expect..."
                />
              </div>

              <div className={styles.inputGroup}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ margin: 0 }}>Upcoming Events</label>
                  <button type="button" onClick={addEvent} style={{ padding: '4px 8px', fontSize: '0.8rem', background: '#eee', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>+ Add Event</button>
                </div>
                {editingProgram.upcoming_events.map((event: any, index: number) => (
                  <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <input 
                      placeholder="Event Title" 
                      value={event.title} 
                      onChange={e => updateEvent(index, 'title', e.target.value)} 
                      style={{ flex: 2 }}
                    />
                    <input 
                      type="date" 
                      value={event.date} 
                      onChange={e => updateEvent(index, 'date', e.target.value)} 
                      style={{ flex: 1 }}
                    />
                    <button type="button" onClick={() => removeEvent(index)} style={{ padding: '8px', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                      <X size={16} />
                    </button>
                  </div>
                ))}
                {editingProgram.upcoming_events.length === 0 && <p style={{ fontSize: '0.85rem', color: '#666' }}>No upcoming events added.</p>}
              </div>

              <div className={styles.modalActions}>
                <button type="button" onClick={() => setEditingProgram(null)} className={styles.cancelBtn}>Cancel</button>
                <button type="submit" className={styles.saveBtn}><Save size={18} /> Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
