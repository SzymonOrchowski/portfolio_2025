import React from 'react';
import ContactForm from '@/components/forms/ContactForm';
import styles from './ContactPage.module.scss';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <header className={styles.header}>
        <h1>Contact Me</h1>
        <p>Have a question or want to work together? Drop me a line!</p>
      </header>
      <ContactForm />
    </div>
  );
} 