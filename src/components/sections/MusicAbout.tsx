import React from 'react';
import styles from './MusicAbout.module.scss';
import SlideAutoGallery from '../common/SlideAutoGallery';

const MusicAbout = () => {
  return (
    <div className={styles.musicAboutMe}>
      <div className={styles.musicAboutMeContainer}>
        <div className={styles.musicAboutMeText}>
          <header className={styles.musicAboutMeTextHeader}>
            <h1>Me in the music</h1>
          </header>
          <div className={styles.musicAboutMeTextParagraphs}>
            <p>
              I am a music producer, sound engineer, and a composer, with over 20
              years of experience working in the music industry. For me, music
              is people, their emotions, sensitivity, their stories, and
              dreams. Every day I deal with sound to help people express their
              messages. Sometimes I have to polish a mix or master of another
              great record. Sometimes I have to write music to subtly highlight
              another great poem. Sometimes I need to make a sound design for
              another interesting animation. Every day is a different
              adventure.
            </p>
            <p>
              I like to listen to people and to what they have to say. Everyone
              is different, and every commission is different, so I am glad
              that I can help people in many different ways. Every time I try
              to use all of my skills and experience to develop products that
              can reach their audiences.
            </p>
            <p>
              I am grateful for the trust and the opportunity to participate in
              so many wonderful and unique projects, and I am open to another
              adventure in the world of sounds.
            </p>
          </div>
        </div>
        <div className={styles.musicAboutMePhotoContainer}>
          <SlideAutoGallery />
        </div>
      </div>
    </div>
  );
};

export default MusicAbout;
