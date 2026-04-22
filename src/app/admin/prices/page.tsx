'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Pencil, Trash2, X, Save, Star, Zap, ShieldCheck } from 'lucide-react';
import styles from './AdminPrices.module.css';

const emptyPrice = {
  name: '',
  price: '',
  unit: '',
  description: '',
  features: [] as string[],
  icon: 'Star',
  popular: false,
  display_order: 0,
  category: 'General'
};

const AdminPricesPage = () => {
  const [prices, setPrices] = useState<any[]>([]);
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPrice, setEditingPrice] = useState<any>(null);
  const [form, setForm] = useState(emptyPrice);
  const [featureInput, setFeatureInput] = useState('');
  const [saving, setSaving] = useState(false);

  const fetchPrices = async () => {
    setLoading(true);
    const { data: pricesData } = await supabase.from('prices').select('*').order('display_order', { ascending: true });
    const { data: programsData } = await supabase.from('programs').select('title');
    setPrices(pricesData || []);
    setPrograms(programsData || []);
    setLoading(false);
  };

  useEffect(() => { fetchPrices(); }, []);

  const openCreate = () => {
    setEditingPrice(null);
    setForm({ ...emptyPrice, display_order: prices.length });
    setFeatureInput('');
    setShowModal(true);
  };

  const openEdit = (price: any) => {
    setEditingPrice(price);
    setForm({
      name: price.name,
      price: price.price,
      unit: price.unit || '',
      description: price.description || '',
      features: Array.isArray(price.features) ? price.features : [],
      icon: price.icon || 'Star',
      popular: price.popular || false,
      display_order: price.display_order || 0,
      category: price.category || 'General'
    });
    setFeatureInput('');
    setShowModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const addFeature = () => {
    if (!featureInput.trim()) return;
    setForm(prev => ({ ...prev, features: [...prev.features, featureInput.trim()] }));
    setFeatureInput('');
  };

  const removeFeature = (index: number) => {
    setForm(prev => ({ ...prev, features: prev.features.filter((_: any, i: number) => i !== index) }));
  };

  const handleSave = async () => {
    if (!form.name || !form.price) return alert('Name and price are required.');
    setSaving(true);
    
    const payload = {
      name: form.name,
      price: form.price,
      unit: form.unit,
      description: form.description,
      features: form.features,
      icon: form.icon,
      popular: form.popular,
      display_order: form.display_order,
      category: form.category
    };

    if (editingPrice) {
      const { error } = await supabase.from('prices').update(payload).eq('id', editingPrice.id);
      if (!error) {
        setPrices(prices.map(p => p.id === editingPrice.id ? { ...p, ...payload } : p));
      }
    } else {
      const { data, error } = await supabase.from('prices').insert([payload]).select().single();
      if (!error && data) setPrices([...prices, data]);
    }

    setSaving(false);
    setShowModal(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this pricing plan?')) return;
    const { error } = await supabase.from('prices').delete().eq('id', id);
    if (!error) setPrices(prices.filter(p => p.id !== id));
  };

  const getIconComponent = (name: string) => {
    if (name === 'Zap') return <Zap size={28} />;
    if (name === 'ShieldCheck') return <ShieldCheck size={28} />;
    return <Star size={28} />;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>Pricing & Packages</h2>
          <p>{prices.length} plans published</p>
        </div>
        <button className={styles.createBtn} onClick={openCreate}>
          <Plus size={18} /> New Plan
        </button>
      </div>

      <div className={styles.grid}>
        {loading ? (
          <div className={styles.loading}>Loading prices...</div>
        ) : prices.length === 0 ? (
          <div className={styles.empty}>No pricing plans yet. Add your first one!</div>
        ) : prices.map(plan => (
          <div key={plan.id} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
            {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
            <div className={styles.iconBox}>{getIconComponent(plan.icon)}</div>
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.description}>{plan.description}</p>
            <div className={styles.priceDisplay}>
              <span className={styles.currency}>KES</span>
              <span className={styles.price}>{plan.price}</span>
              {plan.unit && <span className={styles.unit}>/ {plan.unit}</span>}
            </div>
            <ul className={styles.features}>
              {(Array.isArray(plan.features) ? plan.features : []).map((f: string, i: number) => (
                <li key={i}>✓ {f}</li>
              ))}
            </ul>
            <div className={styles.cardActions}>
              <button onClick={() => openEdit(plan)} className={styles.editBtn}>
                <Pencil size={16} /> Edit
              </button>
              <button onClick={() => handleDelete(plan.id)} className={styles.deleteBtn}>
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
              <h3>{editingPrice ? 'Edit Pricing Plan' : 'New Pricing Plan'}</h3>
              <button onClick={() => setShowModal(false)}><X size={20} /></button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label>Plan Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Private Lessons" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Category (Program)</label>
                  <select name="category" value={form.category} onChange={handleChange}>
                    <option value="General">General</option>
                    {programs.map(p => (
                      <option key={p.title} value={p.title}>{p.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label>Price (KES) *</label>
                  <input name="price" value={form.price} onChange={handleChange} placeholder="e.g. 2,500" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Price Unit</label>
                  <input name="unit" value={form.unit} onChange={handleChange} placeholder="e.g. per hour" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label>Icon</label>
                  <select name="icon" value={form.icon} onChange={handleChange}>
                    <option value="Star">⭐ Star</option>
                    <option value="Zap">⚡ Zap</option>
                    <option value="ShieldCheck">🛡️ Shield</option>
                  </select>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label>Display Order</label>
                  <input name="display_order" type="number" value={form.display_order} onChange={handleChange} />
                </div>
                <div className={styles.checkboxGroup}>
                  <label>
                    <input type="checkbox" name="popular" checked={form.popular} onChange={handleChange} />
                    Mark as Most Popular
                  </label>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} rows={2} placeholder="Short description of this plan..." />
              </div>
              <div className={styles.inputGroup}>
                <label>Features / Inclusions</label>
                <div className={styles.featureRow}>
                  <input 
                    value={featureInput}
                    onChange={e => setFeatureInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && addFeature()}
                    placeholder="Type a feature and press Enter or Add"
                  />
                  <button type="button" onClick={addFeature} className={styles.addFeatureBtn}><Plus size={18} /></button>
                </div>
                <div className={styles.featuresList}>
                  {form.features.map((f: string, i: number) => (
                    <div key={i} className={styles.featureTag}>
                      <span>{f}</span>
                      <button onClick={() => removeFeature(i)}><X size={14} /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowModal(false)}>Cancel</button>
              <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
                <Save size={16} /> {saving ? 'Saving...' : 'Save Plan'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPricesPage;
