import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import React from 'react';

export default function WebDevPage() {
  return (
    <main>
      <About />
      <Projects />
      <Education />
      <Skills />
    </main>
  );
} 