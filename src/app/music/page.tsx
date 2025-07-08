import MusicAbout from '@/components/sections/MusicAbout';
import MusicForMarketing from '@/components/sections/MusicForMarketing';
import MyDiscography from '@/components/sections/MyDiscography';
import MyMusic from '@/components/sections/MyMusic';
import MyWorks from '@/components/sections/MyWorks';
import FilmScoring from '@/components/sections/FilmScoring';
import SoundDesign from '@/components/sections/SoundDesign';
import React from 'react';

export default function MusicPage() {
  return (
    <main>
      <MusicAbout />
      <MyWorks />
      <MyMusic />
      <MyDiscography />
      <MusicForMarketing />
      <FilmScoring />
      <SoundDesign />
      {/* We will add more music sections here */}
    </main>
  );
}
