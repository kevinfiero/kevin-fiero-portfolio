/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import kevinImg from './assets/kevin.jpg';
import cornellImg from './assets/cornell.svg';
import alchemyImg from './assets/alchemy.svg';
import llamasoftImg from './assets/llamasoft.svg';
import pepsiImg from './assets/pepsico.svg';
import linkedIn from './assets/linkedin.png';
import github from './assets/github.png';
import ticTacToe from './assets/ticTacToe.svg';
import zillow from './assets/zillow.svg';
import gif from './assets/giphy.gif';

import "./styles.css";

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["#daad86", "#e27d60", "#7bc4c9", "#e8a87c", '#c38d9e','#d8e2dc']}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <h3>Kevin Fiero</h3>
              </div>

              <div className="section column">
                <h3>Welcome!</h3>
                <div class = 'row'>
                  <img class = 'slide-img portrait-img' src={kevinImg} alt='Kevin Headshot'></img>
                  <div class = 'section-text section-padding'>My name is Kevin Fiero and I am in the job market for a full-stack software engineering position. I am located in Portland, Oregon but am open to remote work. I have over seven years of experience in the corporate supply chain and software industry. My experience ranges from roles such as business analyst, scrum master, developer, and software development manager. I have worked for both a Fortune 100 company and a fast paced growing startup in the east, mid-west, and south. Over the past six months I have immersed myself in a rigorous software bootcamp to refine my skills.</div>
                </div>
              </div>

              <div className="section column">
                <div className="slide">
                  <div class = 'column'>
                    <img class = 'slide-img header-img' src={cornellImg} alt='Cornell Logo'></img>
                    <h5>Ithaca, NY (2009 - 2013)</h5>
                    <div class = 'section-text'>I graduated from Cornell University with a bachelors in science in Operations Research & Information Engineering in 2013. The curriculum consisted of a wide range of topics from optimization, mathematical programming, industrial systems, computer science, and information technology. Here is where I learned the basis of my technical knowledge in computer programming while learning MATLAB, Java, VBA, and R along with theories such as discrete structures and object-oriented programming. </div>
                    <div class = 'section-text'>While attending the university I was a research assistant in the Human Computer Interaction lab focusing on the effects technology has on social behavior. In particular, I was investigating whether health based social mobile applications aided in healthy behaviors. A large part of this was aggregating data, running statistical models using the R programming language, and summarizing results.</div>
                  </div>
                </div>
                <div className="slide">
                  <div class = 'column'>
                    <img class = 'slide-img header-img' src={alchemyImg} alt='Alchemy Logo'></img>
                    <h5>Portland, OR (September 2020 - March 2021)</h5>
                    <div class = 'section-text'>After seven years of working in the supply chain and software space I decided to take a break and fully commit to upskilling my technical skills. I had a solid base with learning various programming languages at Cornell and taught myself on the job to automate reporting and monotonous tasks. However, I wanted to learn the industry's latest and greatest in web development.</div>
                    <div class = 'section-text'>While at Alchemy I had the opportunity to refresh my basic skills in JavaScript, HTML5, and CSS. We quickly moved on to libraries such as React.js, Node.js, Jest, Bcrypt authentication and technologies such as Git, VSCode, Terminal, PostgreSQL, Jest, and Postman. Additionally, there was a focus on TDD and pushing code through the CI/CD pipeline to host on Heroku and Netlify. Check out my projects further down on my site or visit the Alchemy web page to view what I learned throughout the program.</div>
                  </div>
                </div>
              </div>

              <div className="section column">
                <div className='slide'>
                  <div className = 'column'>
                    <img class = 'slide-img header-img' src={llamasoftImg} alt='LLamasoft Logo'></img>
                    <h5>Ann Arbor, MI (2017 - 2020)</h5>
                    <div class = 'section-text'>After the experience I gained at PepsiCo in the supply chain and information technology space I was hired at LLamasoft for my subject matter expertise. My primary responsibility was to guide the company on their supply chain data management and visualization component of their emerging web platform. I served as a business analyst and scrum master gathering requirements and working with developers to execute the vision.</div>
                    <div class = 'section-text'>As the company rapidly grew I gained new responsibilities as a software development manager. In this role I had a team of developers, business analysts, and quality assurance analysts working for me to deliver a part of this supply chain enterprise web platform. My responsibilities included people management, leading our development recruitment pipeline, release management, and cross-team collaboration with peer managers. Shortly after leaving the company it was acquired by a larger company, Coupa, because of their interest in the web platform I had a direct hand in creating.</div>
                  </div>
                </div>
                <div className='slide'>
                  <div className = 'column'>
                    <img class = 'slide-img header-img' src={pepsiImg} alt='PepsiCo Logo'></img>
                    <h5>Plano, TX (2013 - 2017)</h5>
                    <div class = 'section-text'>While attending Cornell I had a summer internship at PepsiCo in New York which led to my full-time position in Texas upon graduation. While at PepsiCo I had three different roles within the supply chain and information technology spaces. </div>
                    <div class = 'section-text'>My first role was as a project manager to work with developers to convert a Microsoft Access database and Excel front-end supply chain tool to a SQL Server back-end with a web front-end. I learned how to talk to both stakeholders and developers in this role and the different language needed to communicate effectively. This was the first time I was exposed to the project management lifecycle, different controls in a large company to manage software release, and how to execute on a project plan.</div>
                    <div class = 'section-text'>The second role involved establishing an internal database pipeline so that PepsiCo could get detailed product information and high resolution images to third-party sellers such as Amazon or Kroger. My role was to establish the database schema, construct the extract-transfer-load (ETL) process using Informatica, and training business users to use the new system.</div>
                    <div class = 'section-text'>My final role was automating reports using a mix of Visual Basic, Oracle SQL, and Tableau visualization software to send to PepsiCo factory employees to plan out their supply chain production runs. This gave valuable knowledge to over 500 employees across the company to make informed decisions on which products to produce over the next several months. This experience planted the seeds in my mind to work for a company and learn cutting edge technologies.</div>
                  </div>
                </div>
              </div>

              <div className="section column">

              <div className="slide">
                <h3>Choose Gif</h3>
                  <div class = 'row'>
                    <img class = 'slide-img gif-img' src={gif} alt='Gif of Jif'></img>
                    <div class = 'column'>
                      <div class = 'section-text left-pad'>Overview: This application allows users to search for their favorite GIFs to easily copy the URL and send to friends. Users can even create an account to favorite GIFs to store for later use. The home page is update in real-time to show the six most popular GIFs and top three trending categories.</div>
                      <div class = 'section-text left-pad'>Technical Specifications: This project employs a React.js front-end and Node.js back-end. PostgreSQL stores data associated with users' favorites GIFs. The use of media queries allows the application to be mobile friendly. Tests were written using Jest.js to ensure routes are working as expected. This is hosted on GitHub pages.</div>
                    </div>
                  </div>
                </div>

                <div className="slide">
                <h3>Realo</h3>
                  <div class = 'row'>
                    <img class = 'slide-img realo-img' src={zillow} alt='Zillow'></img>
                      <div class = 'column'>
                        <div class = 'section-text left-pad'>Overview: This application allows users to sign up for a text messaging service that alerts them as soon as a new property listing is on the market in the city of Portland. Users can input their preferences such as price range, square feet, and number of rooms. Multiple alerts can be set for different range of preferences.</div>
                        <div class = 'section-text left-pad'>Technical Specifications: This project runs on Node.js and is hosted on Heroku. The front-end is created using Pug.js and is rendered directly on the Heroku dyno. Users have their passwords encrypted using Bcrypt authentication which keeps the application secure. The heart of the application uses Cheerio.js to pull down the HTML off the Zillow web page and jQuery to extract the desired elements. A throttle was used to slow down the request to the web page. The listings, filters, and user information is stored in a PostgreSQL database. Node Mailer automates the sending of text messages via Google's SMTP client.</div> 
                      </div>
                  </div>
                </div>

                <div className="slide">
                <h3>Tic-Tac-Toe</h3>
                  <div class = 'row'>
                    <img class = 'slide-img tic-tac-img' src={ticTacToe} alt='Tic-Tac-Toe Board'></img>
                    <div class = 'column'>
                      <div class = 'section-text left-pad'>Overview: This application allows users to play a virtual game of tic-tac-toe against the computer. The user can choose the difficulty and color of their piece. The overall score is kept track and results can be viewed in a graph.</div>
                      <div class = 'section-text left-pad'>Technical Specifications: This project uses vanilla JavaScript, HTML, and CSS. The user information such as preferred color, name, difficulty, and score are stored in local storage. Canvas is used to plot the data from local storage once the scoreboard is populated. The competitive game mode algorithm was written by myself and mirrors how I would approach playing a game in real life. Lastly, the colors of the pieces and the line indicating a win are constructed from manipulating the color and rotation of SVG files. The front-end is hosted on Netlify and the back-end is hosted on Heroku.</div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="section">
                <div className = 'column'>
                  <h1>Send me a message on LinkedIn!</h1>
                  <div class = 'row contact-group'>
                    <a href = 'https://www.linkedin.com/in/kevinfiero/' target = '_blank' rel='noreferrer'>
                      <img src={linkedIn} alt='LinkedIn Icon'/>
                    </a>
                    <a href = 'https://github.com/kevinfiero/' target = '_blank' rel='noreferrer'>
                      <img src={github} alt='Github Icon'/>
                    </a>
                  </div>
                  <button onClick={() => fullpageApi.moveTo(1, 0)}>Back to Top</button>
                  <h5>Kevin Fiero © 2021</h5>
                </div>

              </div>
            </div>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));

export default FullpageWrapper;
