import React from "react";
import athletia from "../images/athletia.PNG";
import markushall from "../images/markushall.PNG";
import inventorySite from "../images/InventoryManagementSystem.PNG";
import jobfinderJobMatch from "../images/jobfinderJobMatch.JPG";
import vid from "../images/athletiavid.mp4";
import ss1 from "../images/Screenshot1.png";
import ss2 from "../images/Screenshot2.png";
import ss3 from "../images/Screenshot3.png";
import ss4 from "../images/Screenshot4.png";
import ss5 from "../images/Screenshot5.png";
import logo from "../images/athletia_app_logo.png";
import AliceCarousel from "react-alice-carousel";
import { Fragment } from "react";

const Projects = () => (
  <div className="section white-font">
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
        <h3>Social Media App - Built with React-Native</h3>

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

      <video controls className="my-5 vid">
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
                Created a job finder AI platform enabling users to match their
                resumes with suitable jobs.
              </p>
              <ul>
                <li>
                  Significantly improved job matching accuracy and relevance.
                </li>
                <li>
                  Engineered the platform to harness k-Nearest Neighbor
                  algorithm and vector search technology.
                  <li>
                    Enabled precise job matches based on user resumes, elevating
                    the user experience and results significantly.
                  </li>
                </li>
                <li>
                  <u>Utilized</u>: React, Redux, Node, MongoDB, Vector Search,
                  K-nearest Neighbor Algorithm, Large Language Model (OpenAI), R
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
                  window.open("https://github.com/JosuaHall/inventorySystem")
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
                I created a custom Inventory Management System for C&O Windows,
                a local windows and doors manufacturer based in Colorado. I am
                proud to have made a positive impact for this Colorado-based
                company.
              </p>

              <div className="list-project">
                <ul>
                  <li>
                    Led a team of 4 students in a successful Scrum project.
                  </li>
                  <li>Achieved project milestones and client satisfaction.</li>
                  <li>
                    The system streamlines inventory management and tracks
                    product movement, providing real-time data on stock levels,
                    orders, and reporting.
                  </li>
                  <li>
                    Effectively distributed tasks, conducted regular client
                    meetings, and ensured efficient communication, resulting in
                    the timely completion of project goals.
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
