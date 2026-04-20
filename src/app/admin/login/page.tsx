'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';

export default function AdminLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        if (data.session) {
          router.push('/admin');
        }
      } else {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        
        setSuccessMsg('Registration successful! If you are the first user, you are now the Admin. Otherwise, please wait for admin approval.');
        setTimeout(() => {
          setIsLogin(true);
        }, 4000);
      }
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>🎾 Admin Panel</div>
        <h2>{isLogin ? 'Sign In To Dashboard' : 'Create Admin Account'}</h2>
        <p className={styles.subtitle}>
          {isLogin 
            ? 'Access your website settings and bookings.' 
            : 'First account becomes the master admin.'}
        </p>

        <form onSubmit={handleAuth} className={styles.form}>
          {errorMsg && <div className={styles.error}>{errorMsg}</div>}
          {successMsg && <div className={styles.success}>{successMsg}</div>}

          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              placeholder="admin@revolutionarytennis.co.ke"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              placeholder="••••••••"
            />
          </div>

          <button type="submit" disabled={loading} className={styles.btn}>
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Register Account')}
          </button>
        </form>

        <div className={styles.toggle}>
          <span>{isLogin ? "Don't have an account? " : "Already have an account? "}</span>
          <button type="button" onClick={() => { setIsLogin(!isLogin); setErrorMsg(''); setSuccessMsg(''); }}>
            {isLogin ? 'Register Here' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
