'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Image as ImageIcon, Upload, Trash2, Loader2 } from 'lucide-react';
import styles from './AdminGallery.module.css';

export default function AdminGallery() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [altText, setAltText] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setImages(data);
    setLoading(false);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    
    // 1. Upload to Supabase Storage
    const fileExt = file.name.split('.').pop();
    const fileName = `gallery-${Date.now()}.${fileExt}`;
    
    const { error: uploadError } = await supabase.storage
      .from('public-images')
      .upload(fileName, file);

    if (uploadError) {
      alert('Upload error: ' + uploadError.message);
      setUploading(false);
      return;
    }

    // 2. Get public url
    const { data: publicUrlData } = supabase.storage
      .from('public-images')
      .getPublicUrl(fileName);

    // 3. Insert into Gallery DB Table
    const { error: dbError } = await supabase
      .from('gallery')
      .insert({
        image_url: publicUrlData.publicUrl,
        alt_text: altText || 'Gallery Image',
        description: description
      });

    if (dbError) {
      alert('DB insert error: ' + dbError.message);
    } else {
      setFile(null);
      setAltText('');
      setDescription('');
      fetchGallery();
    }
    
    setUploading(false);
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this image from the gallery?");
    if (!isConfirmed) return;

    // Delete from DB
    const { error: dbError } = await supabase.from('gallery').delete().eq('id', id);
    
    if (dbError) {
      alert('Failed to delete from database: ' + dbError.message);
      return;
    }

    // Delete from Storage
    const fileName = imageUrl.split('/').pop();
    if (fileName) {
      await supabase.storage.from('public-images').remove([fileName]);
    }

    setImages(images.filter(img => img.id !== id));
  };

  if (loading) return <div className={styles.loading}>Loading gallery...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Gallery Manager</h2>
        <p>Upload and manage images displayed on your public gallery page.</p>
      </div>

      <div className={styles.uploadSection}>
        <h3>Add New Image</h3>
        <form onSubmit={handleUpload} className={styles.uploadForm}>
          <div className={styles.inputGrid}>
            <div className={styles.inputGroup}>
              <label>Select Image File</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={e => setFile(e.target.files?.[0] || null)} 
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Alt Text (SEO)</label>
              <input 
                type="text" 
                value={altText} 
                onChange={e => setAltText(e.target.value)} 
                placeholder="e.g. Coach Ronax teaching"
                required
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Event Description</label>
            <textarea 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              placeholder="Tell us about this event or photo..."
              rows={3}
            />
          </div>
          <button type="submit" disabled={!file || uploading} className={styles.uploadBtn}>
            {uploading ? <Loader2 className="spinner" /> : <Upload size={18} />}
            {uploading ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>
      </div>

      <div className={styles.galleryGrid}>
        {images.map(img => (
          <div key={img.id} className={styles.galleryCard}>
            <div className={styles.imgWrapper}>
              <img src={img.image_url} alt={img.alt_text} />
            </div>
            <div className={styles.cardFooter}>
              <span>{img.alt_text}</span>
              <button onClick={() => handleDelete(img.id, img.image_url)} className={styles.deleteBtn}>
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        {images.length === 0 && (
          <div className={styles.empty}>Your gallery is empty. Upload an image above.</div>
        )}
      </div>
    </div>
  );
}
