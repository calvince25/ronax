'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Trophy, Users, MapPin, Calculator, BookOpen, MessageSquare, Briefcase } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    {
      name: 'Coaching',
      href: '/coaching',
      dropdown: [
        { name: 'Private Lessons', href: '/coaching/private-lessons', icon: <Users size={16} /> },
        { name: 'Group Classes', href: '/coaching/group-classes', icon: <Users size={16} /> },
        { name: 'Junior Programs', href: '/coaching/junior-tennis', icon: <Trophy size={16} /> },
        { name: 'Adult Beginners', href: '/coaching/adult-beginners', icon: <BookOpen size={16} /> },
        { name: 'Advanced Training', href: '/coaching/advanced-training', icon: <Trophy size={16} /> },
        { name: 'Tennis Camps', href: '/coaching/tennis-camps', icon: <Briefcase size={16} /> },
      ]
    },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'Coach Ronax', href: '/about/coach-ronax', icon: <Users size={16} /> },
        { name: 'Certifications', href: '/about/certifications', icon: <Trophy size={16} /> },
        { name: 'Gallery', href: '/about/gallery', icon: <BookOpen size={16} /> },
        { name: 'Results', href: '/about/results', icon: <Trophy size={16} /> },
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: <Calculator size={16} /> },
    {
      name: 'Locations',
      href: '/locations',
      dropdown: [
        { name: 'Nairobi', href: '/locations/nairobi', icon: <MapPin size={16} /> },
        { name: 'Westlands', href: '/locations/westlands', icon: <MapPin size={16} /> },
        { name: 'Karen', href: '/locations/karen', icon: <MapPin size={16} /> },
      ]
    },
    { name: 'Blog', href: '/blog', icon: <BookOpen size={16} /> },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>🎾</div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>REVOLUTIONARY</span>
            <span className={styles.logoSub}>TENNIS</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <div key={link.name} className={styles.navItem}>
              {link.dropdown ? (
                <>
                  <button 
                    className={styles.navLink} 
                    onClick={() => toggleDropdown(link.name)}
                    onMouseEnter={() => setActiveDropdown(link.name)}
                  >
                    {link.name} <ChevronDown size={14} />
                  </button>
                  <div 
                    className={`${styles.dropdown} ${activeDropdown === link.name ? styles.show : ''}`}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.dropdown.map((item) => (
                      <Link key={item.name} href={item.href} className={styles.dropdownItem}>
                         {item.icon} {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link href="/book/trial-lesson" className="btn btn-primary">
            Book a Session
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <div key={link.name} className={styles.mobileNavItem}>
            {link.dropdown ? (
              <>
                <button className={styles.mobileNavLink} onClick={() => toggleDropdown(link.name)}>
                  {link.name} <ChevronDown size={14} className={activeDropdown === link.name ? styles.rotate : ''} />
                </button>
                <div className={`${styles.mobileDropdown} ${activeDropdown === link.name ? styles.show : ''}`}>
                  {link.dropdown.map((item) => (
                    <Link key={item.name} href={item.href} className={styles.mobileDropdownItem} onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link href={link.href} className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            )}
          </div>
        ))}
        <div className={styles.mobileFooter}>
          <Link href="/book/trial-lesson" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setIsOpen(false)}>
            Book a Session
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
