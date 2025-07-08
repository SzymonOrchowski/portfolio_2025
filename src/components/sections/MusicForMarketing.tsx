import React from 'react';
import { musicForMarketingData } from '@/data/musicForMarketingData';
import VideoCard from '../cards/VideoCard';
import styles from './MusicForMarketing.module.scss';

const MusicForMarketing = () => {
  return (
    <div className={styles.musicForMarketing}>
      <header className={styles.header}>
        <h1>Advertising Music</h1>
        <p>Examples of my work as a composer of commercial music and sound designer.</p>
      </header>
      <div className={styles.videosContainer}>
        {musicForMarketingData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default MusicForMarketing; 