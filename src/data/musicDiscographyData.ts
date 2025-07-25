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
        "id" : 0,
        "artist" : "Armia",
        "title" : "Ton",
        "releasedBy" : "Metal Mind",
        "releasedYear" : "2015",
        "myRole" : "recording engineer",
        "albumCoverPath": "Armia-Ton.jpg",
        "spotifyLink" : "https://open.spotify.com/album/66oHP5KDznHe16b68R4dWb?si=YWZq3NUXSh6YOZHnoVCtTQ"
    },
    {
        "id" : 1,
        "artist" : "Armia",
        "title" : "Tam Gdzie Konczy Sie Kraj",
        "releasedBy" : "Metal Mind",
        "releasedYear" : "2016",
        "myRole" : "mixing engineer",
        "albumCoverPath": "Armia-TamGdzieKonczySieKraj.jpg",
        "spotifyLink" : "https://open.spotify.com/album/0u1hPXIbiqDMzhe8PPZkEL?si=tPJ08ijmQ5KQeCBw55aG_A"
    },
    {
        "id" : 2,
        "artist" : "Mrozu",
        "title" : "Zew",
        "releasedBy" : "Gorgo Music",
        "releasedYear" : "2017",
        "myRole" : "recording engineer",
        "albumCoverPath": "Mrozu-Zew.jpg",
        "spotifyLink" : "https://open.spotify.com/album/39iftV4DaBMqUJOAlmTsVW?si=f3PphoxjRDyOXG7cvaLoIQ"
    },
    {
        "id" : 3,
        "artist" : "Mikromusic",
        "title" : "Mikromusic W Capitolu",
        "releasedBy" : "EMI POLAND",
        "releasedYear" : "2014",
        "myRole" : "recording engineer",
        "albumCoverPath": "MikroMusic-WCapitolu.jpg",
        "spotifyLink" : "https://open.spotify.com/album/2zCato03fQeIo17dSEMbnr?si=PWVV5TsnRhiIaKYlBIJxZw"
    },
    {
        "id" : 4,
        "artist" : "Soundrise",
        "title" : "Niemen Nieznany",
        "releasedBy" : "Lou & Rocked Boys",
        "releasedYear" : "2012",
        "myRole" : "keyboards, mixing engineer",
        "albumCoverPath": "Soundrise-NiemenNieznany.jpg",
        "spotifyLink" : "https://open.spotify.com/album/18oNvZgd9YRGv4S2ozIqdX?si=ZfHXAZRwSsmv38hdFJkC3Q"
    },
    {
        "id" : 5,
        "artist" : "Chilli Crew",
        "title" : "A Ty?",
        "releasedBy" : "Catch Them Live",
        "releasedYear" : "2017",
        "myRole" : "mixing/mastering engineer",
        "albumCoverPath": "ChilliCrew-ATy.jpg",
        "spotifyLink" : "https://open.spotify.com/album/5xjpHJcb0STBqafinNdMUp?si=hRr4MaSJStOlSxJaRp9gbw"
    },
    {
        "id" : 6,
        "artist" : "Projekt Volodia",
        "title" : "To Meski Swiat",
        "releasedBy" : "MTJ",
        "releasedYear" : "2013",
        "myRole" : "producer, mixing/mastering engineer",
        "albumCoverPath": "ProjektVolodia-ToMeskiSwiat.jpg",
        "spotifyLink" : "https://open.spotify.com/album/5I9qdkW6qKilYc1WJt0iFS?si=hLt_QhYuRnKao_lPFAjxyw"
    },
    {
        "id" : 7,
        "artist" : "Gaba Kulka",
        "title" : "Kruche",
        "releasedBy" : "Mystic Production",
        "releasedYear" : "2016",
        "myRole" : "assistant engineer",
        "albumCoverPath": "GabaKulka-Kruche.jpg",
        "spotifyLink" : "https://open.spotify.com/album/6b7I1SYtqmMfpVEBo3aLSX?si=eSq9At32RlSSX_gdzTHe7g"
    },
    {
        "id" : 8,
        "artist" : "Piotr Ziola",
        "title" : "Revolving Door",
        "releasedBy" : "Warner Music Poland",
        "releasedYear" : "2016",
        "myRole" : "keyboard player, assistant engineer",
        "albumCoverPath": "PiotrZiola-RevolvingDoor.jpg",
        "spotifyLink" : "https://open.spotify.com/album/5AzZFFyTZnxQ8lqNlTOp88?si=IXPQLeNcS1yQObxCZzw7Bg"
    },
    {
        "id" : 9,
        "artist" : "Happysad",
        "title" : "Cialo Obce",
        "releasedBy" : "Mystic Production",
        "releasedYear" : "2017",
        "myRole" : "recording engineer",
        "albumCoverPath": "Happysad-CialoObce.jpg",
        "spotifyLink" : "https://open.spotify.com/album/0dgGBmKM0v0PkgA3Tbmps7?si=UTErWFkuSyi_qeYx2JO0Uw"
    },
    {
        "id" : 10,
        "artist" : "Organizm",
        "title" : "Czy Ty Tez Tak Masz",
        "releasedBy" : "Thin Man Records",
        "releasedYear" : "2019",
        "myRole" : "recording engineer",
        "albumCoverPath": "Organizm-CzyTyTezTakMasz.jpg",
        "spotifyLink" : "https://open.spotify.com/album/3FsExorL7RA1XGHpbIjzqn?si=y9O79AkMTJeWO59DjB_myA"
    },
    {
        "id" : 11,
        "artist" : "Hey",
        "title" : "Blysk",
        "releasedBy" : "Kayax",
        "releasedYear" : "2016",
        "myRole" : "recording engineer",
        "albumCoverPath": "Hey-Blysk.jpg",
        "spotifyLink" : "https://open.spotify.com/album/7qVyTpnmlR8JnygYN7hBzf?si=3892Z1nYSUWu60IwRi4-kg"
    },
    {
        "id" : 12,
        "artist" : "Hey",
        "title" : "CDN",
        "releasedBy" : "Kayax",
        "releasedYear" : "2017",
        "myRole" : "recording/mixing engineer",
        "albumCoverPath": "Hey-CDN.jpg",
        "spotifyLink" : "https://open.spotify.com/album/0JreRHJacFoENGbetYpxwT?si=-u4E7w-sRiSX8GsNiAdRyw"
    },
    {
        "id" : 13,
        "artist" : "Leski",
        "title" : "Milosc. Strona B",
        "releasedBy" : "Warner Music Poland",
        "releasedYear" : "2018",
        "myRole" : "recording engineer",
        "albumCoverPath": "Leski-MiloscStronaB.jpg",
        "spotifyLink" : "https://open.spotify.com/album/7fj6LM3V3HVZNkkzDWYwmi?si=s06m22C8R-mgth0a7hwaAg"
    },
    {
        "id" : 14,
        "artist" : "Limboski",
        "title" : "Poliamoria",
        "releasedBy" : "Sony Music Entertainment",
        "releasedYear" : "2018",
        "myRole" : "recording engineer",
        "albumCoverPath": "Limboski-Poliamoria.jpg",
        "spotifyLink" : "https://open.spotify.com/album/6hMiWbOmeZwdfI5oKqYZBj?si=yMOh1qtIS3yrSyW-Xg_Vpw"
    },
    {
        "id" : 15,
        "artist" : "Limboski",
        "title" : "Ucieczka Saula",
        "releasedBy" : "Polskie Radio S.A.",
        "releasedYear" : "2019",
        "myRole" : "producer, recording engineer, mixing/mastering engineer",
        "albumCoverPath": "Limboski-UcieczkaSaula.jpg",
        "spotifyLink" : "https://open.spotify.com/album/2JRQJEZhnIaqPlIuogh9jG?si=uiInEcZQTYOTfT47FUamWA"
    },
    {
        "id" : 16,
        "artist" : "Hetane",
        "title" : "Pelnia",
        "releasedBy" : "Hetane",
        "releasedYear" : "2020",
        "myRole" : "mixing/mastering engineer",
        "albumCoverPath": "Hetane-Pelnia.jpg",
        "spotifyLink" : "https://open.spotify.com/album/54tvA5F5GXBfqPUCqABMHo?si=lehckhH_TkuJ1v2z18yJuw"
    },
    {
        "id" : 17,
        "artist" : "Kasia Lins",
        "title" : "Wiersz Ostatni",
        "releasedBy" : "Universal Music",
        "releasedYear" : "2018",
        "myRole" : "recording/mixing engineer",
        "albumCoverPath": "KasiaLins-WierszOstatni.jpg",
        "spotifyLink" : "https://open.spotify.com/album/39TlucZA8eDxCimsUB6clY?si=QO7t0932RcewK8DU_jIgTA"
    },
    {
        "id" : 18,
        "artist" : "Jamal",
        "title" : "1994",
        "releasedBy" : "Pomaton EMI",
        "releasedYear" : "2017",
        "myRole" : "recording engineer",
        "albumCoverPath": "Jamal-1994.jpg",
        "spotifyLink" : "https://open.spotify.com/album/1OX9v3ZALyrr8AQV8bnbG2?si=kfG6r0EgTYWUN_BdY2ffWg"
    },
    {
        "id" : 19,
        "artist" : "Terrific Sunday",
        "title" : "Strangers, Lovers",
        "releasedBy" : "Sony Music Entertainment",
        "releasedYear" : "2015",
        "myRole" : "assistant engineer",
        "albumCoverPath": "TerrificSunday-StrangersLovers.jpg",
        "spotifyLink" : "https://open.spotify.com/album/3VgsyBToVzcLdQwe2udmnA?si=0HP1OacPTcy2Cr_4Hp58JQ"
    },
    {
        "id" : 20,
        "artist" : "Pogodno",
        "title" : "Sokiści chcą miłości",
        "releasedBy" : "Mystic Production",
        "releasedYear" : "2017",
        "myRole" : "recording engineer",
        "albumCoverPath": "Pogodno-SokisciChcaMilosci.jpg",
        "spotifyLink" : "https://open.spotify.com/album/2ZBQjRrYwUPo7wvVzmZ4Hw?si=TtA43CpMRkKeuWqG1QfQRw"
    },
    {
        "id" : 21,
        "artist" : "BiFF",
        "title" : "Legendy",
        "releasedBy" : "Makumba Music",
        "releasedYear" : "2018",
        "myRole" : "recording/mixing engineer",
        "albumCoverPath": "Biff-Legendy.jpg",
        "spotifyLink" : "https://open.spotify.com/album/0k3gTvqV9ubtUV8SYJit8K?si=BFzHG9_VRum4nr9ZU-Ge3A"
    },
    {
        "id" : 22,
        "artist" : "Rebizandt",
        "title" : "Non Average White Album",
        "releasedBy" : "Saints of Suburbia",
        "releasedYear" : "2019",
        "myRole" : "keyboards, recording engineer",
        "albumCoverPath": "Rebizandt-NonAverageWhiteAlbum.jpg",
        "spotifyLink" : "https://open.spotify.com/album/6JHe20q2qY7oPRZbPVH3zY?si=hauaV-ycRlSpcHCrZqzUxQ"
    },
    {
        "id" : 23,
        "artist" : "Naaman",
        "title" : "Tak!",
        "releasedBy" : "Artakcja",
        "releasedYear" : "2014",
        "myRole" : "keyboards, recording engineer",
        "albumCoverPath": "Naaman-Tak.jpg",
        "spotifyLink" : "https://open.spotify.com/album/5Cbevqe7cNcJ7VMvKfAe9r?si=8NhLBj2ISXWpZUDnZmhZyg"
    },
    {
        "id" : 24,
        "artist" : "Bajzel",
        "title" : "Pararaj",
        "releasedBy" : "Bajzel",
        "releasedYear" : "2021",
        "myRole" : "recording/mixing engineer",
        "albumCoverPath": "Bajzel-Pararaj.jpg",
        "spotifyLink" : "https://open.spotify.com/album/46BeezurkZ2d2pBYpcaXTM?si=_IbBLf4gSlqEwxlG3tWj6w"
    },
    {
        "id" : 25,
        "artist" : "Budyn / Pikula",
        "title" : "Spiewy Zastolne",
        "releasedBy" : "Mystic Production",
        "releasedYear" : "2020",
        "myRole" : "recording/mixing engineer",
        "albumCoverPath": "BudynPikula-SpiewyZastolne.jpg",
        "spotifyLink" : "https://open.spotify.com/album/3fLCDGIkksEOI04PzTiibd?si=8W2CdwAcQhu1c2-J-SnbYw"
    },
    {
        "id" : 26,
        "artist" : "Katarzyna Groniec",
        "title" : "Ach!",
        "releasedBy" : "Pomaton",
        "releasedYear" : "2018",
        "myRole" : "recording/mixing engineer",
        "albumCoverPath": "KatarzynaGroniec-Ach.jpg",
        "spotifyLink" : "https://open.spotify.com/album/0QtZHkSnYdszPLFsNnbszV?si=wQd4t6tCTVy_wotcT1pGhg"
    },
    {
        "id" : 27,
        "artist" : "Hello My Sunshine",
        "title" : "Wolno Nam Zyc Wolno",
        "releasedBy" : "Hello My Sunshine",
        "releasedYear" : "2018",
        "myRole" : "recording engineer",
        "albumCoverPath": "HelloMySunshine-WolnoNamZycWolno.jpg",
        "spotifyLink" : "https://open.spotify.com/album/5ABoB73zAvUNfAfAQBCcOB?si=Il2zE-tTQ7a2Y3PtCa12gQ"
    },
    {
        "id" : 28,
        "artist" : "Natalia Kukulska",
        "title" : "Osmy Plan",
        "releasedBy" : "Warner Music Poland",
        "releasedYear" : "2015",
        "myRole" : "keyboards, assistant engineer",
        "albumCoverPath": "NataliaKukulska-8Plan.jpg",
        "spotifyLink" : "https://open.spotify.com/album/0MnhHRmJZUlyzztYA8UgR7?si=AlMaJqU0Tlq53d_frQoIEQ"
    },
    {
        "id" : 29,
        "artist" : "Idiothead",
        "title" : "Przeciw Tobie",
        "releasedBy" : "Idiothead",
        "releasedYear" : "2020",
        "myRole" : "mixing and mastering",
        "albumCoverPath": "IdiotHead-PrzeciwTobie.jpg",
        "spotifyLink" : "https://open.spotify.com/album/3OyrA7qJ94pvstzeuGwmF9?si=6y75NLqkRESmmXnTdQzYuw"
    },
    {
        "id" : 30,
        "artist" : "Pikes",
        "title" : "We are hungry for the love from the 90's that we don't remember",
        "releasedBy" : "Catch Them Live",
        "releasedYear" : "2018",
        "myRole" : "mixing and mastering",
        "albumCoverPath": "Pikes-WeAreHungry.jpg",
        "spotifyLink" : "https://open.spotify.com/album/6gQr86PzY6jyTp97NUiqrL?si=djttl_ceSp2Sk1tDfNBmdA"
    }
];

// Sort albums by release year, descending
albums.sort((a, b) => parseInt(b.releasedYear) - parseInt(a.releasedYear));

export const musicDiscographyData = albums;
