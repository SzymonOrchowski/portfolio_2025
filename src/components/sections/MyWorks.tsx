'use client';

import React, { useState } from 'react';
import { myWorkVideos } from '@/data/myWorkVideos';
import VideoCard from '../cards/VideoCard';
import styles from './MyWorks.module.scss';

const MyWorks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  const totalPages = Math.ceil(myWorkVideos.length / videosPerPage);

  const paginatedVideos = myWorkVideos.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.myWorks}>
      <header className={styles.myWorksHeader}>
        <h1>My Works</h1>
      </header>

      <div className={styles.videoCardsContainer}>
        {paginatedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <div className={styles.paginationBox}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? styles.active : ''}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyWorks;
