export interface Track {
  number: number;
  filepath: string;
  artist: string;
  title: string;
  duration: string;
}

export const musicAudioData: Track[] = [
    {
        number: 1,
        filepath: 'EstherKoch-Symptoms(BBCSoundFirst).mp3',
        artist: 'Esther Koch',
        title: 'Symptoms (BBC Sound First)',
        duration: '3:48',
    },
    {
        number: 2,
        filepath: 'SoundDesignAndMusicForTheScriptFromBBCSoundFirst.mp3',
        artist:
        'Sound Design and Music for the script from BBC Sound First Competition',
        title: '',
        duration: '4:41',
    },
    {
        number: 3,
        filepath: 'SzymonOrchowski-CentralStation.mp3',
        artist: 'Szymon Orchowski',
        title: 'Central station',
        duration: '1:28',
    },
    {
        "number" : 4,
        "filepath" : "SzymonOrchowski-BleedingFingers.mp3",
        "artist" : "Szymon Orchowski",
        "title" : "Bleeding fingers",
        "duration" : "2:06"
    },
    {
        "number" : 5,
        "filepath" : "SzymonOrchowski-Sextet.mp3",
        "artist" : "Szymon Orchowski",
        "title" : "Sextet",
        "duration" : "2:20"
    },
    {
        "number" : 6,
        "filepath" : "SzymonOrchowski-Soundscape.mp3",
        "artist" : "Szymon Orchowski",
        "title" : "Soundscape",
        "duration" : "2:13"
    },
    {
        "number" : 7,
        "filepath" : "SzymonOrchowski-OrchestralPiece.mp3",
        "artist" : "Szymon Orchowski",
        "title" : "Orchestral Piece op. 12",
        "duration" : "1:57"
    },
    {
        "number" : 8,
        "filepath" : "FlyingMoses-DownTheHill.mp3",
        "artist" : "Flying Moses",
        "title" : "Down The Hill",
        "duration" : "4:24"
    },
    {
        "number" : 9,
        "filepath" : "FlyingMoses-Waiting.mp3",
        "artist" : "Flying Moses",
        "title" : "Waiting",
        "duration" : "4:58"
    },
    {
        "number" : 10,
        "filepath" : "FlyingMoses-TheMacabrey.mp3",
        "artist" : "Flying Moses",
        "title" : "The Macabrey",
        "duration" : "4:25"
    },
    {
        "number" : 11,
        "filepath" : "AdamSiemienczyk-Sanja.mp3",
        "artist" : "Adam Siemienczyk",
        "title" : "Sanja",
        "duration" : "41:52"
    }
];

// Utility function to format time from seconds to MM:SS
export const timeFormat = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
