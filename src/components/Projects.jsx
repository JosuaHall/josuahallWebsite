import React from "react";
import athletia from "../images/athletia.PNG";
import inventorySite from "../images/InventoryManagementSystem.PNG";
import jobfinderJobMatch from "../images/jobfinderJobMatch.JPG";
import vid from "../images/athletiavid.mp4";
import ss1 from "../images/Screenshot1.png";
import ss2 from "../images/Screenshot2.png";
import ss3 from "../images/Screenshot3.png";
import ss4 from "../images/Screenshot4.png";
import ss5 from "../images/Screenshot5.png";
import logo from "../images/appicon.png";

const Projects = () => (
  <div className="section black-font">
    <section className="viewheight">
      <h2 className="heading">My Projects</h2>
      <p className="mb-5">
        ​Welcome to my portfolio section where I showcase my web development
        projects. I am thrilled to present a selection of my work that
        demonstrates my skills and passion for building innovative and
        interactive web/mobile applications. Each project highlights my
        technical expertise and attention to detail, showcasing my ability to
        turn complex problems into simple, user-friendly solutions. I hope you
        enjoy exploring my portfolio and learning more about my approach to
        web/mobile development.
      </p>
      <div className="app-header">
        <img
          src={logo}
          alt=""
          style={{ objectFit: "cover" }}
          className="athletia-logo"
        />
        <h3>Co-Founder & Lead Software Engineer of Athletia</h3>

        <button
          style={{
            backgroundColor: "#bd2c00",
            border: "solid #bd2c00 1px",
          }}
          className="btn btn-primary mx-2"
          onClick={() =>
            window.open("https://github.com/JosuaHall/athletiaReactNativeApp")
          }
        >
          Github
        </button>
        <button
          style={{
            backgroundColor: "#317af3",
            border: "solid #317af3 1px",
          }}
          className="btn btn-primary mx-2"
          onClick={() =>
            window.open("https://apps.apple.com/hu/app/athletia/id6463032641")
          }
        >
          App Store
        </button>
      </div>
      <div className="app-store-cards">
        <img src={ss1} alt="" className="app-store-card" />
        <img src={ss2} alt="" className="app-store-card" />
        <img src={ss3} alt="" className="app-store-card" />
        <div className="image-container">
          <img src={ss4} alt="" className="app-store-card" />
          <img src={ss5} alt="" className="app-store-card" />
        </div>
      </div>

      <p className="my-4">
        Spearheaded Athletia’s full-stack development, transforming sports event
        platforms for fan-centric engagement. <br /> Developed and refined
        end-to-end business logic, maintaining complete control from client to
        server to database.
        <br /> Conducted an intensive 3-month test phase involving 500 students,
        utilizing an agile development approach for continuous improvement based
        on invaluable user feedback, resulting in a 20% increase in game
        attendance.
      </p>
      <p>
        - Leveraged knowledge: JavaScript, React, React Native, Redux, Node.js,
        Express.js, RESTful API, MongoDB.
      </p>

      <video controls className="my-0  padding-0 vid">
        <source src={vid} type="video/mp4" />
      </video>
    </section>

    <h2 className="heading mt-5">Other Projects</h2>
    <div className="projects-container">
      <div className="projects-card-area white-font">
        <div className="project-card">
          <div className="project-card-content">
            <div>
              <img src={jobfinderJobMatch} alt="" />
            </div>
            <div>
              <h4 className="text-center underline-project-card">
                JobFinderAI
              </h4>
            </div>
            <div className="list-project">
              <p>
                Collaborated on developing the JobFinderAI platform, enabling
                users to match their resumes with suitable jobs.
              </p>
              <ul>
                <li>
                  Managed and matched over 60,000 jobs stored in the database
                  across various states.
                </li>
                <li>
                  Engineered the platform to harness k-Nearest Neighbor
                  algorithm and vector search technology to reduce job matching
                  time, enhance precision, and empower users to discover
                  relevant job recommendations and perfect matches.
                </li>
                <li>
                  Improved job matching accuracy with machine learning,
                  including natural language processing, leading to fewer
                  mismatches and increased successful job matches.
                </li>
                <li>
                  <u>Utilized</u>: React, Redux, Node, MongoDB, Vector Search,
                  k-Nearest Neighbor Algorithm, Large Language Model, R
                </li>
              </ul>
            </div>
          </div>
          <div>
            <span>
              <button
                style={{
                  backgroundColor: "#bd2c00",
                  border: "solid #bd2c00 1px",
                }}
                className="btn btn-primary mx-2"
                onClick={() =>
                  window.open("https://github.com/JosuaHall/jobfinderServer")
                }
              >
                Github
              </button>

              <button
                id="desktopButton"
                style={{
                  backgroundColor: "#007bff",
                  border: "solid #007bff 1px",
                }}
                className="btn btn-success mx-2"
                onClick={() => window.open("https://jobfinderai.netlify.app/")}
              >
                Live
              </button>
            </span>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <div>
              <img src={athletia} alt="" />
            </div>
            <div>
              <h4 className="text-center underline-project-card">
                Web App: Athletia
              </h4>
            </div>
            <div>
              <p>
                Athletia is a comprehensive web application complemented by its
                React Native mobile counterpart, offering a seamless full-stack
                experience
              </p>

              <div className="list-project">
                <ul>
                  <li>
                    Enhanced user engagement and streamlined event management
                    for a wide variety of college/club teams.
                  </li>
                  <li>
                    Engineered a full-stack web app and a React Native mobile
                    app.
                  </li>
                  <li>
                    Designed RESTful backend server for organizations, teams,
                    events, ensuring seamless cross-platform experience.
                  </li>
                  <li>
                    Implemented robust authentication and data security using
                    JSON web-token and password encryption.
                  </li>
                  <li>
                    <u>Utilized</u>: JavaScript, React.js, React Native, Redux,
                    Node.js, Express.js, NoSQL, MongoDB, JSON Web Token
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <span>
              <button
                style={{
                  backgroundColor: "#bd2c00",
                  border: "solid #bd2c00 1px",
                }}
                className="btn btn-primary mx-2"
                onClick={() =>
                  window.open("https://github.com/JosuaHall/athletia-client")
                }
              >
                Github
              </button>
            </span>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <div>
              <img src={inventorySite} alt="" />
            </div>
            <div>
              <h4 className="text-center underline-project-card">
                Inventory System
              </h4>
            </div>
            <div>
              <p>
                Led a team of 4 associates in executing a successful Scrum
                project for a business in Colorado, optimizing real-time
                tracking and resulting in a 15% increase in profit through
                enhanced cash flow management and expense control.
              </p>

              <div className="list-project">
                <ul>
                  <li>
                    Led a team of 4 students in a successful Scrum project.
                  </li>
                  <li>
                    Distributed tasks effectively, conducted weekly client
                    meetings, and created a Gantt chart using Microsoft Project
                    for comprehensive project planning and scheduling, resulting
                    in the timely completion of project goals.
                  </li>
                  <li>
                    Designed and implemented an efficient Inventory Management
                    System, reducing tracking errors by 25%.
                  </li>
                  <li>
                    <u>Utilized</u>: Microsoft Project, Python, Flask, Jinja2,
                    SQL, HTML, and CSS.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <span>
              <button
                style={{
                  backgroundColor: "#bd2c00",
                  border: "solid #bd2c00 1px",
                }}
                className="btn btn-primary mx-2"
                onClick={() =>
                  window.open("https://github.com/JosuaHall/inventorySystem")
                }
              >
                Github
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
