'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/common/ThemeToggle';
import styles from './Navbar.module.scss';
import Image from 'next/image';

// You will need to copy these icons from the old project
import menuIcon from '@/img/icons/iconmonstrMenu.png';
import xMarkIcon from '@/img/icons/iconmonstrXmark.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/webdev', label: 'Developer' },
    { href: '/music', label: 'Music' },
    { href: '/contact', label: 'Contact' }
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Szymon Orchowski
        </Link>

        <div
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            src={menuOpen ? xMarkIcon : menuIcon}
            alt="Menu"
            width={30}
            height={30}
          />
        </div>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? styles.active : ''}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.themeToggleDesktop}>
            <ThemeToggle />
          </div>
        </div>
        <div className={styles.themeToggleMobile}>
            <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
