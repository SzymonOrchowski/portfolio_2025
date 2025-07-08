import React from 'react';
import Image from 'next/image';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.webDevAboutMe}>
      <div className={styles.webDevAboutMeContainer}>
        <div className={styles.webDevAboutMeContent}>
          <header>
            <h1>About me</h1>
          </header>
          <div className={styles.webDevAboutMeContentText}>
            <p>
              I&apos;m Szymon. I&apos;m a junior full-stack developer. I like adventures,
              and I try to make my life a big adventure by doing creative things
              and projects together with outstanding people I have the luck to
              meet on my life path. I love discovering new technologies and
              exploring opportunities for how to use them in life.
            </p>
          </div>
        </div>
        <div className={styles.webDevAboutMePhoto}>
          {/* The image path will need to be updated once you add the image */}
          <Image
            src="/img/DevPhoto.jpg"
            alt="A photo of Szymon Orchowski"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
