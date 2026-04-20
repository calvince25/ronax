import React from 'react';
import Link from 'next/link';
import { Globe, Camera, PlayCircle, Phone, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>🎾</div>
              <div className={styles.logoText}>
                <span className={styles.logoMain}>REVOLUTIONARY</span>
                <span className={styles.logoSub}>TENNIS</span>
              </div>
            </div>
            <p className={styles.description}>
              Nairobi's #1 Tennis Coaching. Building champions on and off the court with world-class training methods.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}><Globe size={20} /></a>
              <a href="#" className={styles.socialLink}><Camera size={20} /></a>
              <a href="#" className={styles.socialLink}><PlayCircle size={20} /></a>
            </div>
          </div>

          <div className={styles.links}>
            <h4 className={styles.title}>Programs</h4>
            <ul>
              <li><Link href="/coaching/private-lessons">Private Lessons</Link></li>
              <li><Link href="/coaching/group-classes">Group Classes</Link></li>
              <li><Link href="/coaching/junior-tennis">Junior Tennis</Link></li>
              <li><Link href="/coaching/tennis-camps">Tennis Camps</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h4 className={styles.title}>About</h4>
            <ul>
              <li><Link href="/about/coach-ronax">Coach Ronax</Link></li>
              <li><Link href="/about/certifications">Certifications</Link></li>
              <li><Link href="/about/gallery">Gallery</Link></li>
              <li><Link href="/about/results">Student Results</Link></li>
              <li><Link href="/blog">Tennis Blog</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.title}>Connect</h4>
            <div className={styles.contactItem}>
              <MapPin size={18} className={styles.icon} />
              <span>Nairobi, Kenya (Westlands & Karen)</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={18} className={styles.icon} />
              <span>+254 XXX XXX XXX</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} className={styles.icon} />
              <span>info@revolutionarytennis.co.ke</span>
            </div>
            <Link href="/book/trial-lesson" className="btn btn-primary" style={{ marginTop: '20px' }}>
              Book Free Trial
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Revolutionary Tennis. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="https://growthlab.co.ke" target="_blank" rel="noopener noreferrer" className={styles.designerLink}>
              Designed by growthlab.co.ke
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
