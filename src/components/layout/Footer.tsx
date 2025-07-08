import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

// Make sure you have these icons in src/img/icons/
import iconmonstrLinkedin from '@/img/icons/iconmonstrLinkedin.png';
import iconmonstrGithub from '@/img/icons/iconmonstrGithub.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialLinks}>
          <Link
            href="https://www.linkedin.com/in/szymon-orchowski-a52923197/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image src={iconmonstrLinkedin} alt="LinkedIn" width={30} height={30} />
          </Link>
          <Link
            href="https://github.com/SzymonOrchowski/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Image src={iconmonstrGithub} alt="GitHub" width={30} height={30} />
          </Link>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Szymon Orchowski. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
