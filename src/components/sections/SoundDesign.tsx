import React from 'react';
import { musicSoundDesign } from '@/data/musicSoundDesign';
import VideoCard from '../cards/VideoCard';
import styles from './SoundDesign.module.scss';

const SoundDesign = () => {
  return (
    <div className={styles.soundDesign}>
      <header className={styles.header}>
        <h1>Sound Design</h1>
        <p>
          Not only music is my passion. Creating imaginary worlds from the
          sound perspective is my another huge adventure.
        </p>
      </header>
      <div className={styles.videosContainer}>
        {musicSoundDesign.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default SoundDesign; 