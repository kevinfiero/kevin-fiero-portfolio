/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import kevinImg from './assets/kevin.jpg';
import cornellImg from './assets/cornell.jpg';
import alchemyImg from './assets/alchemy.jpg';
import llamasoftImg from './assets/llamasoft.png';
import pepsiImg from './assets/pepsi.jpg';
import linkedIn from './assets/linkedin.png';
import github from './assets/github.png';
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
        sectionsColor={["orange", "purple", "green", "blue"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <h3>Kevin Fiero</h3>
              </div>

              <div className="section column">
                <h3>About Me</h3>
                <div class = 'row'>
                  <img class = 'slide-img' src={kevinImg} alt='Kevin Headshot'></img>
                  <div class = 'section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
              </div>

              <div className="section column">
                <div className="slide">
                  <h3>Education</h3>
                  <div class = 'row'>
                    <img class = 'slide-img' src={cornellImg} alt='Cornell Logo'></img>
                    <div class = 'section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>
                <div className="slide">
                  <h3>Education</h3>
                  <div class = 'row'>
                    <img class = 'slide-img' src={alchemyImg} alt='Alchemy Logo'></img>
                    <div class = 'section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>
              </div>

              <div className="section column">
                <div className="slide">
                  <h3>Work Experience</h3>
                  <div class = 'row'>
                    <img class = 'slide-img' src={llamasoftImg} alt='LLamasoft Logo'></img>
                    <div class = 'section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>
                <div className="slide">
                  <h3>Work Experience</h3>
                  <div class = 'row'>
                    <img class = 'slide-img' src={pepsiImg} alt='Pepsi Logo'></img>
                    <div class = 'section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>
              </div>

              <div className="section">
                <h3>Contact</h3>
                <div class = 'row'>
                  <img src={linkedIn} alt='LinkedIn Icon' />
                  <img src={github} alt='Github Icon' />
                </div>
                <h3>Kevin Fiero © 2021</h3>
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
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
