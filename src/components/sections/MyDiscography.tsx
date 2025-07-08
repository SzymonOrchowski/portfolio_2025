import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { musicDiscographyData } from '@/data/musicDiscographyData';
import styles from './MyDiscography.module.scss';
import spotifyIcon from '@/img/icons/iconmonstr-spotify-1-240.png';

const MyDiscography = () => {
  return (
    <div className={styles.myDiscography}>
      <header className={styles.myDiscographyHeader}>
        <h1>My Discography</h1>
      </header>
      <div className={styles.albumCardsContainer}>
        {musicDiscographyData.map((album) => (
          <div key={album.id} className={styles.albumCard}>
            <div className={styles.albumCardInner}>
              <div className={styles.albumCardFront}>
                <Image
                  src={`/img/cd-covers/${album.albumCoverPath}`}
                  alt={`${album.artist} - ${album.title} cover`}
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.albumCardBack}>
                <div className={styles.artist}>{album.artist}</div>
                <div className={styles.title}>{album.title}</div>
                <div className={styles.released}>
                  Released by {album.releasedBy}, {album.releasedYear}
                </div>
                <div className={styles.myRole}>{album.myRole}</div>
                <Link
                  href={album.spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.spotifyLink}
                >
                  <Image src={spotifyIcon} alt="Listen on Spotify" width={50} height={50} />
                  <span>Listen on Spotify</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDiscography;
