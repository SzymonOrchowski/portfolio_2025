export interface Project {
  id: number;
  name: string;
  subheading: string;
  description: string;
  repoLink: string;
  deployedLink: string;
  imageLink: string;
  releaseDate: string;
  visible: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'My portfolio website',
    subheading: '',
    description:
      'This portfolio website is made in React.js with some additional usage of EmailJs and three.js frameworks and styled in CSS.',
    repoLink: 'https://github.com/SzymonOrchowski/portfolio',
    deployedLink: 'http://www.szymonorchowski.co.uk',
    imageLink: '/PortfolioWebsiteProject.jpg',
    releaseDate: '',
    visible: true,
  },
  {
    id: 2,
    name: 'Board Games World',
    subheading: 'Northcoders Front-end project',
    description:
      'Front-end project of a web application made in React.js / HTML / CSS, that let users exploring and interacting with data from HouseOfGames API - my previous project from Northcoders Bootcamp',
    repoLink: 'https://github.com/SzymonOrchowski/nc-games',
    deployedLink: 'https://nc-board-games-project.netlify.app/',
    imageLink: '/FrontEndProject.jpg',
    releaseDate: '',
    visible: true,
  },
  {
    id: 3,
    name: 'House of Games',
    subheading: 'Northcoders Back-end project',
    description:
      'Back-end project focusing on methods for dealing with asynchronous programming, RESTful APIs and databases, as well as Express and SQL.',
    repoLink: 'https://github.com/SzymonOrchowski/be-nc-board-games',
    deployedLink: 'https://board-games-information-place.herokuapp.com/api',
    imageLink: '/BackEndProject.jpg',
    releaseDate: '',
    visible: true,
  },
  {
    id: 4,
    name: 'Climbly',
    subheading: 'Northcoders Final Project',
    description:
      'A full-stack project of a mobile app, that is a personalized version of catalog / informational place of hills and mountains located across the UK. It is built in React Native, EXPO, Express.js and Firebase among other frameworks and technologies.',
    repoLink: 'https://github.com/SzymonOrchowski/climbly',
    deployedLink: '',
    imageLink: '/Climbly.jpg',
    releaseDate: '',
    visible: true,
  },
  {
    id: 5,
    name: 'Noughts and crosses',
    subheading: 'Made in three.js',
    description:
      "This is my attempt to make a 3d version of the Noughts and Crosses game. All of the graphics in this game are generated procedurally. It's just the alpha version now. To spawn a figure use double-click. Work in progress...",
    repoLink: 'https://github.com/SzymonOrchowski/noughts_and_crosses_3d_game',
    deployedLink: 'https://noughts-and-crosses-3d-game.netlify.app/',
    imageLink: '/NoughtsAndCrossesGame.jpg',
    releaseDate: '',
    visible: true,
  },
  {
    id: 6,
    name: 'Clockwise Spiral Generator',
    subheading: 'Made in three.js',
    description:
      "This simple project comes up as a side result of my everyday coding practice. During solving one of Codewars's kata titled: The Clockwise Spiral I decided to code a visual presentation of a final algorithm.",
    repoLink: 'https://github.com/SzymonOrchowski/clockwise_spiral_3d_generator',
    deployedLink: 'https://3d-spiral-generator.netlify.app/',
    imageLink: '/SpiralGenerator.jpg',
    releaseDate: '',
    visible: true,
  },
  {
    id: 7,
    name: 'Playable city generator',
    subheading: 'Made in three.js',
    description:
      'This is an alpha version of a game application that procedurally generates a city map and allows users to explore it by moving a car using keyboard and keys W S A D. Still in early development stage so far.',
    repoLink: 'https://github.com/SzymonOrchowski/Procedural-City-Generator',
    deployedLink: 'https://procedural-city-generator.netlify.app',
    imageLink: '/CityGenerator.jpg',
    releaseDate: '',
    visible: true,
  },
  {
    id: 8,
    name: '3d bar chart',
    subheading: 'Made in three.js',
    description:
      'This is a 3d bar chart with a feature of displaying delta (difference) to previously displayed row of data',
    repoLink: 'https://github.com/SzymonOrchowski/three.js-charts-presentation',
    deployedLink: 'https://cosmic-kheer-20859e.netlify.app/',
    imageLink: '/BarChart.jpg',
    releaseDate: '',
    visible: true,
  },
];
