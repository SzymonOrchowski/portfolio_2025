export interface Album {
  id: number;
  artist: string;
  title: string;
  releasedBy: string;
  releasedYear: string;
  myRole: string;
  albumCoverPath: string;
  spotifyLink: string;
}

const albums: Album[] = [
    {
        id : 0,
        artist : "Armia",
        title : "Ton",
        releasedBy : "Metal Mind",
        releasedYear : "2015",
        myRole : "recording engineer",
        albumCoverPath: "Armia-Ton.jpg",
        spotifyLink : "https://open.spotify.com/album/66oHP5KDznHe16b68R4dWb?si=YWZq3NUXSh6YOZHnoVCtTQ"
    },
    {
        id : 1,
        artist : "Armia",
        title : "Tam Gdzie Konczy Sie Kraj",
        releasedBy : "Metal Mind",
        releasedYear : "2016",
        myRole : "mixing engineer",
        albumCoverPath: "Armia-TamGdzieKonczySieKraj.jpg",
        spotifyLink : "https://open.spotify.com/album/0u1hPXIbiqDMzhe8PPZkEL?si=tPJ08ijmQ5KQeCBw55aG_A"
    },
    {
        id : 2,
        artist : "Mrozu",
        title : "Zew",
        releasedBy : "Gorgo Music",
        releasedYear : "2017",
        myRole : "recording engineer",
        albumCoverPath: "Mrozu-Zew.jpg",
        spotifyLink : "https://open.spotify.com/album/39iftV4DaBMqUJOAlmTsVW?si=f3PphoxjRDyOXG7cvaLoIQ"
    },
    // ... add the rest of your albums here
];

// Sort albums by release year, descending
albums.sort((a, b) => parseInt(b.releasedYear) - parseInt(a.releasedYear));

export const musicDiscographyData = albums;
