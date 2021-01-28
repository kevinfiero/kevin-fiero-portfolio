import gifImage from './assets/giphy.gif';
import ticTacToeImage from './assets/ticTacToe.svg';
import realoImage from './assets/house.svg';

export const gifProject =
{
  name: 'Choose Gif',
  websiteUrl: 'https://choose-gif-fe.netlify.app/',
  githubUrl: 'https://github.com/Choose-Gif',
  overview: 'This application allows users to search for their favorite GIFs to easily copy the URL and send to friends. Users can even create an account to favorite GIFs to store for later use. The home page is update in real-time to show the six most popular GIFs and top three trending categories.',
  technical: 'This project employs a React.js front-end and Node.js back-end. PostgreSQL stores data associated with users\' favorites GIFs. The use of media queries allows the application to be mobile friendly. Tests were written using Jest.js to ensure routes are working as expected. This is hosted on GitHub pages.',
  img: gifImage,
  imgAltText: 'Gif of Jif'
};

export const realoProject =
{
  name: 'Realo',
  websiteUrl: 'https://realo.herokuapp.com/',
  githubUrl: 'https://github.com/ET-Phone-Home-Alchemy',
  overview: 'This application allows users to sign up for a text messaging service that alerts them as soon as a new property listing is on the market in the city of Portland. Users can input their preferences such as price range, square feet, and number of rooms. Multiple alerts can be set for different range of preferences.',
  technical: 'This project runs on Node.js and is hosted on Heroku. The front-end is created using Pug.js and is rendered directly on the Heroku dyno. Users have their passwords encrypted using Bcrypt authentication which keeps the application secure. The heart of the application uses Cheerio.js to pull down the HTML off the Zillow web page and jQuery to extract the desired elements. A throttle was used to slow down the request to the web page. The listings, filters, and user information is stored in a PostgreSQL database. Node Mailer automates the sending of text messages via Google\'s SMTP client.',
  img: realoImage,
  imgAltText: 'Zillow Icon'
};

export const ticTacToeProject =
{
  name: 'Tic-Tac-Toe',
  websiteUrl: 'https://sformichella.github.io/t4-xoxo/',
  githubUrl: 'https://github.com/sformichella/t4-xoxo',
  overview: 'This application allows users to play a virtual game of tic-tac-toe against the computer. The user can choose the difficulty and color of their piece. The overall score is kept track and results can be viewed in a graph.',
  technical: 'This project uses vanilla JavaScript, HTML, and CSS. The user information such as preferred color, name, difficulty, and score are stored in local storage. Canvas is used to plot the data from local storage once the scoreboard is populated. The competitive game mode algorithm was written by myself and mirrors how I would approach playing a game in real life. Lastly, the colors of the pieces and the line indicating a win are constructed from manipulating the color and rotation of SVG files. The front-end is hosted on Netlify and the back-end is hosted on Heroku.',
  img: ticTacToeImage,
  imgAltText: 'Tic-Tac-Toe Board'
};
