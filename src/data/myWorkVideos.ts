export interface Video {
  id: number;
  link: string;
  hasDescription: boolean;
  description?: {
    artist: string;
    title: string;
    releasedBy: string;
    releasedInYear: string;
    myRole: string;
  };
}

export const myWorkVideos: Video[] = [
  {
    id: 32,
    link: 'https://www.youtube.com/embed/8OLWvLgOueI',
    hasDescription: true,
    description: {
      artist: 'Skytruck feat. Jelonek',
      title: 'Zly krok',
      releasedBy: 'Skytruck',
      releasedInYear: '2022',
      myRole: 'mixing and mastering',
    },
  },
  {
    id: 31,
    link: 'https://www.youtube.com/embed/IatgfByNJ3s',
    hasDescription: true,
    description: {
      artist: 'Rebizandt',
      title: 'List',
      releasedBy: 'Rebizandt',
      releasedInYear: '2022',
      myRole: 'mixing and mastering',
    },
  },
  {
    id: 2,
    link: 'https://www.youtube.com/embed/DBZxgUzUHU0',
    hasDescription: true,
    description: {
      artist: 'Dominika Barabas',
      title: 'Trotyl',
      releasedBy: 'Dominika Barabas',
      releasedInYear: '2020',
      myRole: 'production, mixing and mastering',
    },
  },
  // ... add the rest of your videos here
];
