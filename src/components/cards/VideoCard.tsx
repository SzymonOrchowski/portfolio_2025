import React from 'react';
import { Video } from '@/data/myWorkVideos';
import styles from './VideoCard.module.scss';

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  // Determine the title safely, providing a fallback.
  const frameTitle = `${video.id} ${
    video.description?.title || 'Portfolio Video'
  }`;

  return (
    <div className={styles.videoCard}>
      <div className={styles.videoPlayer}>
        <iframe
          src={`${video.link}?rel=0&modestbranding=1`}
          allow="fullscreen"
          title={frameTitle}
        ></iframe>
      </div>
      {/*
        This is the crucial check. We verify both 'hasDescription' is true 
        AND the 'description' object itself exists before trying to render it.
      */}
      {video.hasDescription && video.description && (
        <div className={styles.videoDescription}>
          <div className={styles.artist}>{video.description.artist}</div>
          <div className={styles.title}>"{video.description.title}"</div>
          <div className={styles.releaseInfo}>
            Released by {video.description.releasedBy} in{' '}
            {video.description.releasedInYear}
          </div>
          <div className={styles.myRole}>{video.description.myRole}</div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;