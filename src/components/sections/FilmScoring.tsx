import React from 'react';
import { musicFilmScoring } from '@/data/musicFilmScoring';
import VideoCard from '../cards/VideoCard';
import styles from './FilmScoring.module.scss';

const FilmScoring = () => {
  return (
    <div className={styles.filmScoring}>
      <header className={styles.header}>
        <h1>Film Scoring</h1>
        <p>My approach to writing music that serves the video.</p>
      </header>
      <div className={styles.videoContainer}>
        {musicFilmScoring.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default FilmScoring; 