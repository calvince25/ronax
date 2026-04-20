import React from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = '254799756831'; // Real WhatsApp Number
  const message = encodeURIComponent('Hi Coach Ronax! I am interested in booking a tennis session.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.button}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className={styles.pulse}></span>
    </a>
  );
};

export default WhatsAppButton;
