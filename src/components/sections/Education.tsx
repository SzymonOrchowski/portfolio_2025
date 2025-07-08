import React from 'react';
import Image from 'next/image';
import styles from './Education.module.scss';

const Education = () => {
  return (
    <div className={styles.webDevEducation}>
      <div className={styles.webDevEducationBackground}>
        {/* These image paths will need to be updated */}
        <div className={styles.ncImageContainer}>
          <Image
            src="/img/education/Northcoders.png"
            alt="Northcoders"
            layout="fill"
            objectFit="cover"
            className={styles.ncImage}
          />
        </div>
        <div className={styles.ncLogoImageContainer}>
          <Image
            src="/img/education/NorthcodersLOGO.png"
            alt="Northcoders Logo"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className={styles.webDevEducationContainer}>
        <header>
          <h1>Education</h1>
        </header>
        <div className={styles.webDevEducationNorthcoders}>
          <div className={styles.webDevEducationTitle}>Northcoders</div>
          <div className={styles.webDevEducationDescription}>
            <p>
              The 13-weeks long full-time course covered a wide range of
              concepts from programming fundamentals through to back-end and
              front-end.
            </p>
            <p>
              The expansive curriculum gave me an opportunity to learn both
              functional and object-oriented programming, along with
              industry-standard practices such as TDD (test-driven
              development), pair programming, and MVC architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
