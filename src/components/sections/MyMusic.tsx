'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { musicAudioData, timeFormat, Track } from '@/data/musicAudioData';
import styles from './MyMusic.module.scss';

// Import your icons here. Make sure you've copied them to the public/img folder
import playButtonIcon from '@/img/icons/audioplayer/iconmonstr-media-control-4-240.png';
import pauseButtonIcon from '@/img/icons/audioplayer/iconmonstr-media-control-8-240.png';
import prevButtonIcon from '@/img/icons/audioplayer/iconmonstr-media-control-33-240.png';
import nextButtonIcon from '@/img/icons/audioplayer/iconmonstr-media-control-29-240.png';
import volumeButtonIcon from '@/img/icons/audioplayer/iconmonstr-audio-5-240.png';
import muteButtonIcon from '@/img/icons/audioplayer/iconmonstr-audio-9-240.png';

const MyMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Track>(musicAudioData[0]);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTrackSelect = (track: Track) => {
    setCurrentSong(track);
    setIsPlaying(true);
  };

  const handleNextSong = () => {
    const nextSongIndex = currentSong.number % musicAudioData.length;
    setCurrentSong(musicAudioData[nextSongIndex]);
    setIsPlaying(true);
  };
  
  const handlePrevSong = () => {
    const prevSongIndex = (currentSong.number - 2 + musicAudioData.length) % musicAudioData.length;
    setCurrentSong(musicAudioData[prevSongIndex]);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={styles.myMusic}>
      <header className={styles.myMusicHeader}>
        <h1>My Original Music</h1>
        <p>A few examples of my work as an independent composer.</p>
      </header>

      <audio
        ref={audioRef}
        src={`/audio/${currentSong.filepath}`}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextSong}
      />

      <div className={styles.audioPlayerFull}>
        <div className={styles.audioPlayerTopBar}>
          <button onClick={handlePlayPause} className={styles.playPauseButton}>
            <Image src={isPlaying ? pauseButtonIcon : playButtonIcon} alt="Play/Pause" width={70} height={70} />
          </button>
          <div className={styles.currentSongInfo}>
            <b>{currentSong.artist}</b>
            <span>{currentSong.title}</span>
          </div>
        </div>

        <div className={styles.audioPlayerTrackNavBar}>
          <div className={styles.trackNavButtons}>
            <button onClick={handlePrevSong}><Image src={prevButtonIcon} alt="Previous" width={28} height={28} /></button>
            <button onClick={handleNextSong}><Image src={nextButtonIcon} alt="Next" width={28} height={28} /></button>
          </div>
          <input
            type="range"
            className={styles.progressBar}
            value={currentTime}
            max={audioRef.current?.duration || 0}
            onChange={handleSeek}
            step="0.01"
          />
          <div className={styles.timeDisplay}>
            {timeFormat(currentTime)} / {currentSong.duration}
          </div>
          <div className={styles.volumeControl}>
            <button onClick={handleMute}>
              <Image src={isMuted ? muteButtonIcon : volumeButtonIcon} alt="Mute/Unmute" width={24} height={24} />
            </button>
          </div>
        </div>

        <div className={styles.trackList}>
          {musicAudioData.map((track) => (
            <div
              key={track.number}
              className={`${styles.track} ${currentSong.number === track.number ? styles.activeTrack : ''}`}
              onClick={() => handleTrackSelect(track)}
            >
              <span>{track.number}. {track.artist} {track.title && `- ${track.title}`}</span>
              <span>{track.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyMusic;
