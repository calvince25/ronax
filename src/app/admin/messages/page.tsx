'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Trash2, Mail, User, Clock, MessageSquare, CheckCircle, Circle } from 'lucide-react';
import styles from './AdminMessages.module.css';

const AdminMessagesPage = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  const fetchMessages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setMessages(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const toggleReadStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'read' ? 'unread' : 'read';
    const { error } = await supabase
      .from('messages')
      .update({ status: newStatus })
      .eq('id', id);
    
    if (!error) {
      setMessages(messages.map(m => m.id === id ? { ...m, status: newStatus } : m));
      if (selectedMessage?.id === id) {
        setSelectedMessage({ ...selectedMessage, status: newStatus });
      }
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    
    const { error } = await supabase
      .from('messages')
      .delete()
      .eq('id', id);
    
    if (!error) {
      setMessages(messages.filter(m => m.id !== id));
      if (selectedMessage?.id === id) setSelectedMessage(null);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Contact Messages</h2>
        <p>{messages.filter(m => m.status === 'unread').length} unread messages</p>
      </div>

      <div className={styles.content}>
        <div className={styles.list}>
          {loading ? (
            <div className={styles.loading}>Loading messages...</div>
          ) : messages.length === 0 ? (
            <div className={styles.empty}>No messages yet.</div>
          ) : (
            messages.map(msg => (
              <div 
                key={msg.id} 
                className={`${styles.messageCard} ${msg.status === 'unread' ? styles.unread : ''} ${selectedMessage?.id === msg.id ? styles.selected : ''}`}
                onClick={() => {
                  setSelectedMessage(msg);
                  if (msg.status === 'unread') toggleReadStatus(msg.id, 'unread');
                }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.name}>{msg.name}</span>
                  <span className={styles.date}>{formatDate(msg.created_at)}</span>
                </div>
                <div className={styles.subject}>{msg.subject}</div>
                <p className={styles.snippet}>{msg.message.substring(0, 60)}...</p>
                <div className={styles.actions}>
                   <button onClick={(e) => { e.stopPropagation(); deleteMessage(msg.id); }} className={styles.deleteBtn}>
                     <Trash2 size={16} />
                   </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className={styles.detail}>
          {selectedMessage ? (
            <div className={styles.detailCard}>
              <div className={styles.detailHeader}>
                <div className={styles.userInfo}>
                  <div className={styles.avatar}>{selectedMessage.name.charAt(0).toUpperCase()}</div>
                  <div>
                    <h3>{selectedMessage.name}</h3>
                    <p className={styles.email}><Mail size={12} /> {selectedMessage.email}</p>
                  </div>
                </div>
                <div className={styles.detailActions}>
                  <button 
                    onClick={() => toggleReadStatus(selectedMessage.id, selectedMessage.status)} 
                    title={selectedMessage.status === 'read' ? 'Mark as Unread' : 'Mark as Read'}
                  >
                    {selectedMessage.status === 'read' ? <Circle size={20} /> : <CheckCircle size={20} />}
                  </button>
                  <button onClick={() => deleteMessage(selectedMessage.id)} className={styles.deleteBtnDetail}>
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className={styles.detailBody}>
                <div className={styles.detailSubject}>
                   <Tag size={16} />
                   <span>Subject: {selectedMessage.subject}</span>
                </div>
                <div className={styles.detailDate}>
                   <Clock size={16} />
                   <span>Sent on: {formatDate(selectedMessage.created_at)}</span>
                </div>
                <div className={styles.messageBody}>
                   {selectedMessage.message}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.noSelection}>
              <MessageSquare size={64} />
              <p>Select a message to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Simple Tag icon replacement since Tag is already used in context but might not be imported from lucide-react
const Tag = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>;

export default AdminMessagesPage;
