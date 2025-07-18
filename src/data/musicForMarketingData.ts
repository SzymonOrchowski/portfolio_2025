export interface MarketingVideo {
  id: number;
  link: string;
  hasDescription: boolean;
  // The description object is optional here
  description?: {
    artist: string;
    title: string;
    releasedBy: string;
    releasedInYear: string;
    myRole: string;
  };
}

export const musicForMarketingData: MarketingVideo[] = [
  {
    id: 1,
    link: 'https://www.youtube.com/embed/vmD8Lefi75I',
    hasDescription: false,
  },
  {
    id: 2,
    link: 'https://www.youtube.com/embed/49Pqd2r7GZs',
    hasDescription: false,
  },
  {
    id: 3,
    link: 'https://www.youtube.com/embed/lpCWe_YrK-E',
    hasDescription: false,
  },
  {
    id: 4,
    link: 'https://www.youtube.com/embed/JTFAVWKzo-c',
    hasDescription: false,
  },
];
