import React from 'react';
import Link from 'next/link';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.welcomePageContainer}>
      <div className={styles.welcomeBox}>
        <div className={styles.welcomeBoxHeaderBox}>
          <header>
            Hi, <br />
            I&apos;m <br />
            <span>
              <span className={styles.welcomeBoxHeaderBoxLetterS}>S</span>zymon{' '}
              <span className={styles.welcomeBoxHeaderBoxLetterO}>O</span>
              rchowski,
            </span>
            <br />
            junior developer and music producer
            <br />
          </header>
        </div>
        <div className={styles.welcomeBoxPortfolioButtonsBox}>
          <Link href="/coding" style={{ textDecoration: 'none' }}>
            <div className={`${styles.portfolioButton} ${styles.portfolioButton1}`}>
              My Dev Portfolio
            </div>
          </Link>
          <Link href="/music" style={{ textDecoration: 'none' }}>
            <div className={`${styles.portfolioButton} ${styles.portfolioButton2}`}>
              My Music Portfolio
            </div>
          </Link>
        </div>
        <div className={styles.welcomeBoxContactButtonBox}>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div className={styles.contactMeButton}>Contact me!</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
