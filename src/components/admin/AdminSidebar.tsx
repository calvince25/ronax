'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  FileText, 
  Tag, 
  LogOut,
  Users,
  Image as ImageIcon,
  MessageSquare,
  Calendar
} from 'lucide-react';
import styles from './AdminSidebar.module.css';

const navLinks = [
  { href: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard', exact: true },
  { href: '/admin/bookings', icon: <CalendarCheck size={20} />, label: 'Bookings', exact: false },
  { href: '/admin/events', icon: <Calendar size={20} />, label: 'Events', exact: false },
  { href: '/admin/messages', icon: <MessageSquare size={20} />, label: 'Messages', exact: false },
  { href: '/admin/blog', icon: <FileText size={20} />, label: 'Blog Posts', exact: false },
  { href: '/admin/prices', icon: <Tag size={20} />, label: 'Pricing', exact: false },
  { href: '/admin/gallery', icon: <ImageIcon size={20} />, label: 'Gallery', exact: false },
  { href: '/admin/users', icon: <Users size={20} />, label: 'Users', exact: false },
];

const AdminSidebar = ({ mobileOpen, setMobileOpen }: { mobileOpen: boolean, setMobileOpen: (o: boolean) => void }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <aside className={`${styles.sidebar} ${mobileOpen ? styles.mobileOpen : ''}`}>
      <div className={styles.top}>
        <div className="flex justify-between items-center mb-8 lg:mb-0">
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🎾</span>
            <span className={styles.logoText}>AdminPanel</span>
          </div>
          <button onClick={() => setMobileOpen(false)} className="lg:hidden text-white/50 hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      <nav className={styles.nav}>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${isActive(link.href, link.exact) ? styles.activeLink : ''}`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.bottom}>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

    </aside>
  );
};

export default AdminSidebar;
