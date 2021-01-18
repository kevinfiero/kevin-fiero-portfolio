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
        sectionsColor={["#daad86", "#e27d60", "#7bc4c9", "#e8a87c", '#c38d9e']}
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
                    <div class = 'section-text column'>
                      <h5>Software Development Manager</h5>
                      <section>
                        Managed a team of software developers, quality analysts, and business analysts to contribute to an
                        enterprise SaaS platform. This included overseeing the gathering of requirements, delivery of code,
                        execution of quality standards, and deployment through the continuous integration pipeline. The
                        development stack consisted of C#, .NET, React, Docker, Kubernetes, and SQL Server. Responsible for
                        hiring decisions, professional development, performance management, and delivery timelines.
                        Additionally, breaking down barriers between peer development managers, DevOps, UI/UX, and
                        product management to ensure cross-team dependencies and broader company initiatives were
                        considered.
                      </section>
                      <h5>Scrum Master</h5>
                      <section>
                        Guided a team of software developers in the agile scrum methodology to ensure efficient allotment of
                        resources and meet realistic timelines. This included hosting all scrum meetings, tracking work in Jira,
                        defining requirements in Confluence, and facilitating discussion between developers. Additionally, this
                        required collaborating cross-functionally with UI/UX, documentation, product management, and senior
                        management. Ensured that scrum events were hosted at a regular cadence and stories were well defined
                        and estimated prior to being developed. My priority was to foster communication between developers to
                        remove any road blocks that prevented progress. The product allowed supply chain customers to easily
                        transform and make educated decisions based on their complex logistics network using data management
                        and visualizations.
                      </section>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <h3>Work Experience</h3>
                  <div class = 'row'>
                    <img class = 'slide-img' src={pepsiImg} alt='Pepsi Logo'></img>
                    <div class = 'section-text column'>
                      <h5>Supply Chain Systems and Metrics Analyst</h5>
                      <section>
                        Created and maintained reports pertaining to Frito-Lay North American demand production planning.
                        Reports allowed 500+ field resources to implement strategic data-driven decisions at each of the 34
                        manufacturing facilities. Automation was done by using VBScript to activate Oracle and Access
                        processes. Reports were delivered via mass email generation pointing to downloadable spreadsheets.
                        Created Tableau visualizations to promote the supply chain center of excellence. Data from existing
                        reports was used to upgrade the antiquated visual basic backend to an Oracle and Tableau ecosystem.
                        Leveraged the free QGIS software to create custom geo-coded Frito-Lay regions. Worked with IT
                        services to set up an environment to allow end users to access visualizations.
                      </section>
                      <h5>Master Data Management and Business Intelligence Associate Analyst</h5>
                      <section>
                        Managed master material data using the Teradata SQL client that is used by internal applications in
                        addition to being sent as an XML file for third party usage such as Amazon and Walmart. Streamlined the
                        upgrade testing process to a new XML file format using R scripting. Intervention reduced the turnaround
                        from once a week to once per day and allowed significantly more improvements to be made during user
                        acceptance testing before go-live cutover.
                        Designed, tested, and maintained the interface and enhancements to the master data system to retain
                        incoming images by assuming the role of functional lead. This project was an effort to consolidate all
                        brands and manage our digital presence in the e-commerce space. Created field mapping and functional
                        design documents, gained approval of design by presenting to leadership, and worked with our internal 
                        source system team to analyze downstream system impact and constraints. Challenges included
                        conforming to reference data standards and coordinating with other teams to ensure minimal crossproject impact. Our team received the PepsiCo’s CIO award for this project.
                      </section>
                    </div>                  
                  </div>
                </div>
                <div className="slide">
                  <h3>Work Experience</h3>
                  <div class = 'row'>
                    <img class = 'slide-img' src={pepsiImg} alt='Pepsi Logo'></img>
                    <div class = 'section-text column'>
                      <h5>Supply Chain Solutions Delivery Associate Analyst</h5>
                      <section>
                        Drove technical initiative to aid developers in democratizing an Internet of things (IoT) mobile
                        application for Frito-Lay packaging resources to view key performance indicators. Application
                        development leveraged the agile methodology and ThingWorx software platform. Responsibilities
                        included establishing development and test environments, analyzing a prototype to leverage for mass
                        internal distribution, and working with business partners to prioritize development while adhering to the
                        project lifecycle methodology standards. Created knowledge documents to aid the baseline support team
                        upon deployment of the application.
                      </section>
                      <h5>Supply Chain Analyst Intern</h5>
                      <section>
                        Analyzed the efficiency and possible improvement of supply chain software by use of PL/SQL using
                        Oracle, DB2, and Sybase database systems to obtain data for analysis. Assisted in resolving issues with
                        software developers and reported findings to business partners with documentation. The
                        recommendation suggested to management would eliminate one day of lead-time on deliveries thus
                        improving the current supply chain system by delivering products to clients more efficiently.
                      </section>
                    </div>                  
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
