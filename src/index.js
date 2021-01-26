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
                  <div class = 'section-text section-padding'>My name is Kevin Fiero and I am in the job market for a full-stack software engineering position. I am located in Portland, Oregon but am open to remote work. I have over seven years of experience in the corporate supply chain and software industry. My experience ranges from roles such as business analyst, scrum master, developer, and software development manager. I have worked for both a Fortune 500 company and a fast paced growing startup in the east, mid-west, and south. Over the past six months I have immersed myself in a rigorous software bootcamp to refine my skills.</div>
                </div>
              </div>

              <div className="section column">
                <div className="slide">
                  <div class = 'column'>
                    <img class = 'slide-img header-img' src={cornellImg} alt='Cornell Logo'></img>
                    <div class = 'section-text'>I graduated from Cornell University with a bachelors in science in Operations Research & Information Engineering in 2013. The curriculum consisted of a wide range of topics from optimization, mathematical programming, industrial systems, computer science, and information technology. Here is where I learned the basis of my technical knowledge in computer programming while learning MATLAB, Java, VBA, and R along with theories such as discrete structures and object-oriented programming. </div>
                    <div class = 'section-text'>While attending the university I was a research assistant in the Human Computer Interaction lab focusing on the effects technology has on social behavior. In particular, I was investigating whether health based social mobile applications aided in healthy behaviors. A large part of this was aggregating data, running statistical models using the R programming language, and summarizing results.</div>
                  </div>
                </div>
                <div className="slide">
                  <div class = 'column'>
                    <img class = 'slide-img header-img' src={alchemyImg} alt='Alchemy Logo'></img>
                    <div class = 'section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>
              </div>

              <div className="section column">
                <div className='slide'>
                  <div className = 'column'>
                    <img class = 'slide-img header-img' src={llamasoftImg} alt='LLamasoft Logo'></img>
                    <div class = 'section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>
                <div className='slide'>
                  <div className = 'column'>
                    <img class = 'slide-img header-img' src={pepsiImg} alt='PepsiCo Logo'></img>
                    <div class = 'section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>
              </div>

              <div className="section column">

                <div className="slide">
                <h3>Realo</h3>
                  <div class = 'row'>
                    <img class = 'slide-img' src={zillow} alt='Zillow'></img>
                    <div class = 'section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>

                <div className="slide">
                <h3>Choose Gif</h3>
                  <div class = 'row'>
                    <img class = 'slide-img' src={gif} alt='Gif of Jif'></img>
                    <div class = 'section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>

                <div className="slide">
                <h3>Tic-Tac-Toe</h3>
                  <div class = 'row'>
                    <img class = 'slide-img' src={ticTacToe} alt='Tic-Tac-Toe Board'></img>
                    <div class = 'section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>

              </div>

              <div className="section">
                <div className = 'column'>
                  <h3>Contact</h3>
                  <div class = 'row contact-group'>
                    <a href = 'https://www.linkedin.com/in/kevinfiero/' target = '_blank' rel='noreferrer'>
                      <img src={linkedIn} alt='LinkedIn Icon'/>
                    </a>
                    <a href = 'https://github.com/kevinfiero/' target = '_blank' rel='noreferrer'>
                      <img src={github} alt='Github Icon'/>
                    </a>
                  </div>
                  <h5>Kevin Fiero © 2021</h5>
                  <button onClick={() => fullpageApi.moveTo(1, 0)}>Back to Top</button>
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
