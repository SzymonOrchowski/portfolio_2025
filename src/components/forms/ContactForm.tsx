'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    // Show a "sending" message
    setStatusMessage('Sending...');

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className={styles.contactFormContainer}>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={8} required />
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
      {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
    </div>
  );
};

export default ContactForm; 