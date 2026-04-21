'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Pencil, Trash2, X, Save, Upload, Loader2, Image as ImageIcon } from 'lucide-react';
import styles from './AdminBlog.module.css';

const emptyPost = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  category: '',
  image_url: '',
  author: 'Coach Ronax'
};

const AdminBlogPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [form, setForm] = useState(emptyPost);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
    setPosts(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const openCreate = () => {
    setEditingPost(null);
    setForm(emptyPost);
    setShowModal(true);
  };

  const openEdit = (post: any) => {
    setEditingPost(post);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || '',
      content: post.content || '',
      category: post.category || '',
      image_url: post.image_url || '',
      author: post.author || 'Coach Ronax'
    });
    setShowModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => {
      const updated = { ...prev, [name]: value };
      if (name === 'title' && !editingPost) {
        updated.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      }
      return updated;
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setUploading(true);
    const fileExt = selectedFile.name.split('.').pop();
    const fileName = `blog-${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('public-images')
      .upload(fileName, selectedFile);

    if (uploadError) {
      alert('Upload error: ' + uploadError.message);
      setUploading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from('public-images')
      .getPublicUrl(fileName);

    setForm(prev => ({ ...prev, image_url: publicUrlData.publicUrl }));
    setUploading(false);
  };

  const handleSave = async () => {
    if (!form.title || !form.slug) return alert('Title and slug are required.');
    setSaving(true);
    
    if (editingPost) {
      const { error } = await supabase.from('posts').update(form).eq('id', editingPost.id);
      if (!error) {
        setPosts(posts.map(p => p.id === editingPost.id ? { ...p, ...form } : p));
      }
    } else {
      const { data, error } = await supabase.from('posts').insert([form]).select().single();
      if (!error && data) {
        setPosts([data, ...posts]);
      }
    }
    
    setSaving(false);
    setShowModal(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this post permanently?')) return;
    const { error } = await supabase.from('posts').delete().eq('id', id);
    if (!error) setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>Blog Posts</h2>
          <p>{posts.length} articles published</p>
        </div>
        <button className={styles.createBtn} onClick={openCreate}>
          <Plus size={18} /> New Post
        </button>
      </div>

      <div className={styles.grid}>
        {loading ? (
          <div className={styles.loading}>Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className={styles.empty}>
            <p>No blog posts yet. Create your first one!</p>
          </div>
        ) : posts.map(post => (
          <div key={post.id} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={post.image_url || '/images/hero.png'} alt={post.title} />
              {post.category && <span className={styles.categoryBadge}>{post.category}</span>}
            </div>
            <div className={styles.cardBody}>
              <h3>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.cardMeta}>
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                <span>by {post.author}</span>
              </div>
            </div>
            <div className={styles.cardActions}>
              <button onClick={() => openEdit(post)} className={styles.editBtn}>
                <Pencil size={16} /> Edit
              </button>
              <button onClick={() => handleDelete(post.id)} className={styles.deleteBtn}>
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className={styles.overlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{editingPost ? 'Edit Post' : 'New Blog Post'}</h3>
              <button onClick={() => setShowModal(false)}><X size={20} /></button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label>Post Title *</label>
                  <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. How to Improve Your Serve" />
                </div>
                <div className={styles.inputGroup}>
                  <label>URL Slug *</label>
                  <input name="slug" value={form.slug} onChange={handleChange} placeholder="e.g. how-to-improve-serve" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label>Category</label>
                  <select name="category" value={form.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Nairobi Tennis">Nairobi Tennis</option>
                    <option value="Junior">Junior</option>
                    <option value="News">News</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>Author</label>
                  <input name="author" value={form.author} onChange={handleChange} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Featured Image</label>
                <div className={styles.imageUploadContainer}>
                  {form.image_url && (
                    <div className={styles.imagePreview}>
                      <img src={form.image_url} alt="Preview" />
                      <button 
                        type="button" 
                        onClick={() => setForm(prev => ({ ...prev, image_url: '' }))}
                        className={styles.removeImage}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  <div className={styles.uploadControls}>
                    <input 
                      type="file" 
                      id="blog-image-upload" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className={styles.fileInput}
                      disabled={uploading}
                    />
                    <label htmlFor="blog-image-upload" className={styles.uploadLabel}>
                      {uploading ? <Loader2 className="animate-spin" size={18} /> : <Upload size={18} />}
                      {uploading ? 'Uploading...' : 'Upload Image'}
                    </label>
                    <div className={styles.urlInput}>
                        <span>Or use URL</span>
                        <input 
                          name="image_url" 
                          value={form.image_url} 
                          onChange={handleChange} 
                          placeholder="https://..." 
                        />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Excerpt / Summary</label>
                <textarea name="excerpt" value={form.excerpt} onChange={handleChange} rows={2} placeholder="Short description shown in blog list..." />
              </div>
              <div className={styles.inputGroup}>
                <label>Full Content</label>
                <textarea name="content" value={form.content} onChange={handleChange} rows={8} placeholder="Full article content..." />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowModal(false)}>Cancel</button>
              <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
                <Save size={16} /> {saving ? 'Saving...' : 'Save Post'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlogPage;
