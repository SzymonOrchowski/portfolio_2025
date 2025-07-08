'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { musicPhotos } from '@/data/musicPhotos';
import styles from './SlideAutoGallery.module.scss';

const SlideAutoGallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === musicPhotos.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Change image every 4 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [index]);

  return (
    <div className={styles.galleryContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={styles.imageWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={musicPhotos[index].name}
            alt={`Gallery image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0} // Prioritize loading the first image
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideAutoGallery; 